import React from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function DesignTabArea(areaContent, tab) {
    const { tabs, tabContents } = tab;
    return (
        <>
            <section className="design_tab_area sec_pad">
                <div className="container">
                    <div className="sec_title text-center mb_70 wow fadeInUp" data-wow-delay="0.3s"
                         style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <h2 className="f_p f_size_30 l_height50 f_600 t_color3">
                            {areaContent.title ?? `Your design process, in one place`}
                        </h2>
                        <p className="f_400 f_size_16 mb-0">
                            {areaContent.content ?? `WShow off show off pick your nose and blow off Elizabeth grub
                            haggle <br/> dropped a clanger cracking.!`}
                        </p>
                    </div>
                    <div className="row">
                        <Tabs defaultIndex={1} onSelect={index => console.log('index selected:',index)}>
                            <div className="col-lg-4">
                                <TabList
                                    className="nav nav-tabs design_tab"
                                >
                                    {
                                        tabs?.length > 0
                                        && tabs?.map((tab, key) => {
                                            return (
                                                <Tab
                                                    className="nav-item wow fadeInUp" data-wow-delay="0.4s"
                                                    panelId={tab.name}
                                                    tabIndex={tab.name}
                                                    style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}
                                                >
                                                    <a
                                                        className="nav-link"
                                                        key={key}
                                                    >
                                                        <h5>{tab.title}</h5>
                                                        <p>{tab.content}</p>
                                                    </a>
                                                </Tab>
                                            )
                                        })
                                    }
                                    {!tabs && <>
                                        <Tab
                                            className="nav-item wow fadeInUp" data-wow-delay="0.4s"
                                            selected={true}
                                            panelId={"one"}
                                            style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}
                                        >
                                            <a
                                                className="nav-link active show"
                                            >
                                                <h5>Tab title 1</h5>
                                                <p>Tab content 1</p>
                                            </a>
                                        </Tab>
                                        <Tab
                                            className="nav-item wow fadeInUp" data-wow-delay="0.4s"
                                            selected={true}
                                            panelId={"two"}
                                            style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}
                                        >
                                            <a
                                                className="nav-link"
                                            >
                                                <h5>Tab title 2</h5>
                                                <p>Tab content 2</p>
                                            </a>
                                        </Tab>
                                        <Tab
                                            className="nav-item wow fadeInUp" data-wow-delay="0.4s"
                                            selected={true}
                                            panelId={"three"}
                                            style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}
                                        >
                                            <a
                                                className="nav-link"
                                            >
                                                <h5>Tab title 3</h5>
                                                <p>Tab content 3</p>
                                            </a>
                                        </Tab>
                                    </>}
                                </TabList>
                                {/** default tab list **/}
                            </div>
                            <div className="col-lg-8">
                                <div className="tab-content">
                                    {
                                        tabContents?.length > 0
                                        && tabContents?.map((tabContent, key) => {
                                            console.log('tabContent:',tabContent);
                                            return (
                                                <>
                                                    <TabPanel
                                                        tabId={tabContent.name}
                                                        className={`tab-pane fade`}
                                                    >
                                                        <div className="tab_img" key={key}>
                                                            <Image className="img-fluid" src={tabContent.image ?? "/img/home3/tab.png"} alt={""} width={941} height={652}/>
                                                        </div>
                                                    </TabPanel>
                                                </>
                                            )
                                        })
                                    }
                                    {!tabContents && <>
                                        <TabPanel
                                            className={`tab-pane fade`}
                                        >
                                            <div className="tab_img">
                                                <Image className="img-fluid" src={"/img/home3/tab.png"} alt={""} width={941} height={652}/>
                                            </div>
                                        </TabPanel>
                                        <TabPanel
                                            className={`tab-pane fade`}
                                        >
                                            <div className="tab_img">
                                                <Image className="img-fluid" src={"/img/home3/tab.png"} alt={""} width={941} height={652}/>
                                            </div>
                                        </TabPanel>
                                        <TabPanel
                                            className={`tab-pane fade`}
                                        >
                                            <div className="tab_img">
                                                <Image className="img-fluid" src={"/img/home3/tab.png"} alt={""} width={941} height={652}/>
                                            </div>
                                        </TabPanel>
                                    </>}
                                </div>
                            </div>
                        </Tabs>
                    </div>
                    {/** default template tab dynamic **/}
                </div>
            </section>
        </>
    )
}

export function TabNavItem(item, key) {
    return (
        <li className="nav-item wow fadeInUp" data-wow-delay="0.4s" key={key}
            style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
            <a
                className="nav-link active show"
                id={item.name ? `${item.name}-tab` : "one-tab"}
                href={item.name ? `#${item.name}` : "#one"}
                role="tab" aria-controls="one" aria-selected="true" data-toggle="tab">
                <h5>{item.title ?? `Collaboration`}</h5>
                <p>{item.title ?? `Design to development,<br/> automated`}</p>
            </a>
        </li>
    )
}

export function TabContentItem(item, key) {
    return (
        <div
            className="tab-pane fade active show"
            id={item.name ?? "one"}
            role="tabpanel"
            aria-labelledby={item.name ? `${item.name}-tab` : "one-tab"} key={key}>
            <div className="tab_img">
                <Image className="img-fluid" src={item.image ?? "/img/home3/tab.png"} alt={""} width={941} height={652}/>
            </div>
        </div>
    )
}

export function DefaultTabList() {
    return (
        <ul className="nav nav-tabs design_tab" role="tablist">
            <li className="nav-item wow fadeInUp" data-wow-delay="0.4s"
                style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                <a className="nav-link active show" id="one-tab" data-toggle="tab" href="#one" role="tab"
                   aria-controls="one" aria-selected="true">
                    <h5>Collaboration</h5>
                    <p>Design to development,<br/> automated</p>
                </a>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay="0.6s"
                style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two"
                   aria-selected="false">
                    <h5>UI/UX design</h5>
                    <p>Design to development,<br/> automated</p>
                </a>
            </li>

            <li className="nav-item wow fadeInUp" data-wow-delay="0.8s"
                style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab"
                   aria-controls="three" aria-selected="false">
                    <h5>Easy to maintain</h5>
                    <p>Design to development,<br/> automated</p>
                </a>
            </li>
        </ul>
    )
}

export function DefaultTemplateTabDynamic() {
    return (
        <div className="row">
            <div className="col-lg-4">
                <ul className="nav nav-tabs design_tab" role="tablist">
                    {
                        tabs?.length > 0
                        ?? tabs.map((tab, key) => {
                            return (
                                <TabNavItem item={tab} key={key}/>
                            )
                        })
                        ?? (
                            <>
                                <li className="nav-item wow fadeInUp" data-wow-delay="0.4s"
                                    style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                    <a className="nav-link active show" id="one-tab" data-toggle="tab" href="#one" role="tab"
                                       aria-controls="one" aria-selected="true">
                                        <h5>Collaboration</h5>
                                        <p>Design to development,<br/> automated</p>
                                    </a>
                                </li>
                                <li className="nav-item wow fadeInUp" data-wow-delay="0.6s"
                                    style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                                    <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two"
                                       aria-selected="false">
                                        <h5>UI/UX design</h5>
                                        <p>Design to development,<br/> automated</p>
                                    </a>
                                </li>
                                <li className="nav-item wow fadeInUp" data-wow-delay="0.8s"
                                    style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                                    <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab"
                                       aria-controls="three" aria-selected="false">
                                        <h5>Easy to maintain</h5>
                                        <p>Design to development,<br/> automated</p>
                                    </a>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
            <div className="col-lg-8">
                <div className="tab-content">
                    {
                        tabContents?.length > 0
                        ?? tabContents.map((tabContent, key) => {
                            return (
                                <TabContentItem item={tabContent} key={key}/>
                            )
                        })
                        ?? (
                            <>
                                <div className="tab-pane fade active show" id="one" role="tabpanel" aria-labelledby="one-tab">
                                    <div className="tab_img">
                                        <Image className={"img-fluid"} src={"/img/home3/tab.png"} alt={""} width={941} height={652}/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
                                    <div className="tab_img">
                                        <Image className={"img-fluid"} src={"/img/home3/tab.png"} alt={""} width={941} height={652}/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
                                    <div className="tab_img">
                                        <Image className={"img-fluid"} src={"/img/home3/tab.png"} alt={""} width={941} height={652}/>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}