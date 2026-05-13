import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = [
    {
        "createdAt": "2026-05-10T10:15:00.000Z",
        "title": "Auriculares Cancelación de Ruido",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
        "category": "Tecnología",
        "description": "Experiencia de audio inmersiva con tecnología activa de cancelación de ruido y 40 horas de batería.",
        "newPrice": "249.99",
        "oldPrice": "299.00",
        "id": "101"
    },
    {
        "createdAt": "2026-05-11T14:20:00.000Z",
        "title": "Cafetera Espresso Automática",
        "image": "https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?q=80&w=1000&auto=format&fit=crop",
        "category": "Hogar",
        "description": "Prepara lattes y cappuccinos de calidad profesional en segundos con solo presionar un botón.",
        "newPrice": "850.00",
        "oldPrice": "1100.00",
        "id": "102"
    },
    {
        "createdAt": "2026-05-12T09:45:12.000Z",
        "title": "Teclado Mecánico RGB",
        "image": "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop",
        "category": "Gaming",
        "description": "Switches táctiles silenciosos y retroiluminación personalizable para largas sesiones de juego.",
        "newPrice": "125.50",
        "oldPrice": "150.00",
        "id": "103"
    },
    {
        "createdAt": "2026-05-09T22:30:00.000Z",
        "title": "Cámara Mirrorless 4K",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
        "category": "Fotografía",
        "description": "Sensor de fotograma completo y enfoque automático ultrarrápido para capturar momentos nítidos.",
        "newPrice": "1750.00",
        "oldPrice": "1999.99",
        "id": "104"
    },
    {
        "createdAt": "2026-05-08T08:12:44.000Z",
        "title": "Reloj Inteligente Deportivo",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
        "category": "Wearables",
        "description": "Monitoreo de frecuencia cardíaca, GPS integrado y resistencia al agua hasta 50 metros.",
        "newPrice": "199.00",
        "oldPrice": "245.00",
        "id": "105"
    },
    {
        "createdAt": "2026-05-07T11:05:10.000Z",
        "title": "Lámpara de Escritorio Minimalista",
        "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000&auto=format&fit=crop",
        "category": "Decoración",
        "description": "Diseño nórdico con carga inalámbrica para smartphone integrada en la base.",
        "newPrice": "45.90",
        "oldPrice": "60.00",
        "id": "106"
    },
    {
        "createdAt": "2026-05-06T15:40:22.000Z",
        "title": "Mochila para Nómada Digital",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
        "category": "Accesorios",
        "description": "Compartimento acolchado para laptop de 16 pulgadas y materiales resistentes a la lluvia.",
        "newPrice": "89.00",
        "oldPrice": "115.00",
        "id": "107"
    },
    {
        "createdAt": "2026-05-05T19:20:15.000Z",
        "title": "Set de Velas Aromáticas",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1000&auto=format&fit=crop",
        "category": "Hogar",
        "description": "Fragancias de lavanda y sándalo hechas con cera de soja 100% natural.",
        "newPrice": "32.00",
        "oldPrice": "45.00",
        "id": "108"
    },
    {
        "createdAt": "2026-05-04T12:00:00.000Z",
        "title": "Zapatillas de Running Pro",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
        "category": "Deportes",
        "description": "Suela con amortiguación reactiva diseñada para mejorar el rendimiento en asfalto.",
        "newPrice": "110.00",
        "oldPrice": "145.00",
        "id": "109"
    },
    {
        "createdAt": "2026-05-03T21:10:05.000Z",
        "title": "Altavoz Bluetooth Portátil",
        "image": "https://images.unsplash.com/photo-1608156639585-342034ded445?q=80&w=1000&auto=format&fit=crop",
        "category": "Sonido",
        "description": "Sonido 360 grados potente y compacto, perfecto para viajes y exteriores.",
        "newPrice": "55.00",
        "oldPrice": "79.99",
        "id": "110"
    }
  ];

  return (
    <div>
      <main className="main">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </main>
    </div>
  );
}