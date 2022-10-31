import React from 'react'
import dynamic from 'next/dynamic';
import ExploreServices from '../../components/common/ExploreService'
import styles from "../../styles/pages/WhoWeAre.module.scss"
const NavbarHomeFile = dynamic(() => import('../../components/NavbarHome'), { ssr: false });

const index = () => {
    return (
        <>
            <NavbarHomeFile color="000"  />
            <div className={styles.cyberSecuritySection}>
                <div className={styles.cybersecurityAboutBox}>
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-wrap text-center section-space--mb_30">
                                    <h1>
                                        Who<span className="text-color-primary"> We Are </span>
                                    </h1>
                                    <h4>

                                        we are infilon, an ahmedabad based it company
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-lg-12">
                            <div className={styles.cybersecurityAboutText}>
                                <div className={styles.description}>
                                    A prominent web and software development company located in
                                    Ahmedabad. A trusted Information Technology (IT) brand, trading with
                                    numerous exceptional establishments and corporations. A company that
                                    believes in professionalism and specializes in delivery of
                                    distinctive services. Experts working together as a family.
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.aboutResourcesWrapper}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className={styles.resourcesLeftBox}>
                                <div className={`${styles.cybersecurityAboutText} ${styles.resourcesInner}`}>
                                    <div className={styles.deliveringOptimalWrap}>
                                        <div className={styles.text}>
                                            As an IT company with over 13 years of experience and a multi
                                            talented web &amp; Software development team, we can offer Full
                                            stack developer services across the globe.{" "}
                                            <strong>Infilon Technologies Pvt. Ltd.</strong> is administered
                                            by experts, who have sound understanding in the technologies
                                            field. The perfect quality of the web designer described in a
                                            few assets like creative imagination, successful deployment of
                                            web designing ideas on web, entrepreneurial spirit, value of
                                            customer, Knowledge of current trends of market, SEO knowledge,
                                            On time and perfect solution of web development.
                                            <br />
                                        </div>
                                    </div>
                                    {/* <div className="text section-space--pt_30">A web application is an application that is accessed via a web browser over a network such as the Internet or an intranet.<br>Web applications are popular because it uses web browser as a client .It can be as simple as a message board or a guest sign-in book on a website, or as complex as a word processor or a spreadsheet.</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 offset-lg-1">
                            <div className={styles.resourcesRightBox}>
                                <div className={styles.resourcesRightInner}>
                                    <div className={styles.resourcesImages}>
                                        <img
                                            className={styles.imgFluid}
                                            src="https://www.infilon.com/assets/images/inner/aboutimg.png"
                                            alt="Web Application Development"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionSpaceptb80}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 offset-lg-2">
                            <div className={styles.resourcesImages}>
                                <img
                                    className={styles.imgFluid}
                                    src="https://www.infilon.com/assets/images/inner/about img2.png"
                                    alt="Web Application Development"
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className={styles.resourcesRightBox}>
                                <div className={styles.resourcesRightInner}>
                                    <div className={styles.cybersecurityAboutText}>
                                        <div className="text">
                                            We provide complete solution whether you are looking for an
                                            static website to complete e-commerce website, simple billing
                                            software to complete enterprise planning solutions, on-page
                                            search engine optimization to off-page optimization with
                                            result oriented commitments. Our dedicated support team will
                                            always answer your after sales queries 24 hours a day. If you
                                            would like to find more on our services please email us or
                                            call us on our number.
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ExploreServices />
        </>
    )
}

export default index
