import { ProductReview } from "@/Data/comments"
import { reviewAverage, slugify } from "@/utils"


const ProductRating = ({rating, textEnable}) => {
  const findReview = ProductReview.filter((data) => slugify(data.productId) === slugify(rating.id));
  const ratingNumber = reviewAverage(findReview);
  const ratingNumbedummy = 4;
 
  return (
    <>
    {findReview.length > 0 && 
    <div className="product-rating">
      <span className="icon">
        {[
          ...Array(5)
        ].map((item, index) =>(
          <i className={`${index <= ratingNumber - 1 ? 'fas' : 'fal'} fa-star`} key={index}></i>
        ))}
      </span>
      <span className="rating-number">{`(${findReview.length} ${textEnable ? 'Customar Reviews':'' })`}</span>
    </div>
    }
    </>
  )
}

export default ProductRating