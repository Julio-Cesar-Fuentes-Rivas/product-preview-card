import Image from "next/image";
import PriceSection from "@/components/PriceSection";
import ProductDetails from "@/components/ProductDetails";
import "@/components/ProductCard.css";
import Button from "./Button";

const ProductCard = () => {
  const imagenproducto = "/image-product-mobile.jpg";
  return (
    <div className="productcontainer">
      <div className="imageContainer"> 
        <Image
          src={imagenproducto}
          alt="Imagen del producto"
          fill style={{objectFit: "cover"}}
          /*width={350}
          height={350}*/
        />
      </div>
      <ProductDetails />
      <PriceSection />
      <Button />
    </div>
  );
};

export default ProductCard;
