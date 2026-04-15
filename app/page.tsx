import Image from "next/image";
import ProductCard from "./components/ProductCard";
const imagenproducto="/image-product-mobile.jpg";

export default function Home() {
  return (
    <div>
      <main>
  
<ProductCard />
<ProductCard />
      </main>
    </div>
  );
}