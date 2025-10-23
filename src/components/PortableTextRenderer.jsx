// src/components/PortableTextRenderer.jsx
// REVISI FINAL LENGKAP

import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanity';

/**
 * Komponen kustom untuk merender gambar dari dalam Portable Text.
 * Ditulis sebagai fungsi standar untuk menghindari masalah sintaks arrow function.
 */
function SanityImage({ value }) {
    // Pengecekan data yang lebih aman
    if (!value?.asset?._ref) {
        return null;
    }
    
    // Gunakan urlFor untuk membuat URL gambar
    const imageUrl = urlFor(value).width(800).auto('format').url(); 

    return (
        <figure className="my-8">
            <img 
                src={imageUrl} 
                alt={value.alt || ''} 
                loading="lazy"
                className="w-full h-auto rounded-lg border border-gray-200"
            />
            {value.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                    {value.caption}
                </figcaption>
            )}
        </figure>
    );
}

/**
 * Konfigurasi komponen untuk PortableText
 */
const components = {
    types: {
        image: SanityImage, 
    },
    marks: {
        link: ({ children, value }) => {
            // Pastikan value.href ada sebelum membuat link
            if (!value?.href) {
                return <>{children}</>;
            }
            const rel = value.href.startsWith('/') ? undefined : 'noopener noreferrer';
            const target = rel ? '_blank' : undefined;
            return (
                <a href={value.href} rel={rel} target={target}>
                    {children}
                </a>
            );
        },
    }
};

/**
 * Komponen utama yang diekspor
 */
export default function PortableTextRenderer({ content }) {
    if (!content || content.length === 0) {
        return null;
    }
    
    return (
        <div className="portable-text-content">
            <PortableText value={content} components={components} />
        </div>
    );
}
