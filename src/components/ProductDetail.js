import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import Breadcrumb from "./BreadCrumb";
import Carousel from './Carousel';
import { productDetails, productFeatures } from '../ProductsData';
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
            <div className='flex flex-wrap mt-5'>
                <div className='w-full lg:w-1/2 mb-5 lg:mb-0'>
                    <Carousel
                        images={productDetail.images}
                        height={500}
                        width="100%"
                        navigationDots={true}
                        leftIcon={"<"}
                        rightIcon={">"}
                    />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col items-start justify-center lg:min-h-[500px]'>
                    <div className='px-5'>
                        {productFeatures.map((item, index) => (
                            <img
                                src={item}
                                alt={`product-feature-${index}`}
                                key={index}
                                className='mb-3 h-20 w-20'
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <Accordion
                    items={productDetailsAccordion()}
                    headerSize="20"
                    contentSize="18"
                    accordionWidth="600"
                    toggleDown={toggleDown}
                    toggleUp={toggleUp}
                    multiToggleOpen={true}
                />
            </div>
        </div>
    );
};

export default ProductDetail;
