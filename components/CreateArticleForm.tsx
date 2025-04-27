'use client'

import { useState } from 'react'

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
          </div>
          <div className="w-8 bg-gray-500 rounded"></div>
        </div>
      )
    },
    { 
        id: 'text-image-bottom', 
        label: 'Texte + plusieurs images en dessous', 
        mockup: (
          <div className="w-20 h-28 flex flex-col gap-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Traitement de l'upload ici
    console.log({ type, title, content, images })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Créer un nouvel article 🍫</h2>

      <div className="space-y-2">
        <p className="font-semibold">Type d'article :</p>
        <div className="flex gap-4 flex-wrap justify-center">
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
                <div className="mb-2">
                    {option.mockup}
                </div>
                <span className="text-sm">{option.label}</span>
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
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setImages(e.target.files)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
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
