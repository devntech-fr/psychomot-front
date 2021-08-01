export default function DesignDevelopersArea({ areaContent, images }) {
    return (
        <>
            <section className="design_developers_area sec_pad">
                <div className="container">
                    <div className="sec_title text-center mb_70 wow fadeInUp" data-wow-delay="0.2s">
                        <h2 className="f_p f_size_30 l_height50 f_600 t_color3">Your design process, in one place</h2>
                        <p className="f_400 f_size_16 mb-0">WShow off show off pick your nose and blow off Elizabeth
                            grub haggle <br/> dropped a clanger cracking.!</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="design_img wow fadeInRight" data-wow-delay="0.2s">
                                <img className="img-fluid" src="/img/home5/design1.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 d-flex align-items-center">
                            <div className="design_img_two wow fadeInRight" data-wow-delay="0.4s">
                                <img className="img-fluid" src="/img/home5/design2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="text-center wow fadeInUp" data-wow-delay="0.4s">
                        <a href="#" className="btn_hover btn_four mt_70">API Documentation</a>
                    </div>
                </div>
            </section>
        </>
    )
}