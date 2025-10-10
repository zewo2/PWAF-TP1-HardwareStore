export const products = [
  {
    id: 1,
    name: 'Intel Core i9-13900K',
    brand: 'Intel',
    type: 'CPU',
    description: 'High-end 24-core processor for gaming and productivity.',
    price: 649.99,
    discountPercent: 10,
    images: [
      'https://img.globaldata.pt/images/BX8071513900K/58b8f2f7de695f7003ade9ddf3c074ef.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=727&h=727',
      'https://www.worten.pt/i/74be93bd5ec797ade54ccd37c61b2be00c9c08cc',
      'https://thumb.pccomponentes.com/w-530-530/articles/1057/10573120/2502-intel-core-i9-13900k-3-ghz-box-comprar.jpg'
    ]
  },
  {
    id: 2,
    name: 'NVIDIA GeForce RTX 4090',
    brand: 'NVIDIA',
    type: 'GPU',
    description: 'Flagship graphics card for extreme gaming and creative work.',
    price: 1799.99,
    images: [
      'https://img.globaldata.pt/products/912-V510-265.jpg',
      'https://pt.static.webuy.com/product_images/Inform%C3%A1tica/Placas%20Gr%C3%A1ficas%20-%20PCi-E/SGRANVI409024G01_l.jpg',
      'https://i5.walmartimages.com/seo/NVIDIA-GeForce-RTX-4090-Graphics-card-NVIDIA-GeForce-RTX-4090-24-GB-GDDR6X-PCIe-4-0-HDMI-3-x-DisplayPort_a1a585f9-74ed-44e6-8e93-c1544efc92fa.3d678aa5901a818fcaea2a890c331b39.jpeg'
    ]
  },
  {
    id: 3,
    name: 'Corsair Vengeance 32GB DDR5',
    brand: 'Corsair',
    type: 'RAM',
    description: 'High-speed DDR5 memory for modern systems.',
    price: 189.99,
    discountPercent: 15,
    images: [
      'https://a-static.mlcdn.com.br/1500x1500/memoria-ram-corsair-vengeance-ddr5-32gb-6000mhz-preto/valedc/vip38883qp/d55ca3039e11628f79da298ea0831155.jpeg',
      'https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Memory/vengeance-ddr5-blk-config/Gallery/VENGEANCE_DDR5_BLK_10.webp',
      'https://thumb.pccomponentes.com/w-530-530/articles/1086/10865699/3874-corsair-vengeance-ddr5-6400mhz-32-gb-2x16gb-cl36-memoria-dual-amd-expo-e-intel-xmp-mejor-precio.jpg'
    ]
  },
  {
    id: 4,
    name: 'Logitech MX Master 3S',
    brand: 'Logitech',
    type: 'Peripheral',
    description: 'Ergonomic wireless mouse for productivity.',
    price: 99.99,
    images: [
      'https://www.powerplanetonline.com/cdnassets/logitech_mx_master_3s_bluetooth_grafito_raton_inalambrico_8000dpi_09_ad_l.jpg',
      'https://s1.kuantokusta.pt/img_upload/produtos_informatica/849860_3_logitech-mx-master-3s-wireless-bluetooth-black-910-006559.jpg',
      'https://img.globaldata.pt/products/910-005710_3.jpg'
    ]
  },
  {
    id: 5,
    name: 'ASUS ROG Strix Z790-E',
    brand: 'ASUS',
    type: 'Motherboard',
    description: 'Premium ATX motherboard for Intel CPUs, WiFi 6E, PCIe 5.0.',
    price: 399.99,
    images: [
      'https://thumb.pccomponentes.com/w-530-530/articles/1063/10632846/1381-asus-rog-strix-z790-e-gaming-wifi.jpg',
      'https://dlcdnwebimgs.asus.com/files/media/E8F9316B-CB25-42B5-9422-CA99338CDB38/v1/img/spec/connectivity.png',
      'https://img.pccomponentes.com/articles/1063/10632846/6874-asus-rog-strix-z790-e-gaming-wifi-opiniones.jpg'
    ]
  },
  {
    id: 6,
    name: 'MSI MAG B650 Tomahawk',
    brand: 'MSI',
    type: 'Motherboard',
    description: 'ATX motherboard for AMD Ryzen CPUs, robust power delivery.',
    price: 229.99,
    discountPercent: 5,
    images: [
      'https://img.globaldata.pt/images/911-7D75-001/0e7f84740fb274073f99d2fdf432cb9a.jpg',
      'https://youget.pt/164184-large_default/motherboard-msi-mag-b650-tomahawk-wifi-am5-atx.jpg',
      'https://pcdiga-prod.eu.saleor.cloud/media/thumbnails/products/p048354_5_9a804dd2_thumbnail_4096.jpg'
    ]
  },
  {
    id: 7,
    name: 'Samsung 990 Pro 2TB NVMe SSD',
    brand: 'Samsung',
    type: 'Storage',
    description: 'Ultra-fast PCIe Gen4 NVMe SSD for gaming and productivity.',
    price: 249.99,
    images: [
      'https://pcdiga-prod.eu.saleor.cloud/media/thumbnails/products/p059055_7_fd7ac828_thumbnail_4096.jpg',
      'https://s1.kuantokusta.pt/img_upload/produtos_informatica/924476_3_samsung-2tb-990-pro-m-2-pcie-4-0-nvme-com-dissipador-termico-mz-v9p2t0cw.jpg'
    ]
  },
  {
    id: 8,
    name: 'Seagate Barracuda 4TB HDD',
    brand: 'Seagate',
    type: 'Storage',
    description: 'Reliable 4TB hard drive for mass storage needs.',
    price: 99.99,
    discountPercent: 20,
    images: [
      'https://img.pccomponentes.com/articles/14/143694/o1.jpg',
      'https://img.globaldata.pt/products/ST4000DM004_1.jpg'
    ]
  },
  {
    id: 9,
    name: 'Corsair RM850x 850W PSU',
    brand: 'Corsair',
    type: 'PSU',
    description: 'Fully modular, silent, and efficient power supply unit.',
    price: 159.99,
    images: [
      'https://m.media-amazon.com/images/I/81OwObzrzLL.jpg', 
      'https://thumb.pccomponentes.com/w-530-530/articles/1085/10854052/5848-corsair-rmx-series-rm850x-pcie-51-atx-31-850w-80-plus-gold-modular-caracteristicas.jpg',
      'https://thumb.pccomponentes.com/w-530-530/articles/1085/10854052/10292-corsair-rmx-series-rm850x-pcie-51-atx-31-850w-80-plus-gold-modular-0da41292-414e-4c27-9520-594b0ec09b73.jpg'
    ]
  },
  {
    id: 10,
    name: 'NZXT H510 ATX Case',
    brand: 'NZXT',
    type: 'Case',
    description: 'Minimalist ATX case with tempered glass and cable management.',
    price: 89.99,
    images: [
      'https://img.globaldata.pt/products/CA-H510B-B1.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=727&h=727',
      'https://img.globaldata.pt/products/CA-H510B-B1_3.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=727&h=727',
      'https://img.globaldata.pt/products/CA-H510B-B1_7.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=727&h=727'
    ]
  },
  {
    id: 11,
    name: 'Fractal Design Meshify C',
    brand: 'Fractal Design',
    type: 'Case',
    description: 'High airflow ATX case with mesh front panel.',
    price: 109.99,
    discountPercent: 12,
    images: [
      'https://img.pccomponentes.com/articles/40/403722/149-fractal-design-meshify-c-usb-31-negro-31eb7a4d-45e2-4c2b-8e01-cec81899804e.jpg',
      'https://thumb.pccomponentes.com/w-530-530/articles/40/403722/5987-fractal-design-meshify-c-usb-31-negro-608d0f4a-97f4-4be2-8966-bf6f7f030fa6.jpg',
      'https://thumb.pccomponentes.com/w-530-530/articles/40/403722/11563-fractal-design-meshify-c-usb-31-negro-b4ac861a-a347-4ad7-9099-2b6b71433866.jpg'
    ]
  },
  {
    id: 12,
    name: 'AMD Ryzen 7 7800X3D',
    brand: 'AMD',
    type: 'CPU',
    description: '8-core, 16-thread gaming CPU with 3D V-Cache for top-tier performance.',
    price: 429.99,
    discountPercent: 8,
    images: [
      'https://pcdiga-prod.eu.saleor.cloud/media/thumbnails/products/1_p052027_839bdbd6_thumbnail_4096.jpg',
      'https://www.powerplanetonline.com/cdnassets/amd_ryzen_7_7800x3d.2ghz_96mb_procesador_02_ad_l.jpg'
    ]
  },
  {
    id: 13,
    name: 'Gigabyte GeForce RTX 4070',
    brand: 'Gigabyte',
    type: 'GPU',
    description: 'High-performance graphics card for 1440p gaming and content creation.',
    price: 699.99,
    images: [
      'https://thumb.pccomponentes.com/w-530-530/articles/1064/10649571/1881-gigabyte-geforce-rtx-4070-ti-gaming-oc-12gb-gddr6x.jpg',
      'https://thumb.pccomponentes.com/w-530-530/articles/1081/10811551/3364-gigabyte-gaming-geforce-rtx-4070-super-oc-12gb-gddr6x-dlss3-mejor-precio.jpg',
      'https://img.globaldata.pt/products/GV-N407SGAMOC-12G_7.jpg'
    ]
  },
  {
    id: 14,
    name: 'Kingston Fury Beast 16GB DDR5',
    brand: 'Kingston',
    type: 'RAM',
    description: 'Affordable DDR5 memory for next-gen systems.',
    price: 99.99,
    images: [
      'https://img.pccomponentes.com/articles/1066/10664033/1409-kingston-fury-beast-rgb-ddr5-6000mhz-16gb-2x8gb-cl36.jpg',
      'https://s1.kuantokusta.pt/img_upload/produtos_informatica/851268_3_kingston-fury-beast-16gb-ddr5-1x16gb-5600mhz-kf556c40bba-16.jpg',
      'https://img.pccomponentes.com/articles/1066/10664063/211-kingston-fury-beast-rgb-ddr5-5600mhz-16gb-2x8gb-cl36-comprar.jpg'
    ]
  },
  {
    id: 15,
    name: 'SteelSeries Apex Pro Keyboard',
    brand: 'SteelSeries',
    type: 'Peripheral',
    description: 'Mechanical gaming keyboard with adjustable actuation switches.',
    price: 199.99,
    discountPercent: 10,
    images: [
      'https://pcdiga-prod.eu.saleor.cloud/media/thumbnails/products/teclado_mec_nico_steelseries_apex_pro_us_rgb_1_bab5dc05_thumbnail_1024.jpg',
      'https://images.ctfassets.net/hmm5mo4qf4mf/4NaPLI4cjylMlkGsm8J5jW/4d0783bd5f7e1b1f9cb80d09398f8e9a/apex_pro_mini_gen_3_black_img_buy_01_us.png',
      'https://www.aquario.pt/Imgs/produtos/072/43/15/64865.webp'
    ]
  },
  {
    id: 16,
    name: 'Western Digital Black 4TB NVMe SSD',
    brand: 'Western Digital',
    type: 'Storage',
    description: 'High-capacity, high-speed NVMe SSD for demanding users.',
    price: 499.99,
    images: [
      'https://www.visaovip.com/imagem/ssd-m-2-nvme/ssd-western-digital-m-2-4tb-sn850x-black-nvme-wds400t2x0e-00bca0/2/595404.jpg?pfdrid_c=true',
      'https://pcdiga-prod.eu.saleor.cloud/media/thumbnails/products/1721127815_IMG_1812305_a0aa943c_thumbnail_4096.jpg'
    ]
  },
  {
    id: 17,
    name: 'EVGA SuperNOVA 1000W PSU',
    brand: 'EVGA',
    type: 'PSU',
    description: '1000W fully modular power supply for high-end builds.',
    price: 229.99,
    discountPercent: 7,
    images: [
      'https://img.pccomponentes.com/articles/42/423597/2193-evga-g6-supernova-1000w-80-plus-gold-modular-comprar.jpg',
      'https://thumb.pccomponentes.com/w-530-530/articles/42/423597/1303-evga-g6-supernova-1000w-80-plus-gold-modular.jpg',
      'https://thumb.pccomponentes.com/w-530-530/articles/42/423597/371-evga-g6-supernova-1000w-80-plus-gold-modular-mejor-precio.jpg'
    ]
  },
  {
    id: 18,
    name: 'Lian Li PC-O11 Dynamic',
    brand: 'Lian Li',
    type: 'Case',
    description: 'Premium mid-tower case with tempered glass and modular design.',
    price: 159.99,
    images: [
      'https://thumb.pccomponentes.com/w-530-530/articles/1020/10201172/1828-lian-li-o11-dynamic-evo-cristal-templado-usb-30-gris.jpg',
      'https://thumb.pccomponentes.com/w-530-530/articles/1020/10201172/4992-lian-li-o11-dynamic-evo-cristal-templado-usb-30-gris-especificaciones.jpg',
      'https://thumb.pccomponentes.com/w-530-530/articles/1020/10201172/3748-lian-li-o11-dynamic-evo-cristal-templado-usb-30-gris-mejor-precio.jpg'
    ]
  }
];