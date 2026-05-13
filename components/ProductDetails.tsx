import "@/components/ProductDetails.css";
interface Props{
  categoria:string,
  title: string,
  description: string
}
const ProductDetails = ({categoria,title,description}:Props) => {
  return (
    <div>
      <h3 className="categoria">{categoria}</h3>
      <h2 className="titulo">{title}</h2>
      <p className="description">
       {description}
      </p>
    </div>
  );
};

export default ProductDetails;
