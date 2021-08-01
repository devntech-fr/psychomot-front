/**
 * saasland: header-style5.html
 * @returns {JSX.Element}
 * @constructor
 */

export default function Preloader() {
    return (
        <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                    <div className="txt-loading">
                    <span data-text-preloader="S" className="letters-loading">
                        S
                    </span>
                        <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                        <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                        <span data-text-preloader="S" className="letters-loading">
                        S
                    </span>
                        <span data-text-preloader="L" className="letters-loading">
                        L
                    </span>
                        <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                        <span data-text-preloader="N" className="letters-loading">
                        N
                    </span>
                        <span data-text-preloader="D" className="letters-loading">
                        D
                    </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}