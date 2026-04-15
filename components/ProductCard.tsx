import Image from "next/image";
import PriceSection from "@/components/PriceSection";
import ProductDetails from "@/components/ProductDetails";
import "@/components/ProductCard.css";

const ProductCard = () => {
  const imagenproducto = "/image-product-mobile.jpg";
  return (
    <div className="productcontainer">
      <Image
        src={imagenproducto}
        alt="Imagen del producto"
        width={350}
        height={350}
      />
      <ProductDetails />
      <PriceSection />
    </div>
  );
};

export default ProductCard;
