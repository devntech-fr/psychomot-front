import React, {useEffect} from "react";
import Image from "next/image";
import ClockUtils from "jquery-plugin/ClockUtils";
import { getServerUrl } from "utils/server-info";

function ComingSoon({ comingSoon }) {
    const { title, subtitle, deadline, image } = comingSoon;
    useEffect(() => {
        ClockUtils.initializeClock('clockdiv',deadline);
    }, []);
    return (
        <div className="saasland_container">
            <div className="saasland_col_6 saasland_col_content">
                <div className="container_wrap">
                    <div className="saasland_log">
                        <a href="#">
                            <Image
                                src={getServerUrl()+image.url}
                                alt={image.alternativeText}
                                width={225}
                                height={190}
                                unoptimized={true}
                            />
                        </a>
                    </div>
                    <div className="saasland_content">
                        <h1 className="f_robot_c f_50 f_700">{title.slice(0,14)}<br/>{title.slice(14,32)}<br/>{title.slice(32,title.length+1)}</h1>
                        <h2>{subtitle}</h2>
                    </div>
                    <div className="saasland_bottom">
                        Copyright © 2021 Created by <a href="mailto:devntech@protonmail.com">Dev'nTech</a>
                    </div>
                </div>
            </div>
            <div className="saasland_col_6 saasland_col_screen">
                <div className="saasland_bg"></div>
                <div id="clockdiv" className="clock">
                    <div className="timer">
                        <span className="days"></span>
                        <div className="smalltext">J</div>
                    </div>
                    <div className="timer">
                        <span className="hours"></span>
                        <div className="smalltext">H</div>
                    </div>
                    <div className="timer">
                        <span className="minutes"></span>
                        <div className="smalltext">M</div>
                    </div>
                    <div className="timer">
                        <span className="seconds"></span>
                        <div className="smalltext">S</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;
