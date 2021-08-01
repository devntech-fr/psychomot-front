import React, { useEffect} from "react";
import Layout from "../components/Layout";
import CompanyBannerArea from "../sections/CompanyBannerArea";
import SaasFeaturesAreaThree from "../sections/SaasFeaturesAreaThree";
import DesignTabArea from "../sections/DesignTabArea";
import CallActionArea from "../sections/CallActionArea";
import FeaturesArea from "../sections/FeaturesArea";

export default function Home() {
  useEffect(() => {
      // if (typeof window !== 'undefined') {
      //     console.info('window is defined');
      //     window.WOW = require('wow.js');
      // }
  }, []);

  return (
    <>
      <Layout page={"Page d'accueil"} preloader={false}>
        {/** home-company.html **/}
        <CompanyBannerArea
            image={{
              source: '/img/new/company.jpg',
              alt: 'Notre cabinet'
            }}
            bannerContent={{
              title: `Cabinet de psychomotricité de Salomé THOMAS`,
              subtitle: 'Bienvenue au'
            }}
        />
        <SaasFeaturesAreaThree
            areaContent={{
              title: "Un centre pluridisciplinaire",
              content: "Bienvenue dans le cabinet paramédical de Jules Julien aux portes de Toulouse."
            }}
            features={[]}
        />
        {/** tab.html **/}
        {/*<DesignTabArea*/}
        {/*    areaContent={{*/}
        {/*      title: "Your design process, in one place",*/}
        {/*      content: "WShow off show off pick your nose and blow off Elizabeth"*/}
        {/*    }}*/}
        {/*    tab={{*/}
        {/*        tabs: [*/}
        {/*            {id: 1, name: 'one', title: 'Title 1', content: "Content 1"},*/}
        {/*            {id: 2, name: 'two', title: 'Title 2', content: "Content 2"},*/}
        {/*            {id: 3, name: 'three', title: 'Title 3', content: "Content 3"}*/}
        {/*        ],*/}
        {/*        tabContents: [*/}
        {/*            {id: 1, name: 'one', image: "/img/home3/tab.png"},*/}
        {/*            {id: 2, name: 'two', image: "/img/home3/tab.png"},*/}
        {/*            {id: 3, name: 'three', image: "/img/home3/tab.png"},*/}
        {/*        ]*/}
        {/*    }}*/}
        {/*/>*/}
        {/** home-mail.html **/}
        <CallActionArea
            areaContent={{
              title: "",
              content: ""
            }}
            bgImage={{
                source: "/img/home2/app_bg.png",
                alt: ""
            }}
            button={{ href: "", label: ""}}
        />
        <FeaturesArea/>
      </Layout>
    </>
  )
}
