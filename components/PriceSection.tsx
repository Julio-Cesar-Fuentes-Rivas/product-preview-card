import '@/components/PriceSection.css';

interface PriceSectionProps{
  newPrice:string,
  oldPrice: string
}

const PriceSection = ({newPrice, oldPrice}:PriceSectionProps) => {
  return (
    <div className="pricesection">
    <span className="descuento">{`$ ${newPrice}`}</span>
    <span className="precio">{`$ ${oldPrice}`}</span>
  </div>
  )
} 

export default PriceSection