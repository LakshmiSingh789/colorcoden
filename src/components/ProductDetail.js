import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import Breadcrumb from "./BreadCrumb";
import Carousel from './Carousel';
import {productDetails} from '../ProductsData';
import Accordion from "./Accordion/index";
import { toggleDown, toggleUp } from '../constants';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const productDetail = productDetails.find((p) => p.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleBreadcrumbClick = ({ index, link }) => {
        console.log("handleBreadcrumb Click", index, link);
    };

    const breadCrumbItems = [
        { label: "Home", link: "/" },
        { label: "Shop All", link: "/shop" },
        { label: `${product.proteinName} - ${product.flavour}`, link: { id } },

    ];

    const productDetailsAccordion = () => {
        return productDetail.details.map((item) => ({
          ...item,
          content: (
            <ul className='productlist list-disc'>
              {item.content.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          ),
        }));
    };

    return (
        <div className='ml-28 mt-10'>
            <Breadcrumb
                items={breadCrumbItems}
                separator="/"
                onLinkClick={handleBreadcrumbClick}
                size="20"
                linkedColor="green"
                linkedColorStrength="500"
                openedColor="black"
                openedColorStrength="600"
            />
             <Carousel
                images={productDetail.images}
                height={500}
                width="500px"
                navigationDots={false}
                leftIcon={"<"}
                rightIcon={">"}
              />
                <Accordion
                items={productDetailsAccordion()}
                headerSize="20"
                contentSize="18"
                accordionWidth="500"
                toggleDown={toggleDown}
                toggleUp={toggleUp}
                multiToggleOpen={true}
              />
        </div>
    );
};

export default ProductDetail;
