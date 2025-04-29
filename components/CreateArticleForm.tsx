'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

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
      },
  ]  

export default function CreateArticleForm() {
  const [type, setType] = useState('text')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [images, setImages] = useState<FileList | null>(null)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const supabase = useSupabaseClient()
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      if (files.length > 10) {
        alert('Tu ne peux pas uploader plus de 10 images.')
        return
      }
      setImages(files)

      // Créer des previews locales
      const newUrls = Array.from(files).map((file) => URL.createObjectURL(file))
      setPreviewUrls((prevUrls) => [...prevUrls, ...newUrls])
    }
  }

  const uploadImages = async () => {
    if (!images) return []

    const uploadedUrls: string[] = []

    for (const file of Array.from(images)) {
      const filename = `${Date.now()}_${file.name}`
      const { data, error } = await supabase.storage
        .from('news-images')
        .upload(filename, file)

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

    return uploadedUrls
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const uploadedImageUrls = await uploadImages()

    const { data, error } = await supabase
      .from('news')
      .insert([
        {
          type,
          title,
          content,
          images: uploadedImageUrls,
        },
      ])

    if (error) {
      console.error('Erreur lors de la création de l\'article', error)
      alert('Erreur lors de la création de l\'article')
    } else {
      console.log('Article créé', data)
      alert('Article publié avec succès ! 🎉')
      // Reset du formulaire
      setType('text')
      setTitle('')
      setContent('')
      setImages(null)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Créer un nouvel article</h2>

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

      <div className="flex flex-col">
        <label className="font-semibold mb-1">Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-black"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold mb-1">Texte :</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-black"
          rows={5}
          required
        />
      </div>

      <div className="flex flex-col">
  <label className="font-semibold mb-1">Photo(s) :</label>
    <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-amber-400 rounded-lg cursor-pointer hover:bg-amber-50 transition"
    >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <Upload className="w-10 h-10 text-amber-400" />
        <p className="mb-2 text-sm text-gray-500">Clique ici pour importer</p>
        <p className="text-xs text-gray-400">PNG, JPG jusqu'à 10MB</p>
        </div>

        <input
        id="file-upload"
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        />
    </label>

    {/* Preview miniatures */}
    {previewUrls.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          {previewUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Preview ${index}`}
              className="object-cover w-full h-32 rounded-lg"
            />
          ))}
        </div>
      )}
    </div>


      <button
        type="submit"
        className="p-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-200 cursor-pointer"
      >
        Publier l'article
      </button>
    </form>
  )
}
