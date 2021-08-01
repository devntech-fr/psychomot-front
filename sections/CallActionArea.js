import React from "react";
import { Parallax } from "react-parallax";

export default function CallActionArea({ title, content, button, bgImage}) {
    return (
        <>
            {/** home-mail.html **/}
            <Parallax blur={5} bgImage={bgImage.source} bgImageAlt={bgImage.alt} strength={200}>
                <section className="call_action_area">
                    <div className="container">
                        <div className="action_content text-center">
                            <h2 className="f_p f_size_40 l_height50 f_700">{title ?? `Un travail d’équipe au bénéfice du patient`}</h2>
                            <p>
                                {content ?? `Le centre est un lieu convivial qui réunit dans un même lieu, des professionnels aux spécialités complémentaires pour que chacun puisse y trouver des solutions aux problématiques qu’il rencontre.`}
                            </p>
                            {
                                button && <a href={button.href ?? `#`} className="action_btn btn_hover mt_40">{button.label ?? `Get started`}</a>
                            }
                        </div>
                    </div>
                </section>
            </Parallax>
        </>
    )
}