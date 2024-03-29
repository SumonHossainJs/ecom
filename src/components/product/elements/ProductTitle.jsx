
import Link from "next/link"
const ProductTitle = (props) => {
  const CustomTag = props.titleTag ? props.titleTag : 'h5';
  return (
   <CustomTag className='title'>
      <Link href={`/product/${props.productTitle.id}`}>
        {props.productTitle.title}
        {props.verified && <span className="verified-icon"><i className="fas fa-badge-check"></i></span>}
      </Link>
   </CustomTag>
  )
}

export default ProductTitle