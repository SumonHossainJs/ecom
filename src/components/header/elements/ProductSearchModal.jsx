"use client"
import Link from "next/link"
import { useState } from "react"
import ProductsData from "@/Data/Products";
import ProductPrice from "@/components/product/elements/ProductPrice";
import ProductRating from "@/components/product/elements/ProductRating";
import ProductThumbnail from "@/components/product/elements/ProductThumbnail";
import ProductTitle from "@/components/product/elements/ProductTitle";
import ActionButton from "@/components/product/elements/ActionButton";

const ProductSearchModal = (props) => {
  const getProducts = ProductsData;
  const [productQuery, setProductQuery] = useState([]);

  const SearchInputHandler = (inputValue) =>{
    if(inputValue > 0) {
      let matchingData = getProducts.filter((products) =>
      products.title.toLowerCase().includes(inputValue.toLowerCase()));
      setProductQuery(matchingData);
    }else{
      setProductQuery([]);
    }
  }
  return (
    <>
    <div className={`header-search-model ${props.toggler ? "open":''}`}>
      <button className="card-close sidebar-close" onClick={props.toggleHandler}>
        <i className="fas fa-times"></i>
      </button>
    </div>
    </>
  )
}

export default ProductSearchModal