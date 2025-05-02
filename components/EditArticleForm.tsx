'use client'

import { useState } from 'react'
import { Upload, X } from 'lucide-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const articleTypes = [
  {
    id: 'text',
    label: 'Texte seul',
    mockup: (
      <div className="w-20 h-28 flex flex-col gap-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    )
  },
  {
    id: 'text-image-side',
    label: 'Texte + une image à côté',
    mockup: (
      <div className="w-20 h-28 flex gap-2">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
        <div className="w-8 h-[70px] bg-gray-500 rounded"></div>
      </div>
    )
  },
  {
    id: 'text-image-bottom',
    label: 'Texte + plusieurs images en dessous',
    mockup: (
      <div className="w-20 h-28 flex flex-col gap-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="flex gap-1 mt-2">
          <div className="flex-1 h-8 bg-gray-500 rounded"></div>
          <div className="flex-1 h-8 bg-gray-500 rounded"></div>
          <div className="flex-1 h-8 bg-gray-500 rounded"></div>
        </div>
      </div>
    )
  }
]

export default function EditArticleForm({ article }: { article: any }) {
  const [type, setType] = useState(article.type)
  const [title, setTitle] = useState(article.title)
  const [content, setContent] = useState(article.content)
  const [images, setImages] = useState<FileList | null>(null)
  const [previewUrls, setPreviewUrls] = useState<string[]>(article.images || [])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const supabase = useSupabaseClient()
  const router = useRouter()

  const removeImage = (index: number) => {
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index))
    if (images) {
      const dt = new DataTransfer()
      Array.from(images)
        .filter((_, i) => i !== index)
        .forEach((file) => dt.items.add(file))
      setImages(dt.files)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    if (type === 'text') return
    if (type === 'text-image-side' && files.length > 1) {
      toast.error("Tu ne peux uploader qu'une seule image pour ce type d'article.")
      return
    }
    if (type === 'text-image-bottom' && files.length > 10) {
      toast.error("Tu ne peux pas uploader plus de 10 images.")
      return
    }

    const newUrls = Array.from(files).map((file) => URL.createObjectURL(file))
    if (type === 'text-image-side') {
      setImages(files)
      setPreviewUrls(newUrls)
    } else {
      setImages((prev) => {
        if (!prev) return files
        const combined = new DataTransfer()
        Array.from(prev).forEach((file) => combined.items.add(file))
        Array.from(files).forEach((file) => combined.items.add(file))
        return combined.files
      })
      setPreviewUrls((prevUrls) => [...prevUrls, ...newUrls])
    }
  }

  const uploadImages = async () => {
    if (!images || images.length === 0) return previewUrls
  
    const uploadedUrls: string[] = []
  
    for (const file of Array.from(images)) {
      const filename = `${Date.now()}_${file.name}`
      const { error } = await supabase.storage.from('news-images').upload(filename, file)
  
      if (error) {
        console.error('Erreur upload image :', error)
        continue
      }
  
      const { data: publicUrlData } = supabase
        .storage
        .from('news-images')
        .getPublicUrl(filename)
  
      if (publicUrlData?.publicUrl) {
        uploadedUrls.push(publicUrlData.publicUrl)
      }
    }
  
    return [...previewUrls, ...uploadedUrls] 
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      toast.error('Titre et contenu sont obligatoires.')
      return
    }
    if (type !== 'text' && previewUrls.length === 0) {
      toast.error("Tu dois ajouter au moins une image pour ce type d'article.")
      return
    }

    setIsSubmitting(true)
    const uploadedUrls = await uploadImages()

    const { error } = await supabase
      .from('news')
      .update({ title, content, type, images: uploadedUrls })
      .eq('id', article.id)

    if (error) {
      console.error('Erreur mise à jour :', error)
      toast.error("Erreur lors de la mise à jour de l'article")
    } else {
      toast.success("Article mis à jour avec succès !")
    }
    setIsSubmitting(false)
  }

  const handleDelete = async () => {
    const confirmed = window.confirm("Es-tu sûr de vouloir supprimer cet article ? 😬")
    if (!confirmed) return

    setIsDeleting(true)

    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', article.id)

    if (error) {
      console.error("Erreur suppression :", error)
      toast.error("Erreur lors de la suppression de l’article")
      setIsDeleting(false)
      return
    }

    toast.success("Article supprimé ✅")
    router.push('/nutella')
  }

  return (
    <form onSubmit={handleUpdate} className="space-y-6">
      <div className="space-y-2">
        <p className="font-semibold">Type d'article :</p>
        <div className="grid grid-cols-3 gap-4">
          {articleTypes.map((option) => (
            <label
              key={option.id}
              className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition ${
                type === option.id ? 'border-amber-500 bg-amber-100' : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="articleType"
                value={option.id}
                checked={type === option.id}
                onChange={(e) => setType(e.target.value)}
                className="hidden"
              />
              <div className="mb-2">{option.mockup}</div>
              <span className="text-sm text-center">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="font-semibold">Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg mt-1"
          required
        />
      </div>

      <div>
        <label className="font-semibold">Contenu</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded-lg mt-1"
          rows={5}
          required
        />
      </div>

      {type !== 'text' && (
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Photo(s) :</label>
          <label
            htmlFor="edit-upload"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-amber-400 rounded-lg cursor-pointer hover:bg-amber-50 transition"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 text-amber-400" />
              <p className="mb-2 text-sm text-gray-500">Clique ici pour importer</p>
              <p className="text-xs text-gray-400">PNG, JPG jusqu'à 10MB</p>
            </div>
            <input id="edit-upload" type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>

          {previewUrls.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative group">
                  <img
                    src={url}
                    alt={`Preview ${index}`}
                    className="object-cover w-full h-32 rounded-lg border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-white text-black rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"
                    aria-label="Supprimer l’image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-3 rounded-lg font-semibold transition duration-200 ${
          isSubmitting
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-amber-500 hover:bg-amber-600 text-white'
        }`}
      >
        {isSubmitting ? 'Mise à jour en cours...' : 'Mettre à jour l’article'}
      </button>

      <button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
        className={`w-full p-3 rounded-lg font-semibold border transition duration-200 ${
          isDeleting
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'border-red-500 text-red-500 hover:bg-red-50'
        }`}
      >
        {isDeleting ? 'Suppression en cours...' : 'Supprimer l’article'}
      </button>
    </form>
  )
}
