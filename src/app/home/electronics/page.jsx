import React from 'react'
"use client"
import Link from "next/link"
import {usePathname, usePathname } from 'next/navigation';
import CategoryElectronics from "@/components/category/CategoryElectronics";
import Section from "@/components/element/Section";
import SectionTitle from "@/components/element/SectionTitle";
import SlickSlider from "@/components/element/SlickSlider";
import HeaderOne from "@/components/header/HeaderOne";
import BannerOne from "@/components/hero-banner/BannerOne";
import PosterOne from "@/components/poster/PosterOne";
import ProductOne from "@/components/product/ProductOne";
import TestimonialOne from "@/components/testimonial/TestimonialOne";
import ProductsData from '@/Data/Products';
import FooterTwo from '@/components/footer/FooterTwo';
import ServiceTwo from '@/components/services/ServiceTwo';
import Newsletter from '@/components/newsletter/Newsletter';
import WhyChoose from '@/components/why-choose/WhyChoose';
import ProductTwo from '@/components/product/ProductTwo';
import ProductListOne from '@/components/product/ProductListOne';
import PosterTwo from '@/components/poster/PosterTwo';
import { mapInSlices, slugify } from '@/utils';

const HomeElectronics = () => {

    const usePathname = usePathname();
    const split = usePathname.split("/");
    const pageCategory = split[split.length - 1];
    const electronicsProduct = ProductsData.filter(data => slugify(data.pCate) === pageCategory);
    const exploreProducts = mapInSlices(electronicsProduct, 8);

  return (
    <>
    <HeaderOne/>
    <main className="main-wrapper">
        <BannerOne/>
        <CategoryElectronics/>
        <PosterOne singleAnimation/>
        <Section>
            <SectionTitle
            title="Explore Our Services"
            subtitle="Our Services"
            subtitleIcon="fa fa sopiing "
            subColor="hightlighter-secondary"
            />
            <SlickSlider className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
            slidesToShow={1}
            >
                
            </SlickSlider>
        </Section>
    </main>
    </>
  )
}

export default HomeElectronics;

