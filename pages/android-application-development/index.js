import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ScrollAnimation from 'react-animate-on-scroll';
import ExploreService from '../../components/common/ExploreService';
import style from '../../styles/pages/AndroidAppDevelopment.module.scss';
const NavbarHomeFile = dynamic(() => import('../../components/NavbarHome'), { ssr: false });

const index = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </Head>
            <NavbarHomeFile color="000" />
            <div className='container'>
                <div className={style.HeadingAndroidServices}>
                    <h1>
                        Android <span>Application Development</span>
                    </h1>
                    <h4>Craft your App with <span>best Android App development</span>  in INDIA</h4>
                    <p>
                        We have been crafting and developing Android mobile app solutions from 2009, for clients across the globe. We are here to listen your requirements (carefully) and we delivers the optimal and best Services with strategic team work and coordination.
                    </p>
                </div>
                <div className={style.AboutBox}>
                    <div className='row'>
                        <div className='col-lg-4 offset-lg-1'>
                            <div className={style.ModernNumber}>
                                <p className={style.headingNumber}>
                                    <span>13</span>
                                    Years’ Experience in IT industry
                                </p>
                                <p>More About Our Success IT Stories</p>

                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className={style.TextAbout}>
                                <p>
                                    we create powerful and appealing apps that boosts any kind of business idea in to success. We care for modern approach and technology advantages that is why our Android App developers are equipped with top notch tools, latest technology frameworks.
                                </p>
                                <div className={style.DiscoverNowbutton}>
                                    <a href="#" class="btn-text">
                                        Discover now
                                        <span class="button-icon ml-1">
                                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.27rem', height: '15px' }}></FontAwesomeIcon>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={style.ResourceWrapper}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 order-2 order-lg-1'>
                            <div className={style.LeftResourceBox}>
                                <h1>
                                    <span>Have a</span> vision for your App?
                                </h1>
                                <p>
                                    Infilon have built android applications for wide domain area and industries like Business, Healthcare, travel, Banking, Games, construction, E-commerce and Sales Force. We’ll work with your vision and goal to successful execution so that you can focus on your business. Let’s discuss your Android app development project right away.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-5 order-1 order-lg-2'>
                            <div className={style.ImageFluid}>
                                <img src='https://www.infilon.com/assets/images/inner/and_vision.png'>
                                </img>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className={style.ImageFeatureContainer}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-7'>
                            <div className={style.LeftResourceBox}>
                                <img src='https://www.infilon.com/assets/images/inner/and_img2.png'>
                                </img>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className={style.RightResourceBox}>
                                <h1>
                                    <span>Want your App </span> to stand out from ordinary ?
                                </h1>
                                <p>
                                    We believe Android user experience should be interactive and visually fabulous, our mobile app developers are smart enough to deliver eye catching, robust and secure App development services. Our expert team of developers perform jobs with realistic approach, accordingly with scope of work, research and delivery deadlines.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className={style.AboutSectionWithBgImg}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-xl-12 col-lg-7'>
                            <div className={style.LeftResourceBox}>
                                <p>
                                    Besides custom Android Application development, <span>we also deliver</span> quality social media applications, Android widget development, Android apps testing and deployment, Android app strategic support
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={style.SectionWorkSteps}>
                <div className='container'>
                    <div className='row'>
                        <div className={`col-lg-3 col-md-3 sm-12`}>
                            <ScrollAnimation animateIn="fadeInRight">
                                <h1>  01. Language  </h1>
                                <p>JAVA</p>
                            </ScrollAnimation>
                        </div>
                        <div className={`col-lg-3 col-md-3 sm-12`}>
                            <ScrollAnimation animateIn="fadeInRight">
                                <h1> 02. Frameworks  </h1>
                                <p>Android SDK</p>
                            </ScrollAnimation>
                        </div>
                        <div className={`col-lg-3 col-md-3 sm-12`}>
                            <ScrollAnimation animateIn="fadeInRight">
                                <h1> 03. Development Tools </h1>
                                <p>ADT, Android Studio, Eclipse</p>
                            </ScrollAnimation>
                        </div>
                        <div className={`col-lg-3 col-md-3 sm-12`}>
                            <ScrollAnimation animateIn="fadeInRight">
                                <h1>  04. Versions  </h1>
                                <p>Nougat, Honeycomb, Ice cream sandwich,
                                    jellybeans, Kitkat</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.InfoTechnoContactUs}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-12 col-lg-12'>

                            <div className={style.ContactUsWrapone}>
                                <div className={style.Verticleline}></div>
                                <div className={style.InfoHeading}>
                                    <p> Conceptualize Development <span>Life cycle {'->'} Strategy {'->'} App submission {'->'} Pre-launch Marketing {'->'} Design & Build Explore the</span></p>
                                </div>
                                <div className={style.subheading}>
                                    We are happy to share with you we are the Best Android App Development Company in Ahmedabad, Surat, Baroda, Rajkot, Bhavnagar and across pan INDIA.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ExploreService />
        </>
    )
}

export default index;

