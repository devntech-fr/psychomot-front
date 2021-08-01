import React from "react";
import Image from "next/image";

export default function SaasFeaturesAreaThree({ areaContent, features }) {
    return (
        <>
            {/** home-company.html **/}
            <section className="saas_features_area_three bg_color sec_pad">
                <div className="container">
                    <div className="sec_title text-center mb_70 wow fadeInUp" data-wow-delay="0.3s">
                        <h2 className="f_p f_size_30 l_height50 f_600 t_color">{areaContent?.title ?? `Un centre pluridisciplinaire au service des patients et de leurs familles`}</h2>
                        <p className="f_400 f_size_16">
                            {areaContent?.content ?? `Bienvenue dans le cabinet paramédical de Jules Julien aux portes de Toulouse. Ce lieu a été conçu afin d’y réaliser les examens liés à la prise en charge des pathologies psychomotrices, orthophoniques et psychologiques du nourrisson à la personne âgée. Le centre est ouvert du Lundi au Samedi uniquement sur rendez-vous. Des places de parking gratuites sont disponibles aux environs immédiats.`}
                        </p>
                    </div>
                    <div className="row mb_30 new_service">
                        {
                            features?.length > 0
                            ? features?.map((feature, key) => {
                                console.log('feature:',feature);
                                console.log('key:',key);
                                return (
                                    <>
                                        <FeatureItem
                                            serviceContent={feature}
                                            key
                                        />
                                    </>
                                )
                            })
                            : (
                                <>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="saas_features_item text-center wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="new_service_content">
                                                <Image src={"/img/home-10/icon1.png"} width={84} height={99} />
                                                <h4 className="f_size_20 f_p t_color f_500">Awesome design</h4>
                                                <p className="f_400 f_size_15 mb-0">Tosser blag bubble and squeak up the duff A bit of how's your
                                                    father blatant morish char cuppa.!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="saas_features_item text-center wow fadeInUp" data-wow-delay="0.5s">
                                            <div className="new_service_content">
                                                <img src="/img/home-10/icon2.png" alt=""/>
                                                <h4 className="f_size_20 f_p t_color f_500">Easy Customize</h4>
                                                <p className="f_400 f_size_15 mb-0">Tosser blag bubble and squeak up the duff A bit of how's your father blatant morish char cuppa.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="saas_features_item text-center wow fadeInUp" data-wow-delay="0.7s">
                                            <div className="new_service_content">
                                                <img src="/img/home-10/icon3.png" alt=""/>
                                                <h4 className="f_size_20 f_p t_color f_500">Extreme Security</h4>
                                                <p className="f_400 f_size_15 mb-0">Tosser blag bubble and squeak up the duff A bit of how's your father blatant morish char cuppa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export function FeatureItem(serviceContent, key) {
    return (
        <div className="saas_features_item text-center wow fadeInUp" data-wow-delay="0.5s" key={key}>
            {serviceContent?.step && <>
                <div className="number">{serviceContent?.step}</div>
                <div className="separator"></div>
            </>}
            <NewServiceContent
                image={serviceContent?.image}
                title={serviceContent?.title}
                content={serviceContent?.content}
            />
        </div>
    )
}

function NewServiceContent({image, title, content}) {
    return (
        <div className="new_service_content">
            <Image src={image?.source ?? "/img/home-10/icon2.png"} alt={image?.alt ?? "Feature 1"} width={84} height={99} />
            <h4 className="f_size_20 f_p t_color f_500">{title ?? "Easy Customize"}</h4>
            <p className="f_400 f_size_15 mb-0">{content ?? "Tosser blag bubble and squeak up the duff A bit of how's your father blatant morish char cuppa.!"}</p>
        </div>
    )
}