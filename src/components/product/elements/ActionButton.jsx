"use client"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, addToWishlist, addToQuickView } from "@/store/slices/productSlice"

const ActionButton = (props) => {
  const dispatch = useDispatch();
  const getWishList = useSelector((state) => state.productData.wishlistItems);
  const isWishlistAdded = getWishList.filter((data) => data.id === props.productAction.id);

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product));
  }
  const handleAddToWishlist = (product) =>{
    dispatch(addToWishlist(product))
  }
  const quickViewHandler = (product) =>{
    dispatch(addToQuickView({
      viewItem:product,
      quickView:true,
    }))
  }
  return (
    <ul className="cart-action">
    {props.wishlistBtn && props.productAction.pCate !=="NFT" &&
    (
      <li className="wishlist">
        <button onClick={() => handleAddToWishlist(props.productAction)}>
              <i className={isWishlistAdded.length === 1 ? "fas fa-heart" : "far fa-heart"}></i>
        </button>
      </li>
    ) }
    {props.cartBtn && (
      <li className="select-option">
        {props.productAction.pCate === "NFT" || props.productAction.productType === "variable" ? (
          <Link href={`/product/${props.productAction.id}`}>Buy Product</Link>
        ):(
          <button onClick={() => handleAddToCart(props.productAction)}>
            Add to Cart
          </button>
        )}
      </li>
    )}
    {props.quickViewBtn && props.productAcion.pCate !== "NFT" && (
      <li className="quickview">
          <button onClick={()=> quickViewHandler(props.productAcion)}>
            <i className="far fa-eye"></i>
          </button>
      </li>
    )}
      </ul>
  )
}

export default ActionButton