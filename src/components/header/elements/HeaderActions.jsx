import Link from "next/link"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ProductSearchModal from "./ProductSearchModal"
import Minicart from "./Minicart"
import { miniCartHandler } from "@/store/slices/productSlice"
import { mobileMenu } from "@/store/slices/menuSlice"


const HeaderActions = (props) => {
const [searchToggler, setsearchToggler] = useState(false);
const [accountDropdown, setAccountDropdown] = useState(false);


const dispatch = useDispatch();
const getProducts = useSelector((state) => state.productData);

const SearchboxToggleHandler = () =>{
  setsearchToggler((toggler) => !toggler);
}
const AccountDropdownToggler = () =>{
  setAccountDropdown((toggler) => !toggler);
}
const carthandler = (data) =>{
  dispatch(miniCartHandler(data));
}
const mobileMenuHandler = (data) =>{
  dispatch(mobileMenu(data));
}
  return (
    <div className="header-action">
      <ul className="action-list">
        {props.searchBox && (
          <li className="axil-search" onClick={SearchboxToggleHandler}>
            <input type="search" className="placeholder product-search-input" 
            name="search2"
            placeholder="What are you Looking for?"
            autoComplete="off"
            />
            <button type="submit" className="icon wooc-btn-search">
              <i className="far fa-search"></i>
            </button>
          </li>
        )}

        {props.searchIcon &&(
          <li className="axil-search axil-search-icon">
              <button className="header-search-icon" onClick={SearchboxToggleHandler}>
                <i className="far fa-search"></i>
              </button>
          </li>
        )}
        <li className="wishlist">
          <Link href={"/wishlist"}>
          {getProducts.wishListQuantity > 0 &&
          <span className="cart-count">{getProducts.wishListQuantity}</span>
          }
          <i className="far fa-heart"></i>
          </Link>
        </li>
        <li className="shopping-cart">
          <button className="cart-dropdown-btn" onClick={() => carthandler(true)}>
            <span className="cart-count">{getProducts.cartQuantityTotal}</span>
            <i className="far fa-shopping-cart"></i>
          </button>
        </li>
        <li className="my-account">
          <button onClick={AccountDropdownToggler}>
            <i className="far fa-user"></i>
          </button>
          <div className={ `my-account-dropdown ${accountDropdown ? "open" : ''}`}>
            <span className="title">QuickLinks</span>
            <ul>
              <li>
                <Link href={"/dashboard"}>My Account</Link>
              </li>
              <li>
                <Link href={"dashboard/orders"}>Orders</Link>
              </li>
              <li>
                <Link href={"/dashboard/account-details"}>Settings</Link>
              </li>
            </ul>
            <div className="login-btn">
              <Link href={"/sign-in"} className="axil-btn btn-bg-primary">
                Login
              </Link>
            </div>
            <div className="reg-footer text-center">
              No account yet?
              <Link href={'/sign-up'} className="btn-link">
                REGISTER HERE.
              </Link>
            </div>
          </div>
        </li>
        <li className="axil-mobile-toggle">
          <button className="menu-btn mobile-nav-toggler" onClick={()=> mobileMenuHandler(true)}>
            <i className="fal fa-bars"></i>
          </button>
        </li>
      </ul>
      <Minicart/>
      {
        (props.searchIcon || props.searchBox) && (
          <ProductSearchModal
          toggleHandler = { SearchboxToggleHandler}
          toggler= {searchToggler}
          />
        )
      }
    </div>
  )
}

export default HeaderActions