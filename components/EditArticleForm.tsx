'use client'

import { useState, useEffect } from 'react'
import { Upload, X } from 'lucide-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

const articleTypes = [
  { id: 'text', label: 'Texte seul' },
  { id: 'text-image-side', label: 'Texte + une image à côté' },
  { id: 'text-image-bottom', label: 'Texte + plusieurs images en dessous' },
]

export default function EditArticleForm({ article }: { article: any }) {
  const [type, setType] = useState(article.type)
  const [title, setTitle] = useState(article.title)
  const [content, setContent] = useState(article.content)
  const [images, setImages] = useState<FileList | null>(null)
  const [previewUrls, setPreviewUrls] = useState<string[]>(article.images || [])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const supabase = useSupabaseClient()

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
    setImages(files)
    setPreviewUrls(newUrls)
  }

  const uploadImages = async () => {
    if (!images) return previewUrls

    const uploadedUrls: string[] = []
    for (const file of Array.from(images)) {
      const filename = `${Date.now()}_${file.name}`
      const { error } = await supabase.storage.from('news-images').upload(filename, file)
      if (error) {
        console.error('Erreur upload image :', error)
        continue
      }
      const { data: publicUrlData } = supabase.storage.from('news-images').getPublicUrl(filename)
      if (publicUrlData?.publicUrl) {
        uploadedUrls.push(publicUrlData.publicUrl)
      }
    }
    return uploadedUrls
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

  return (
    <form onSubmit={handleUpdate} className="space-y-6">
      <div>
        <label className="font-semibold">Type d'article :</label>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {articleTypes.map((opt) => (
            <label
              key={opt.id}
              className={`p-3 rounded-lg border cursor-pointer transition text-center font-medium text-sm ${
                type === opt.id ? 'bg-amber-100 border-amber-500' : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                value={opt.id}
                checked={type === opt.id}
                onChange={(e) => setType(e.target.value)}
                className="hidden"
              />
              {opt.label}
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
        <div>
          <label className="font-semibold">Images</label>
          <label htmlFor="edit-upload" className="block w-full border-2 border-dashed rounded-lg p-6 text-center text-sm cursor-pointer hover:bg-amber-50 mt-2">
            <Upload className="mx-auto mb-2 text-amber-500" />
            Cliquez ici pour remplacer les images
            <input id="edit-upload" type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
          {previewUrls.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-4">
              {previewUrls.map((url, i) => (
                <div key={i} className="relative group">
                  <img src={url} className="w-full h-32 object-cover rounded-lg border" />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 bg-white text-black rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"
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
        className={`w-full p-3 rounded-lg font-semibold transition ${
          isSubmitting
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-amber-500 hover:bg-amber-600 text-white'
        }`}
      >
        {isSubmitting ? 'Mise à jour en cours...' : 'Mettre à jour l’article'}
      </button>
    </form>
  )
}
