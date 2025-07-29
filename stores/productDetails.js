export const useProductDetailsStore = defineStore("productDetails", {
  state: () => ({
    products: [
      // Auralite Shirt
      {
        id: 1,
        name: "Auralite Shirt",
        description:
          "Incredibly soft and lightweight pigment dyed AuraLite™ tee. Weighs 116 grams.",
        price: 120000,
        originalPrice: 300000,
        category: "shirts",
        otherVariants: [],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "170g",
            info: "This product weighs 148 grams in size M.",
          },
          {
            id: 2,
            name: "Cooling",
            info: "Designed with cooling zones for strategic ventilation.",
          },
          {
            id: 3,
            name: "Natural Fibers",
            info: "This garment is made with natural fibers.",
          },
          {
            id: 4,
            name: "Organic",
            info: "This garment is made with organic fibers.",
          },
        ],
        usage:
          "This product is designed for everyday wear, providing comfort and style.",
        technology:
          "Made with advanced fabric technology for breathability and durability.",
        features: ["Moisture-wicking", "Quick-drying", "UV protection"],
        composition: "100% Organic Cotton",
        sustainability: "Made with sustainable practices and materials.",
        warranty: "2-year warranty against manufacturing defects.",
        reviews: [
          {
            id: 1,
            user: "John Doe",
            rating: 5,
            comment: "Great quality and fit!",
            image: "/images/reviews/review1.jpg",
          },
          {
            id: 2,
            user: "Jane Smith",
            rating: 4,
            comment: "Very comfortable.",
            image: "/images/reviews/review2.jpg",
          },
        ],
        variant: {
          id: 1,
          slug: "auralite-shirt-pigment-burgundy",
          inStock: true,
          color: "Pigment Burgundy",
          colorCode: "#800020",
          sizes: [
            { id: 1, size: "XS", stock: 0 },
            { id: 2, size: "S", stock: 5 },
            { id: 3, size: "M", stock: 10 },
            { id: 4, size: "L", stock: 15 },
            { id: 5, size: "XL", stock: 0 },
          ],
          images: [
            "/images/products/auralite-shirt-pigment-burgundy-1.webp",
            "/images/products/auralite-shirt-pigment-burgundy-2.webp",
          ],
          outfits: {
            id: 1,
            modelName: "Farhan",
            modelHeight: "180 cm",
            modelSize: "M",
            url: [
              "/images/outfits/auralite-shirt-pigment-burgundy-outfit-1.mp4",
              "/images/outfits/auralite-shirt-pigment-burgundy-outfit-2.webp",
              "/images/outfits/auralite-shirt-pigment-burgundy-outfit-3.webp",
            ],
            outfitItems: [
              {
                id: 1,
                variantId: 1,
                name: "Auralite Shirt",
                slug: "auralite-shirt-pigment-burgundy",
                price: 120000,
                originalPrice: 300000,
                category: "shirts",
                color: "Pigment Burgundy",
                image:
                  "/images/products/auralite-shirt-pigment-burgundy-1.webp",
                inStock: true,
                sizes: [
                  { id: 1, size: "XS", stock: 0 },
                  { id: 2, size: "S", stock: 5 },
                  { id: 3, size: "M", stock: 10 },
                  { id: 4, size: "L", stock: 15 },
                  { id: 5, size: "XL", stock: 0 },
                ],
              },
              {
                id: 2,
                variantId: 1,
                name: "Justice Cordura",
                slug: "justice-cordura-off-white",
                price: 120000,
                originalPrice: 300000,
                category: "vests",
                color: "Off White",
                image: "/images/products/justice-cordura-off-white-1.webp",
                inStock: true,
                sizes: [
                  { id: 1, size: "XS", stock: 2 },
                  { id: 2, size: "S", stock: 5 },
                  { id: 3, size: "M", stock: 10 },
                  { id: 4, size: "L", stock: 15 },
                  { id: 5, size: "XL", stock: 0 },
                ],
                isActive: true,
              },
            ],
            isShown: true,
          },
          details: [
            {
              title: "Ripstop Shell",
              info: "Ultra-lightweight, abrasion resistant and durable coverage.",
              image:
                "/images/details/auralite-shirt-pigment-burgundy-detail-1.webp",
            },
            {
              title: "Justice™ Liner",
              info: "Lightweight, 4-way stretch, anti-chafe technical silk.",
              image:
                "/images/details/auralite-shirt-pigment-burgundy-detail-2.webp",
            },
            {
              title: "Justice™ Liner",
              info: "Lightweight, 4-way stretch, anti-chafe technical silk.",
              image:
                "/images/details/auralite-shirt-pigment-burgundy-detail-3.webp",
            },
            {
              title: "Justice™ Liner",
              info: "Lightweight, 4-way stretch, anti-chafe technical silk.",
              image:
                "/images/details/auralite-shirt-pigment-burgundy-detail-4.webp",
            },
          ],
        },
      },
      // Justice Condura
      {
        id: 2,
        name: "Justice Condura",
        description:
          "Durable and water-repellent shirt reinforced with Cordura®.",
        price: 120000,
        originalPrice: 300000,
        category: "shirts",
        otherVariants: [],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "Durable",
            info: "Reinforced with Cordura® for extra toughness.",
          },
          {
            id: 2,
            name: "Water-Repellent",
            info: "Resists light rain and splashes.",
          },
        ],
        usage: "Perfect for layering in outdoor or tactical environments.",
        technology: "Cordura® nylon fabric for rugged durability.",
        features: [
          "Reinforced stitching",
          "Breathable mesh lining",
          "Quick-access pockets",
        ],
        composition: "70% Cordura® Nylon, 30% Polyester",
        sustainability:
          "Built to last, reducing the need for frequent replacement.",
        warranty: "2-year warranty against manufacturing defects.",
        reviews: [
          {
            id: 1,
            user: "Andi",
            rating: 4,
            comment: "Strong fabric, perfect for hiking trips!",
          },
        ],
        variant: {
          id: 1,
          slug: "justice-cordura-off-white",
          inStock: true,
          color: "Off White",
          colorCode: "#f8f8f8",
          sizes: [
            { id: 1, size: "M", stock: 6 },
            { id: 2, size: "L", stock: 2 },
          ],
          images: [
            "/images/products/justice-cordura-off-white-1.webp",
            "/images/products/justice-cordura-off-white-2.webp",
          ],
          outfits: null,
          details: [
            {
              title: "Reinforced Zippers",
              info: "Heavy-duty zippers designed to withstand outdoor use.",
              image: "/images/details/justice-cordura-detail-1.webp",
            },
            {
              title: "Reinforced Zippers",
              info: "Heavy-duty zippers designed to withstand outdoor use.",
              image: "/images/details/justice-cordura-detail-2.webp",
            },
            {
              title: "Reinforced Zippers",
              info: "Heavy-duty zippers designed to withstand outdoor use.",
              image: "/images/details/justice-cordura-detail-3.webp",
            },
          ],
        },
      },
      // Merino Socks
      {
        id: 3,
        name: "Merino Socks",
        description: "Soft, breathable socks ideal for all-day wear.",
        price: 120000,
        originalPrice: 300000,
        category: "socks",
        otherVariants: [
          {
            colorCode: "#f8f8f8",
            slug: "merino-socks-off-white",
            images: [
              "/images/products/merino-socks-off-white-1.webp",
              "/images/products/merino-socks-off-white-2.webp",
            ],
          },
        ],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "Merino Wool",
            info: "Soft, breathable, and natural odor resistance.",
          },
          {
            id: 2,
            name: "Thermoregulating",
            info: "Keeps feet cool in summer, warm in winter.",
          },
        ],
        usage: "Soft, breathable socks ideal for all-day wear.",
        technology: "Temperature-regulating Merino wool.",
        features: ["Antibacterial", "Breathable", "Soft feel"],
        composition: "80% Merino Wool, 20% Nylon",
        sustainability: "Sourced from ethically raised sheep.",
        warranty: "1-year warranty against manufacturing defects.",
        reviews: [
          {
            id: 1,
            user: "Lisa W.",
            rating: 5,
            comment: "Super comfy and no itch at all!",
          },
        ],
        variant: {
          id: 1,
          slug: "merino-socks-black",
          inStock: true,
          color: "Black",
          colorCode: "#000000",
          sizes: [
            { id: 1, size: "XS", stock: 1 },
            { id: 2, size: "S", stock: 5 },
            { id: 3, size: "M", stock: 10 },
            { id: 4, size: "L", stock: 15 },
            { id: 5, size: "XL", stock: 0 },
          ],
          images: [
            "/images/products/merino-socks-black-1.webp",
            "/images/products/merino-socks-black-2.webp",
          ],
          oputfits: null,
          details: [
            {
              title: "Reinforced Toe",
              info: "Extra durability in high-wear areas.",
              image: "/images/details/merino-socks-detail-1.webp",
            },
            {
              title: "Arch Support",
              info: "Provides comfort and stability for all-day wear.",
              image: "/images/details/merino-socks-detail-2.webp",
            },
          ],
        },
      },
      {
        id: 4,
        name: "Merino Socks",
        description: "Soft, breathable socks ideal for all-day wear.",
        price: 120000,
        originalPrice: 300000,
        category: "socks",
        otherVariants: [
          {
            colorCode: "#000",
            slug: "merino-socks-black",
            images: [
              "/images/products/merino-socks-black-1.webp",
              "/images/products/merino-socks-black-2.webp",
            ],
          },
        ],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "Merino Wool",
            info: "Soft, breathable, and natural odor resistance.",
          },
          {
            id: 2,
            name: "Thermoregulating",
            info: "Keeps feet cool in summer, warm in winter.",
          },
        ],
        usage: "Soft, breathable socks ideal for all-day wear.",
        technology: "Temperature-regulating Merino wool.",
        features: ["Antibacterial", "Breathable", "Soft feel"],
        composition: "80% Merino Wool, 20% Nylon",
        sustainability: "Sourced from ethically raised sheep.",
        warranty: "1-year warranty against manufacturing defects.",
        reviews: [],
        variant: {
          id: 2,
          slug: "merino-socks-off-white",
          inStock: true,
          color: "Off White",
          colorCode: "#f8f8f8",
          sizes: [
            { id: 1, size: "XS", stock: 0 },
            { id: 2, size: "S", stock: 5 },
            { id: 3, size: "M", stock: 10 },
            { id: 4, size: "L", stock: 15 },
            { id: 5, size: "XL", stock: 0 },
          ],
          images: [
            "/images/products/merino-socks-off-white-1.webp",
            "/images/products/merino-socks-off-white-2.webp",
          ],
          outfits: null,
          details: [
            {
              title: "Reinforced Toe",
              info: "Extra durability in high-wear areas.",
              image: "/images/details/merino-socks-detail-1.webp",
            },
            {
              title: "Arch Support",
              info: "Provides comfort and stability for all-day wear.",
              image: "/images/details/merino-socks-detail-2.webp",
            },
          ],
        },
      },
      // Peaceshell Cap
      {
        id: 5,
        name: "Peaceshell Cap",
        description: "Stylish cap designed for sun protection and daily wear.",
        price: 120000,
        originalPrice: 300000,
        category: "caps",
        otherVariants: [],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "UV Protection",
            info: "Blocks harmful sun rays during outdoor use.",
          },
          {
            id: 2,
            name: "Lightweight",
            info: "Built for comfort and minimal pressure on head.",
          },
        ],
        usage: "Stylish cap designed for sun protection and daily wear.",
        technology: "Peaceshell™ fabric with heat-reduction features.",
        features: ["Adjustable strap", "Curved brim", "Inner sweatband"],
        composition: "100% Nylon",
        sustainability: "Made with less water in dyeing process.",
        warranty: "1-year warranty on stitching and fit.",
        reviews: [
          {
            id: 1,
            user: "Yusuf",
            rating: 5,
            comment: "Keren banget dan ringan!",
          },
        ],
        variant: {
          id: 1,
          slug: "peaceshell-cap-quicksilver",
          inStock: true,
          color: "Quicksilver",
          colorCode: "#c0c0c0",
          sizes: [{ id: 1, size: "Adjustable", stock: 12 }],
          images: [
            "/images/products/peaceshell-cap-quicksilver-1.webp",
            "/images/products/peaceshell-cap-quicksilver-2.webp",
          ],
          outfits: null,
          details: [
            {
              title: "Inner Lining",
              info: "Comfortable, sweat-absorbing inner mesh.",
              image: "/images/details/peaceshell-cap-detail-1.webp",
            },
            {
              title: "Adjustable Strap",
              info: "Fits all head sizes with ease.",
              image: "/images/details/peaceshell-cap-detail-2.webp",
            },
            {
              title: "Curved Brim",
              info: "Provides optimal sun protection.",
              image: "/images/details/peaceshell-cap-detail-3.webp",
            },
          ],
        },
      },
      // Repossessed Auralite Shirt
      {
        id: 6,
        name: "Repossessed Auralite Shirt",
        description: "Special edition shirt with unique colorway.",
        price: 120000,
        originalPrice: 300000,
        category: "shirts",
        otherVariants: [
          {
            colorCode: "#556b2f",
            slug: "repossessed-auralite-olive",
            images: [
              "/images/products/repossessed-auralite-olive-1.webp",
              "/images/products/repossessed-auralite-olive-2.webp",
            ],
          },
        ],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "Repossessed",
            info: "Limited edition, unique colorway.",
          },
        ],
        usage: "Special edition shirt for collectors and style enthusiasts.",
        technology: "Same trusted Auralite fabric.",
        features: ["Unique color", "Limited run"],
        composition: "100% Organic Cotton",
        sustainability: "Repurposed stock, reducing waste.",
        warranty: "2-year warranty against manufacturing defects.",
        reviews: [],
        variant: {
          id: 1,
          slug: "repossessed-auralite-dusk",
          inStock: true,
          color: "Dusk",
          colorCode: "#483d8b",
          sizes: [
            { id: 1, size: "S", stock: 3 },
            { id: 2, size: "M", stock: 7 },
            { id: 3, size: "L", stock: 2 },
          ],
          images: [
            "/images/products/repossessed-auralite-dusk-1.webp",
            "/images/products/repossessed-auralite-dusk-2.webp",
          ],
          outfits: null,
          details: [
            {
              title: "Ripstop Shell",
              info: "Ultra-lightweight, abrasion resistant and durable coverage.",
              image: "/images/details/repossessed-auralite-dusk-detail-1.webp",
            },
            {
              title: "Justice™ Liner",
              info: "Lightweight, 4-way stretch, anti-chafe technical silk.",
              image: "/images/details/repossessed-auralite-dusk-detail-2.webp",
            },
            {
              title: "Justice™ Liner",
              info: "Lightweight, 4-way stretch, anti-chafe technical silk.",
              image: "/images/details/repossessed-auralite-dusk-detail-3.webp",
            },
          ],
        },
      },
      {
        id: 7,
        name: "Repossessed Auralite Shirt",
        description: "Special edition shirt with unique colorway.",
        price: 120000,
        originalPrice: 300000,
        category: "shirts",
        otherVariants: [
          {
            colorCode: "#483d8b",
            slug: "repossessed-auralite-dusk",
            images: [
              "/images/products/repossessed-auralite-dusk-1.webp",
              "/images/products/repossessed-auralite-dusk-2.webp",
            ],
          },
        ],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "Repossessed",
            info: "Limited edition, unique colorway.",
          },
        ],
        usage: "Special edition shirt for collectors and style enthusiasts.",
        technology: "Same trusted Auralite fabric.",
        features: ["Unique color", "Limited run"],
        composition: "100% Organic Cotton",
        sustainability: "Repurposed stock, reducing waste.",
        warranty: "2-year warranty against manufacturing defects.",
        reviews: [],
        variant: {
          id: 1,
          slug: "repossessed-auralite-olive",
          inStock: true,
          color: "Olive",
          colorCode: "#556b2f",
          sizes: [
            { id: 1, size: "S", stock: 2 },
            { id: 2, size: "M", stock: 5 },
            { id: 3, size: "L", stock: 1 },
          ],
          images: [
            "/images/products/repossessed-auralite-olive-1.webp",
            "/images/products/repossessed-auralite-olive-2.webp",
          ],
          outfits: null,
          details: [
            {
              title: "Ripstop Shell",
              info: "Ultra-lightweight, abrasion resistant and durable coverage.",
              image: "/images/details/repossessed-auralite-olive-detail-1.webp",
            },
            {
              title: "Justice™ Liner",
              info: "Lightweight, 4-way stretch, anti-chafe technical silk.",
              image: "/images/details/repossessed-auralite-olive-detail-2.webp",
            },
            {
              title: "Justice™ Liner",
              info: "Lightweight, 4-way stretch, anti-chafe technical silk.",
              image: "/images/details/repossessed-auralite-olive-detail-3.webp",
            },
          ],
        },
      },
      // Softcell Hoodie Aged
      {
        id: 8,
        name: "Softcell Hoodie Aged",
        description: "Soft, thermal-regulating hoodie for chilly days.",
        price: 120000,
        originalPrice: 300000,
        category: "hoodies",
        otherVariants: [],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "Thermal Regulating",
            info: "Maintains warmth without overheating.",
          },
          {
            id: 2,
            name: "Anti-Pilling",
            info: "Fabric stays smooth even after washing.",
          },
        ],
        usage: "Casual hoodie for chilly days and relaxed evenings.",
        technology:
          "Softcell knit technology for plush feel and air regulation.",
        features: [
          "Front kangaroo pocket",
          "Ribbed cuffs",
          "Double-layered hood",
        ],
        composition: "60% Cotton, 40% Polyester",
        sustainability: "Dyeing process meets eco-certification standards.",
        warranty: "2-year warranty for comfort retention.",
        reviews: [
          {
            id: 1,
            user: "Dea M.",
            rating: 5,
            comment: "My new favorite hoodie!",
          },
        ],
        variant: {
          id: 1,
          slug: "softcell-hoodie-aged-black",
          inStock: true,
          color: "Aged Black",
          colorCode: "#1c1c1c",
          sizes: [
            { id: 1, size: "M", stock: 7 },
            { id: 2, size: "L", stock: 4 },
          ],
          images: [
            "/images/products/softcell-hoodie-aged-black-1.webp",
            "/images/products/softcell-hoodie-aged-black-2.webp",
          ],
          outfits: {
            id: 1,
            modelName: "John",
            modelHeight: "160 cm",
            modelSize: "M",
            url: [
              "/images/outfits/softcell-hoodie-aged-black-outfit-1.webp",
              "/images/outfits/softcell-hoodie-aged-black-outfit-2.webp",
            ],
            outfitItems: [
              {
                id: 1,
                variantId: 1,
                name: "Auralite Shirt",
                slug: "auralite-shirt-pigment-burgundy",
                price: 120000,
                originalPrice: 300000,
                category: "shirts",
                color: "Pigment Burgundy",
                image:
                  "/images/products/auralite-shirt-pigment-burgundy-1.webp",
                inStock: true,
                sizes: [
                  { id: 1, size: "XS", stock: 0 },
                  { id: 2, size: "S", stock: 5 },
                  { id: 3, size: "M", stock: 10 },
                  { id: 4, size: "L", stock: 15 },
                  { id: 5, size: "XL", stock: 0 },
                ],
              },
              {
                id: 2,
                variantId: 1,
                name: "Justice Cordura",
                slug: "justice-cordura-off-white",
                price: 120000,
                originalPrice: 300000,
                category: "vests",
                color: "Off White",
                image: "/images/products/justice-cordura-off-white-1.webp",
                inStock: true,
                sizes: [
                  { id: 1, size: "XS", stock: 2 },
                  { id: 2, size: "S", stock: 5 },
                  { id: 3, size: "M", stock: 10 },
                  { id: 4, size: "L", stock: 15 },
                  { id: 5, size: "XL", stock: 0 },
                ],
                isActive: true,
              },
            ],
            isShown: true,
          },
          details: [
            {
              title: "Fleece Lining",
              info: "Soft inner fleece for ultimate comfort.",
              image: "/images/details/softcell-hoodie-aged-black-detail-1.webp",
            },
            {
              title: "Fleece Lining",
              info: "Soft inner fleece for ultimate comfort.",
              image: "/images/details/softcell-hoodie-aged-black-detail-2.webp",
            },
            {
              title: "Fleece Lining",
              info: "Soft inner fleece for ultimate comfort.",
              image: "/images/details/softcell-hoodie-aged-black-detail-3.webp",
            },
          ],
        },
      },
      // Space-O Singlet
      {
        id: 9,
        name: "Space-O Singlet",
        description: "Lightweight singlet for training and casual wear.",
        price: 120000,
        originalPrice: 300000,
        category: "singlets",
        otherVariants: [
          {
            colorCode: "#a29b8f",
            slug: "space_o-singlet-falcon",
            images: [
              "/images/products/space_o-singlet-falcon-1.webp",
              "/images/products/space_o-singlet-falcon-2.webp",
            ],
          },
        ],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "Lightweight",
            info: "Ultra-light for maximum comfort.",
          },
          {
            id: 2,
            name: "Breathable",
            info: "Keeps you cool during activity.",
          },
        ],
        usage: "Singlet for training, running, or casual wear.",
        technology: "Space_O™ fabric for optimal airflow.",
        features: ["Quick-dry", "Minimal seams"],
        composition: "100% Polyester",
        sustainability: "Made with recycled polyester.",
        warranty: "1-year warranty against manufacturing defects.",
        reviews: [],
        variant: {
          id: 1,
          slug: "space_o-singlet-deep-mahogany",
          inStock: true,
          color: "Deep Mahogany",
          colorCode: "#4b2e2b",
          sizes: [
            { id: 1, size: "M", stock: 8 },
            { id: 2, size: "L", stock: 5 },
          ],
          images: [
            "/images/products/space_o-singlet-deep-mahogany-1.webp",
            "/images/products/space_o-singlet-deep-mahogany-2.webp",
          ],
          outfits: null,
          details: [
            {
              title: "Ultra-Light Fabric",
              info: "Our signature MothTech™ T-shirt with strategically placed holes for ventilation and cooling. Weighs 175 grams.",
              image:
                "/images/details/space_o-singlet-deep-mahogany-detail-1.webp",
            },
            {
              title: "Minimal Seams",
              info: "Reduces chafing and enhances comfort during movement.",
              image:
                "/images/details/space_o-singlet-deep-mahogany-detail-2.webp",
            },
          ],
        },
      },
      {
        id: 10,
        name: "Space-O Singlet",
        description: "Lightweight singlet for training and casual wear.",
        price: 120000,
        originalPrice: 300000,
        category: "singlets",
        otherVariants: [
          {
            colorCode: "#4b2e2b",
            slug: "space_o-singlet-deep-mahogany",
            images: [
              "/images/products/space_o-singlet-deep-mahogany-1.webp",
              "/images/products/space_o-singlet-deep-mahogany-2.webp",
            ],
          },
        ],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "Lightweight",
            info: "Ultra-light for maximum comfort.",
          },
          {
            id: 2,
            name: "Breathable",
            info: "Keeps you cool during activity.",
          },
        ],
        usage: "Singlet for training, running, or casual wear.",
        technology: "Space_O™ fabric for optimal airflow.",
        features: ["Quick-dry", "Minimal seams"],
        composition: "100% Polyester",
        sustainability: "Made with recycled polyester.",
        warranty: "1-year warranty against manufacturing defects.",
        reviews: [],
        variant: {
          id: 1,
          slug: "space_o-singlet-falcon",
          inStock: true,
          color: "Falcon",
          colorCode: "#a29b8f",
          sizes: [
            { id: 1, size: "M", stock: 6 },
            { id: 2, size: "L", stock: 2 },
          ],
          images: [
            "/images/products/space_o-singlet-falcon-1.webp",
            "/images/products/space_o-singlet-falcon-2.webp",
          ],
          outfits: {
            id: 1,
            modelName: "Zaki",
            modelHeight: "178 cm",
            modelSize: "XL",
            url: [
              "/images/outfits/space_o-singlet-falcon-outfit-1.webp",
              "/images/outfits/space_o-singlet-falcon-outfit-2.webp",
            ],
            outfitItems: [
              {
                id: 1,
                variantId: 1,
                name: "Auralite Shirt",
                slug: "auralite-shirt-pigment-burgundy",
                price: 120000,
                originalPrice: 300000,
                category: "shirts",
                color: "Pigment Burgundy",
                image:
                  "/images/products/auralite-shirt-pigment-burgundy-1.webp",
                inStock: true,
                sizes: [
                  { id: 1, size: "XS", stock: 0 },
                  { id: 2, size: "S", stock: 5 },
                  { id: 3, size: "M", stock: 10 },
                  { id: 4, size: "L", stock: 15 },
                  { id: 5, size: "XL", stock: 0 },
                ],
              },
              {
                id: 2,
                variantId: 1,
                name: "Justice Cordura",
                slug: "justice-cordura-off-white",
                price: 120000,
                originalPrice: 300000,
                category: "vests",
                color: "Off White",
                image: "/images/products/justice-cordura-off-white-1.webp",
                inStock: true,
                sizes: [
                  { id: 1, size: "XS", stock: 2 },
                  { id: 2, size: "S", stock: 5 },
                  { id: 3, size: "M", stock: 10 },
                  { id: 4, size: "L", stock: 15 },
                  { id: 5, size: "XL", stock: 0 },
                ],
                isActive: true,
              },
            ],
            isShown: true,
          },
          details: [
            {
              title: "Ultra-Light Fabric",
              info: "Designed for maximum breathability and comfort.",
              image: "/images/details/space_o-singlet-falcon-detail-1.webp",
            },
            {
              title: "Minimal Seams",
              info: "Reduces chafing and enhances comfort during movement.",
              image: "/images/details/space_o-singlet-falcon-detail-2.webp",
            },
            {
              title: "Minimal Seams",
              info: "Reduces chafing and enhances comfort during movement.",
              image: "/images/details/space_o-singlet-falcon-detail-3.webp",
            },
          ],
        },
      },
      // TechSilk Short
      {
        id: 11,
        name: "TechSilk Short",
        price: 120000,
        originalPrice: 300000,
        category: "shorts",
        otherVariants: [
          {
            colorCode: "#a29b8f",
            slug: "techsilk-short-falcon",
            images: [
              "/images/products/techsilk-short-falcon-1.webp",
              "/images/products/techsilk-short-falcon-2.webp",
            ],
          },
        ],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "TechSilk",
            info: "Smooth, lightweight technical silk.",
          },
          {
            id: 2,
            name: "Quick-Dry",
            info: "Dries rapidly after washing or sweating.",
          },
        ],
        usage: "Shorts for training, running, or casual wear.",
        technology: "TechSilk™ fabric for comfort and performance.",
        features: ["Elastic waistband", "Moisture-wicking"],
        composition: "100% Polyester",
        sustainability: "Made with less water in dyeing process.",
        warranty: "1-year warranty against manufacturing defects.",
        reviews: [],
        variant: {
          id: 1,
          slug: "techsilk-short-black-silk",
          inStock: true,
          color: "Black Silk",
          colorCode: "#222222",
          sizes: [
            { id: 1, size: "M", stock: 10 },
            { id: 2, size: "L", stock: 7 },
          ],
          images: [
            "/images/products/techsilk-short-black-silk-1.webp",
            "/images/products/techsilk-short-black-silk-2.webp",
          ],
          outfits: null,
          details: [
            {
              title: "Elastic Waistband",
              info: "Provides a comfortable fit for all-day wear.",
              image: "/images/details/techsilk-short-black-silk-detail-1.webp",
            },
            {
              title: "Moisture-Wicking",
              info: "Keeps you dry and comfortable during workouts.",
              image: "/images/details/techsilk-short-black-silk-detail-2.webp",
            },
          ],
        },
      },
      {
        id: 12,
        name: "TewchSilk Short",
        price: 120000,
        originalPrice: 300000,
        category: "shorts",
        otherVariants: [
          {
            colorCode: "#222222",
            slug: "techsilk-short-black-silk",
            images: [
              "/images/products/techsilk-short-black-silk-1.webp",
              "/images/products/techsilk-short-black-silk-2.webp",
            ],
          },
        ],
        isActive: true,
        tags: [
          {
            id: 1,
            name: "TechSilk",
            info: "Smooth, lightweight technical silk.",
          },
          {
            id: 2,
            name: "Quick-Dry",
            info: "Dries rapidly after washing or sweating.",
          },
        ],
        usage: "Shorts for training, running, or casual wear.",
        technology: "TechSilk™ fabric for comfort and performance.",
        features: ["Elastic waistband", "Moisture-wicking"],
        composition: "100% Polyester",
        sustainability: "Made with less water in dyeing process.",
        warranty: "1-year warranty against manufacturing defects.",
        reviews: [],
        variant: {
          id: 1,
          slug: "techsilk-short-falcon",
          inStock: true,
          color: "Falcon",
          colorCode: "#a29b8f",
          sizes: [
            { id: 1, size: "M", stock: 8 },
            { id: 2, size: "L", stock: 3 },
          ],
          images: [
            "/images/products/techsilk-short-falcon-1.webp",
            "/images/products/techsilk-short-falcon-2.webp",
          ],
          outfits: null,
          details: [
            {
              title: "Elastic Waistband",
              info: "Provides a comfortable fit for all-day wear.",
              image: "/images/details/techsilk-short-falcon-detail-1.webp",
            },
            {
              title: "Moisture-Wicking",
              info: "Keeps you dry and comfortable during workouts.",
              image: "/images/details/techsilk-short-falcon-detail-2.webp",
            },
          ],
        },
      },
    ],
  }),
  getters: {
    getProductBySlug: (state) => {
      return (slug) => {
        return state.products.find((product) => {
          return product.variant.slug === slug;
        });
      };
    },
  },
  actions: {},
});
