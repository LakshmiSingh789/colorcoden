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
                <ul className="productlist list-disc">
                    {item.content.split("\n").map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            ),
        }));
    };

    const getBackgroundColor = (type) => {
        switch (type) {
            case 'kids':
                return 'bg-sky-300';
            case 'chips':
                return 'bg-green-400';
        }
    };

    return (
        <div className={`${getBackgroundColor(productDetail.type)} pl-28 pt-10 p-5`}>
            <Breadcrumb
                items={breadCrumbItems}
                separator="/"
                onLinkClick={handleBreadcrumbClick}
                size="20"
                linkedColor="amber"
                linkedColorStrength="900"
                openedColor="black"
                openedColorStrength="600"
            />
            {productDetail.type === "adult" && (
                <>
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
                </>)}

            {
                (productDetail.type === "kids" || productDetail.type === "chips" || productDetail.type === "shaker") && (
                    <>
                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-black w-full lg:w-3/5">
                            <ul className="list-disc lg:w-1/2">
                                <h1 className='text-3xl font-extrabold m-3'>
                                    {product.proteinName} <br />  {product.flavour ? "-" + product.flavour : null}

                                </h1>
                                { (productDetail.type === "kids" || productDetail.type === "chips") && productDetail.details.map((data) => (
                                    <li key={data}>{data}</li>
                                ))}
                                {productDetail.type === "shaker" && (<p>{productDetail.details[0]}</p>)}
                            </ul>
                            <div className="lg:w-1/2">
                                <Carousel
                                    images={productDetail.images}
                                    height={500}
                                    width="100%"
                                    navigationDots={true}
                                    leftIcon={"<"}
                                    rightIcon={">"}
                                />
                            </div>
                        </div>
                    </>
                )
            }



        </div>
    );
};

export default ProductDetail;
