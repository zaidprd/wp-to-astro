import { FileBarChart, Briefcase, BarChart3, Building2, MapPin, Users } from 'lucide-astro'

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof FileBarChart

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface FeatureList {
  id: string
  features: Feature[]
}

export const featureLists: Record<string, FeatureList> = {
  main: {
    id: 'main',
    features: [
      {
        icon: FileBarChart,
        title: 'Studi Kelayakan',
        description:
          'Jasa layanan utama kami adalah studi kelayakan. Silakan konsultasikan kebutuhan feasibility study bisnis Anda kepada kami.'
      },
      {
        icon: Briefcase,
        title: 'Bisnis Plan',
        description:
          'Panduan strategis bagi pemilik bisnis untuk mencapai tujuan bisnis serta menarik minat investor atau pemberi pinjaman.'
      },
      {
        icon: BarChart3,
        title: 'Market Research',
        description:
          'Proses pengumpulan dan analisis data pasar untuk memahami pelanggan, pesaing, dan tren industri secara mendalam.'
      },
      {
        icon: Building2,
        title: 'High and Best Use (HBU)',
        description:
          'Konsep penilaian properti untuk menentukan penggunaan lahan paling efisien dan bernilai tinggi.'
      },
      {
        icon: MapPin,
        title: 'Survey Lokasi Bisnis',
        description:
          'Layanan survei lokasi bisnis untuk mengidentifikasi potensi pasar dan kepuasan pelanggan.'
      },
      {
        icon: Users,
        title: 'Konsultan Manajemen',
        description:
          'Konsultasi manajemen untuk membantu bisnis Anda berkembang dan beradaptasi dalam persaingan pasar.'
      }
    ]
  }
}
