'use client'

import { useState } from 'react'
import Image from 'next/image'

interface YouTubeVideoProps {
    videoId: string
    title?: string
}

export function YouTubeVideo({ videoId, title = 'Brat Generator Demo' }: YouTubeVideoProps) {
    const [loaded, setLoaded] = useState(false)
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

    if (loaded) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
            />
        )
    }

    return (
        <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group bg-slate-900"
            aria-label={`Play ${title} video`}
        >
            {/* Thumbnail */}
            <img
                src={thumbnailUrl}
                alt={`${title} Video Thumbnail`}
                className="w-full h-full object-cover"
                loading="lazy"
                width={480}
                height={360}
            />
            {/* Dark overlay */}
            <span className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors block" />
            {/* Play button */}
            <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-500 transition-colors flex items-center justify-center shadow-2xl">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
            </span>
        </button>
    )
}
