import React, { useEffect} from "react";
import Head from "next/head";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
const isServer = typeof window === 'undefined';

/** Promise **/
const WOW = !isServer ? import('wow.js/dist/wow') : null;

export default function Layout({ children, page, preloader }) {

    useEffect(() => {
        WOW
            .then(wow => {
                // console.log('wow:',wow);
                const newWow = new wow.default(
                    {
                        boxClass: 'wow',
                        animateClass: 'animated',
                        offset: 100,
                        mobile: true,
                        live: false,
                        callback:     function(box) {
                            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                        }
                    }
                );
                // console.log('newWow:',newWow);
            })
            .catch(error => console.error('error:',error))
        ;
    }, []);

    return (
        <>
            <Head>
                <title>{page}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
            </Head>
            {preloader && <Preloader/>}
            {/** header-style5.html **/}
            <div className="body_wrapper">
                <Header/>
                {children}
                <Footer/>
            </div>
        </>
    )
}