import React from "react";
import Head from "next/head";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
const isServer = typeof window === 'undefined';

export default function Layout({ children, page, preloader }) {

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
