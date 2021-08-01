import React from "react";
import ParallaxEffect from "../jquery-plugin/ParallaxEffect";

export default function CompanyBannerArea({ image, bannerContent}) {
    return (
        <>
            {/** home-company.html **/}
            <section className="company_banner_area">
                <ParallaxEffect image={{
                    source: '/img/new/company.jpg',
                    alt: 'Notre cabinet'
                }}/>
                <div className="container">
                    <div className="company_banner_content">
                        <h6 className={"wow fadeInUp"}>{bannerContent.subtitle ?? `January 10, 2019 / New York City`}</h6>
                        <h2>{bannerContent.title ?? `Bienvenue au cabinet paramédical de <br/>Salomé THOMAS.`}</h2>
                    </div>
                </div>
            </section>
        </>
    )
}