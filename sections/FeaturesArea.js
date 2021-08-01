import React from "react";
import Image from "next/image";

export default function FeaturesArea(areaContent, images) {

    return (
        <>
            {/** home-mail.html **/}
            <section className="features_area sec_pad">
                <div className="container">
                    <div className="row feature_info">
                        <div className="col-lg-7">
                            <div className="feature_img f_img_one">
                                <Image className="leaf one wow fadeIn" data-wow-delay="0.3s" src={`/img/home2/featureimg1.png`} width={676} height={466} alt={""}/>
                                {/*<Image className="wow fadeInRight" data-wow-delay="0.1s" src={`/img/home2/featureimg1.png`} width={676} height={466} alt={""}/>*/}
                                {/*<Image className="leaf three wow fadeInLeft" data-wow-delay="0.7s" src={`/img/home2/featureimg1.png`} width={676} height={466} alt={""}/>*/}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="f_content">
                                <div className="icon">
                                    <Image src={`/img/home2/f_icon_shape1.png`} width={105} height={105} alt={""}/>
                                    <i className="ti-comments"></i>
                                </div>
                                <h2 className="f_600 f_size_30">{areaContent.title ?? `Manage conversations with leads and customers at scale`}</h2>
                                <p className="f_400">{areaContent.content ?? `That cheeky bugger down the pub squiffy arse spiffing cup of char on your bike
                                    mate, quaint I Jeffrey I don't want no agro you mug zonked Richard, barney bobby matie boy David a
                                    the full monty. Don't get shirty with me faff about cheesed off cheeky bubble.!`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}