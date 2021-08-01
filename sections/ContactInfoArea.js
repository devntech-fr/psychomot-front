export default function ContactInfoArea() {
    return (
        <>
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 pr-0">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
                                <p className="f_400 f_size_15">Melbourne’s GPO 434 Bourke St. Dhaka VIC 3074,
                                    Australia</p>
                            </div>
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a
                                    href="tel:3024437488">(+096) 302 443 7488</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Fax:</span> <a
                                    href="tel:3024437488">(+096) 204 353 6684</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a
                                    href="mailto:saasland@gmail.com">saasland@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <div className="mapbox">
                                <div id="mapBox" className="row m0" data-lat="40.701083" data-lon="-74.1522848"
                                     data-zoom="10"
                                     data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                                     data-marker="img/map.png" data-mlat="40.701083" data-mlon="-74.1522848">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact_form">
                        <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mt_100 mb_40">Leave a Message</h2>
                        <form action="" className="contact_form_box" method="post" id="contactForm"
                              noValidate="novalidate">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" id="name" name="name" placeholder="Your Name"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" name="email" id="email" placeholder="Your Email"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <input type="text" id="subject" name="subject" placeholder="Subject"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <textarea name="message" id="message" cols="30" rows="10"
                                                  placeholder="Enter Your Message . . ."></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn_three">Send Message</button>
                        </form>
                        <div id="success">Your message succesfully sent!</div>
                        <div id="error">Opps! There is something wrong. Please try again</div>
                    </div>
                </div>
            </section>
        </>
    )
}