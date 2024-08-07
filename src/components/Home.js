import React from "react";
import { homeCarouselData } from "../ProductsData";
import HomeCarousel from "./HomeCarousel";
import Header from './Header';

const Home = () => {
    return (
        <div className="relative w-full">
            <div className="absolute top-0 w-full z-10">
                <Header />
            </div>
            <div className="relative top-0">
                <HomeCarousel
                    images={homeCarouselData}
                    height={500}
                    width="100%"
                    navigationDots={true}
                    timeInterval={2}
                />
            </div>
        </div>
    )
}

export default Home;
