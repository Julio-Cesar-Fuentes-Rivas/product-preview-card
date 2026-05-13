import Image from "next/image";
import PriceSection from "@/components/PriceSection";
import ProductDetails from "@/components/ProductDetails";
import  BuySection  from "@/components/BuySection"; 
import "@/components/ProductCard.css";

interface Props{
        product:product
}

// ProductCard.tsx
const ProductCard = ({product}:Props) => {
  // const imagenproducto = "/image-product-mobile.jpg";
  
  return (
    <div className="productcontainer">
      <div className="imagecontainer">
        <img
          src={product.image} 
          alt="Imagen del producto" 
          //fill
          style={{ objectFit: "cover" }} 
        />
      </div>

      {/* Agrupa el contenido aquí */}
      <div className="contentcontainer">
        <ProductDetails categoria={product.category} title={product.title} description={product.description}/>
        <PriceSection newPrice={product.newPrice} oldPrice={product.oldPrice}/>
        <BuySection />
      </div>
    </div>
  );
};

export default ProductCard;
