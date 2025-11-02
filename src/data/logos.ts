import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import logo1 from '../assets/images/logos/portofolio1.webp';
import logo2 from '../assets/images/logos/portofolio2.webp';
import logo3 from '../assets/images/logos/portofolio3.webp';
import logo4 from '../assets/images/logos/portofolio4.webp';
import logo5 from '../assets/images/logos/portofolio5.webp';
import logo6 from '../assets/images/logos/portofolio6.webp';
import logo7 from '../assets/images/logos/portofolio7.webp';
import logo8 from '../assets/images/logos/portofolio8.webp';
import logo9 from '../assets/images/logos/portofolio9.webp';

export interface Logo {
    src: ImageMetadata;
    alt: string; // The partner company's name
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: logo1,
                alt: 'Partner 1',
            },
            {
                src: logo2,
                alt: 'Partner 2',
            },
            {
                src: logo3,
                alt: 'Partner 3',
            },
            {
                src: logo4,
                alt: 'Partner 4',
            },
            {
                src: logo5,
                alt: 'Partner 5',
            },
            {
                src: logo6,
                alt: 'Partner 6',
            },
            {
                src: logo7,
                alt: 'Partner 7',
            },
            {
                src: logo8,
                alt: 'Partner 8',
            },
            {
                src: logo9,
                alt: 'Partner 9',
            },
        ],
    },
};
