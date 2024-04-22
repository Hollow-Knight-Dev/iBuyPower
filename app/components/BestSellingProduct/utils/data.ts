interface ProductData {
  type: string
  name: string
  window: string
  cpu: string
  gpu: string
  ssd: string
  ram: string
  image: string
  discount: number
  price: number
  affirmMonthlyPayment: number
  date: string
}

const data: ProductData[] = [
  {
    type: 'Prebuilt PC',
    name: 'RDY Slate 8MP 002',
    window: 'Windows 11 Home',
    cpu: 'Intel® Core™ i7-14700KF CPU',
    gpu: 'GeForce RTX 4070 SUPER - 12GB',
    ssd: '2TB M.2 NVMe SSD',
    ram: '32GB DDR5-6000MHz RGB RAM',
    image: '/images/RDY_Slate_8MP_002.avif',
    discount: 600,
    price: 2099,
    affirmMonthlyPayment: 94,
    date: '2024-04-24'
  },
  {
    type: 'Prebuilt PC',
    name: 'RDY Y40 Mori Calliope',
    window: 'Windows 11 Home',
    cpu: 'AMD Ryzen™ 9 7900X CPU',
    gpu: 'GeForce RTX 4070 SUPER - 12GB',
    ssd: '2TB M.2 NVMe Gen4 SSD',
    ram: '32GB DDR5-5600MHz ADATA RGB RAM',
    image: '/images/RDY Y40 Mori Calliope.avif',
    discount: 200,
    price: 2299,
    affirmMonthlyPayment: 102,
    date: '2024-04-24'
  },
  {
    type: 'Custom PC',
    name: 'Intel Core 14th Gen Challenger Daily Deal',
    window: 'Windows 11 Home',
    cpu: 'Intel® Core™ i5-14400F CPU',
    gpu: 'GeForce RTX 4060 - 8GB',
    ssd: '1TB WD M.2 NVMe SSD',
    ram: '32GB DDR5-6000MHz TEAMGROUP RAM',
    image: '/images/Intel Core 14th Gen Challenger Daily Deal.avif',
    discount: 200,
    price: 1469,
    affirmMonthlyPayment: 79,
    date: '2024-04-29'
  },
  {
    type: 'Custom PC',
    name: 'AMD Ryzen HYTE Ultimate Gaming Daily Deal',
    window: 'Windows 11 Home',
    cpu: 'AMD Ryzen™ 9 7950X3D CPU',
    gpu: 'GeForce RTX 4080 - 16GB',
    ssd: '2TB WD M.2 NVMe SSD',
    ram: '32GB DDR5-6000MHz TEAMGROUP RAM',
    image: '/images/AMD Ryzen HYTE Ultimate Gaming Daily Deal.avif',
    discount: 450,
    price: 3049,
    affirmMonthlyPayment: 0,
    date: '2024-04-29'
  },
  {
    type: 'Prebuilt PC',
    name: 'RDY Y70 VALORANT VCTA B002',
    window: 'Windows 11 Home',
    cpu: 'Intel® Core™ i7-14700KF CPU',
    gpu: 'GeForce RTX 4070 Ti SUPER - 16GB',
    ssd: '2TB M.2 NVMe Gen4 SSD',
    ram: '32GB DDR5-6000MHz RGB RAM',
    image: '/images/RDY Y70 VALORANT VCTA B002.avif',
    discount: 200,
    price: 2499,
    affirmMonthlyPayment: 109,
    date: '2024-04-24'
  },
  {
    type: 'Prebuilt PC',
    name: 'RDY Y40 VALORANT VCTA R004',
    window: 'Windows 11 Home',
    cpu: 'AMD Ryzen™ 7 7800X3D CPU',
    gpu: 'GeForce RTX 4070 - 12GB',
    ssd: '2TB M.2 NVMe Gen4 SSD',
    ram: '32GB DDR5-5600MHz RGB RAM',
    image: '/images/RDY Y40 VALORANT VCTA R004.avif',
    discount: 200,
    price: 2099,
    affirmMonthlyPayment: 92,
    date: '2024-04-24'
  },
  {
    type: 'Custom PC',
    name: 'Intel Core 14th Gen Elite Gaming Daily Deal',
    window: 'Windows 11 Home',
    cpu: 'Intel® Core™ i7-14700KF CPU',
    gpu: 'GeForce RTX 4070 Ti SUPER - 16GB',
    ssd: '1TB WD M.2 NVMe SSD',
    ram: '32GB DDR5-6000MHz TEAMGROUP RAM',
    image: '/images/Intel Core 14th Gen Elite Gaming Daily Deal.avif',
    discount: 250,
    price: 2369,
    affirmMonthlyPayment: 103,
    date: '2024-04-29'
  },
  {
    type: 'Custom PC',
    name: 'AMD Ryzen Power Up Plus Daily Deal',
    window: 'Windows 11 Home',
    cpu: 'AMD Ryzen™ 5 7600 CPU',
    gpu: 'GeForce RTX 4060 - 8GB',
    ssd: '1TB WD M.2 NVMe SSD',
    ram: '32GB DDR5-6000MHz TEAMGROUP RAM',
    image: '/images/AMD Ryzen Power Up Plus Daily Deal.avif',
    discount: 200,
    price: 1419,
    affirmMonthlyPayment: 76,
    date: '2024-04-29'
  }
]

export { data }
export type { ProductData }
