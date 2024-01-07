'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
 import { useSelector, useDispatch } from "react-redux";
import { HeaderMenu } from "@/Data/Menu";
import { mobileMenu } from "@/store/slices/menuSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const menuOption = useSelector((state)=> state.menu);
const [windowWidth, setWindowWidth] = useState();

const mobileMenuHandler = (data) =>{
  dispatch(mobileMenu(data));
}
  return (
    <div>Nav</div>
  )
}

export default Nav