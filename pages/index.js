import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Head from "next/head";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ExploreServices from "../components/common/ExploreService";
import ITserviceCard from "../components/common/ITserviceCard";
import styles from "../styles/pages/Home.module.scss";
import Carousel from "react-multi-carousel";
import CountUp from "react-countup";
import BlogsHome from "../components/common/BlogsHome";
import {
  faAngular,
  faReact,
  faVuejs,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faNode,
  faGolang,
  faPython,
  faPhp,
  faLaravel,
  faApple,
  faWordpress,
  faShopify,
  faMagento,
  faAws,
  faDigitalOcean,
} from "@fortawesome/free-brands-svg-icons";
import { Tabs, Tab } from "react-bootstrap";
import LanguageSection from "../components/common/LanguageSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "../redux/slices/HomeblogSlice";
import { getTestmonialData } from "../redux/slices/HometestimonialsSlice";
// import NavbarHomeFile from '../components/NavbarHome';
const NavbarHomeFile = dynamic(() => import("../components/NavbarHome"), {
  ssr: false,
});

export default function Home() {
  const Homeblog = useSelector((state) => state?.Homeblog?.data);
  const Hometestimonial = useSelector((state) => state?.Hometestimonial?.data);
  console.log("Hometestimonial", Hometestimonial);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log("container check", container);
  };

  const responsiveClients = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1200 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1200, min: 991 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 568 },
      items: 3,
    },
    smobile: {
      breakpoint: { max: 568, min: 0 },
      items: 2,
    },
  };

  const responsiveTestimonials = {
    desktop: {
      breakpoint: { max: 3000, min: 991 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogData());
    dispatch(getTestmonialData());
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Software Development Company - Infilon</title>
        <meta
          name="description"
          content="Infilon Technologies Pvt Ltd is an Ahmedabad based innovative company which carries services of creative web designing, web development, seo, and other IT company services in India as well as offshore development"
        />
      </Head>
      <div className={styles.home}>
        <div
          className={`homePageBackgroundImage ${styles.homePageBackgroundImage}`}
        >
          <NavbarHomeFile filter="none" />
          {/* <Header />
          <div className="container">
            <Navbar className={styles.Nav} key={'xl'} bg="transperent" expand={'xl'} >
              <Container fluid>
                <Navbar.Brand href="#">
                  <div className={styles.navbarBrand}>
                    <img src="https://www.infilon.com/assets/images/logo/light-logo.png" alt="" />
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xl'}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${'xl'}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${'xl'}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xl'}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">About</Nav.Link>
                      <NavDropdown
                        title="Services"
                        id={`offcanvasNavbarDropdown-expand-${'xl'}`}
                      >
                        <NavDropdown.Item style={{ width: '100%' }}>
                          <div className="row">
                            <div className='col-xl-3'>
                              sad
                            </div>
                            <div className='col-xl-3'>
                              sda
                            </div>
                            <div className='col-xl-3'>
                              dsa
                            </div>
                            <div className='col-xl-3'>
                              asd
                            </div>
                          </div>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                        title="Technology"
                        id={`offcanvasNavbarDropdown-expand-${'xl'}`}
                      >
                        <NavDropdown.Item href="#action3">Technology</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                        title="Hire a Team"
                        id={`offcanvasNavbarDropdown-expand-${'xl'}`}
                      >
                        <NavDropdown.Item href="#action3">Hire a Team</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#action2">Careers</Nav.Link>
                      <Nav.Link href="#action2">Blog</Nav.Link>
                      <Button className={styles.navContactUs}>Contact Us</Button>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div> */}
          <div className={` ${styles.homeContains}`}>
            <div className={`${styles.particlesContainer}`}>
              <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  background: {},
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 2,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 3 },
                    },
                  },
                }}
              />
            </div>

            <p className={`filter-none ${styles.agileDigitalHeading}`}>
              {" "}
              Making Agile Digital Transformation Simple{" "}
            </p>
            <div className={styles.hireButtonSectionContainer}>
              <button className={styles.hireTeamBtn}> Hire a Team</button>
              <button className={styles.getQuoteBtn}>
                {" "}
                Get Quote{" "}
                <FontAwesomeIcon
                  className={styles.fontIconStyle}
                  icon={faArrowRight}
                />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.clientsCarouselsection}>
          <div className="container">
            <div className={styles.clientsCarousel}>
              <div className={`row ${styles.row} align-items-center`}>
                <div className="col-lg-2">
                  <p>Our Clients</p>
                </div>
                <div className="col-lg-10">
                  <Carousel
                    responsive={responsiveClients}
                    infinite={true}
                    arrows={false}
                  >
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        draggable={false}
                        src="https://www.infilon.com/assets/images/clients/7-Honda.png"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.completeITServiceContainer}>
          <div className="container">
            <h2>COMPLETE IT SERVICES</h2>
            <h3>
              Custom Software Development <br /> And Mobile App Solutions{" "}
              <span>Serving Start-ups to Enterprises</span>
            </h3>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <ITserviceCard
                  withouthover="https://www.infilon.com/assets/images/technology/Blue/Software-Development.png"
                  withhover="https://www.infilon.com/assets/images/technology/white/Software-Development.png"
                  title="Custom Software Development"
                  description="Being an Award winning, Business software development company we always deliver success with smile, commitment and dedication."
                  link="#"
                  linkname="Discover now"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ITserviceCard
                  withouthover="https://www.infilon.com/assets/images/technology/Blue/Software-Development.png"
                  withhover="https://www.infilon.com/assets/images/technology/white/Software-Development.png"
                  title="Custom Software Development"
                  description="Being an Award winning, Business software development company we always deliver success with smile, commitment and dedication."
                  link="#"
                  linkname="Discover now"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ITserviceCard
                  withouthover="https://www.infilon.com/assets/images/technology/Blue/Software-Development.png"
                  withhover="https://www.infilon.com/assets/images/technology/white/Software-Development.png"
                  title="Custom Software Development"
                  description="Being an Award winning, Business software development company we always deliver success with smile, commitment and dedication."
                  link="#"
                  linkname="Discover now"
                />
              </div>
            </div>
            <div className={styles.talktous}>
              Talk to us and get your project moving.{" "}
              <span>
                <a href="#"> Schedule Your Free Consultation !</a>
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.technologyWeWorkSection} technologyWeWorkSection`}
        >
          <div className="row">
            <div className="col-12">
              <h1 className={styles.technologyMagnificentHeading}>
                {" "}
                <span>Technologies </span> we are magnificent at{" "}
              </h1>
            </div>
            <div className="col-12">
              <Tabs
                defaultActiveKey="frontEnd"
                id="justify-tab-example"
                className={styles.tabContainer}
                transition={true}
              >
                <Tab eventKey="frontEnd" title={<span> Fornt End</span>}>
                  <div className={styles.tabStyles}>
                    <LanguageSection icon={faAngular} title={"AngularJS"} />
                    <LanguageSection icon={faReact} title={"ReactJS"} />
                    <LanguageSection icon={faVuejs} title={"Vue.js"} />
                    <LanguageSection icon={faJsSquare} title={"JavaScript"} />
                    <LanguageSection icon={faCss3Alt} title={"CSS3"} />
                    <LanguageSection icon={faHtml5} title={"HTML5"} />
                  </div>
                </Tab>

                <Tab eventKey="backend" title={<span> Backend</span>}>
                  <div className={styles.tabStyles}>
                    <LanguageSection icon={faNode} title={"Node.js"} />

                    <LanguageSection icon={faPython} title={"Python"} />
                    <LanguageSection icon={faPhp} title={"PHP"} />
                    <LanguageSection icon={faLaravel} title={"Laravel"} />
                    <LanguageSection />
                  </div>
                </Tab>

                <Tab eventKey="mobile" title={<span> Mobile</span>}>
                  <div className={styles.tabStyles}>
                    <LanguageSection icon={faApple} title={"iOS"} />
                    <LanguageSection icon={faReact} title={"React Native"} />
                  </div>
                </Tab>

                <Tab eventKey="database" title={<span> Database </span>}></Tab>
                <Tab
                  eventKey="eCommerce"
                  title={<span> CMS / eCommerce </span>}
                >
                  <div className={styles.tabStyles}>
                    <LanguageSection icon={faWordpress} title={"Wordpress"} />
                    <LanguageSection icon={faShopify} title={"Shopify"} />
                    <LanguageSection icon={faMagento} title={"Magneto"} />
                    <LanguageSection title={"Woo Commerce"} />
                  </div>
                </Tab>

                <Tab eventKey="cloud" title={<span> Cloud </span>}>
                  <div className={styles.tabStyles}>
                    <LanguageSection icon={faAws} title={"AWS"} />

                    <LanguageSection
                      icon={faDigitalOcean}
                      title={"Digital Cloud"}
                    />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className={styles.hiringSection}>
          <div className="container">
            <div className={`row ${styles.hiringPart}`}>
              <div className="col-lg-6">
                <h3>#Inficulture</h3>
                <div className={styles.subHeading}>
                  We value employee opinions
                  <br />
                  We create an innovative environment
                  <br />
                  We hire intellectually and wisely
                  <br />
                  We create dream maps
                  <br />
                  We ASK, We DONT guess
                  <br />
                  We nurture young leaders
                  <br />
                  We share responsibility and work load
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.wearehiring}>
                  <img
                    src="https://www.infilon.com/assets/images/we-are-hiring.png"
                    alt=""
                  />
                  <div className={styles.applynow}>
                    <h6>
                      We're growing, and looking for talented developers to join
                      our team.
                    </h6>
                    <a href="#">Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.counter}>
          <div className="container">
            <div className={styles.worksdoneContainer}>
              <div className="row">
                <h1 className={styles.headingContainer}>
                  A Global Leader in{" "}
                  <span>Next Generation Web & Mobile App </span>Development{" "}
                </h1>
              </div>
              <div className="row">
                <div className={styles.servicesContent}>
                  <div className="col-lg-4">
                    <div className={styles.Verticleline}></div>
                    <div className={styles.Contentworksdone}>
                      <p>
                        With over <span>13 years of experience</span>, Infilon a
                        Software Development Company in India has built web and
                        mobile apps for clients across the world.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-7 col-offset-1">
                    <div className={styles.ourmoto}>
                      We transform your ideas into creative Web & Mobile apps in
                      a way that it looks Good and delivers performance. Our
                      team of experts leads you in every step of the way, from
                      business model to implementation with a smooth transition.
                      We have made interesting footprints in the IT industry
                      with tremendous and strong client referrals.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className={styles.services}>
                  We provide your business with a wide range of services
                  including UI/UX, Web development, Custom software development,
                  Android and iOS Mobile application development, Internet of
                  Things (IoT), DevOps, Chatbot Development, End to End Product
                  development , E-commerce solutions, and much more to enhance
                  organizational functioning and extend the power to harness
                  identity and management of your Business.
                  <p>
                    As a leading Software Development company in India, we
                    understand the significance of systematic approach for
                    purpose in order to deliver the complex or simple project.
                    Our goal is to provide a Web and Mobile app that delivers
                    result. Our Senior Software developers employ agile scrum
                    &amp; Kanban to ensure on-time delivery, Continuous
                    evolution and No compromise over quality. Our Software
                    solutions are reliable and scalable for any Operating
                    system, Browsers and Devices.
                  </p>
                </div>
              </div>
              <div className="container">
                <div className={styles.GridcounterExperience}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={styles.gridItem}>
                        <h5 className={styles.ItemName}>
                          Years in <br />
                          Business
                        </h5>
                        <h1 className={styles.ItemCount}>
                          <CountUp enableScrollSpy={true} end={13} duration={2}>
                            13
                          </CountUp>
                          +
                        </h1>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={styles.gridItem}>
                        <h5 className={styles.ItemName}>
                          Projects
                          <br /> Delivered
                        </h5>
                        <h1 className={styles.ItemCount}>
                          <CountUp
                            enableScrollSpy={true}
                            end={650}
                            duration={2}
                          >
                            650
                          </CountUp>
                          +
                        </h1>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={styles.gridItem}>
                        <h5 className={styles.ItemName}>
                          Clients across
                          <br />
                          the Globe
                        </h5>
                        <h1 className={styles.ItemCount}>
                          <CountUp
                            enableScrollSpy={true}
                            end={300}
                            duration={2}
                          >
                            300
                          </CountUp>
                          +
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.textContainer}>
                  <h2> TESTINONAMlS</h2>
                  <h4>
                    {" "}
                    What do people praise about <span> Infilon?</span>{" "}
                  </h4>
                </div>
                <Carousel
                  arrows={false}
                  showDots={true}
                  responsive={responsiveTestimonials}
                  infinite={true}
                  ssr={true}
                >
                  {/* {Hometestimonial?.length &&
                    Hometestimonial.map((el) => {
                      return (
                        <div className={styles.carouselCardContainer}>
                          <div className="">
                            <div className={styles.profileImageContainer}>
                              <img
                                className="filter-none"
                                src={el?.image_url}
                                alt="profilePic"
                              />
                            </div>
                            <div>
                              <p> {el?.name} </p>
                              <span> {el?.desigination}</span>
                            </div>
                          </div>
                          <div className={styles.carouselInfo}>
                            <p>{el?.description}</p>
                          </div>
                        </div>
                      );
                    })} */}
                  <div className={styles.carouselCardContainer}>
                    <div className="">
                      <div className={styles.profileImageContainer}>
                        <img
                          className="filter-none"
                          src="https://www.infilon.com/assets/images/testimonial/Premila-Sharan.jpg"
                          alt="profilePic"
                        />
                      </div>
                      <div>
                        <p> Pramila sharan </p>
                        <span> Additional Director General, NIFT</span>
                      </div>
                    </div>
                    <div className={styles.carouselInfo}>
                      <p>
                        {" "}
                        The Admission Department of National Institute of
                        Fashion Technology (NIFT) Head office appreciates the
                        effective and timely contribution by the company to the
                        entire process making it a resounding success.
                      </p>
                    </div>
                  </div>
                  <div className={styles.carouselCardContainer}>
                    <div className="">
                      <div className={styles.profileImageContainer}>
                        <img
                          className="filter-none"
                          src="https://www.infilon.com/assets/images/testimonial/Professor-Errol-Dsouza-1.jpg"
                          alt="profilePic"
                        />
                      </div>
                      <div>
                        <p> Errol D'souza </p>
                        <span> IIM-A Director</span>
                      </div>
                    </div>
                    <div className={styles.carouselInfo}>
                      <p>
                        {" "}
                        The Quality standards, dedication and sincerity
                        demonstrated by the team at Infilon were of high
                        standard at we appreciate the same
                      </p>
                      &nbsp;
                    </div>
                  </div>
                  <div className={styles.carouselCardContainer}>
                    <div className="">
                      <div className={styles.profileImageContainer}>
                        <img
                          className="filter-none"
                          src="https://www.infilon.com/assets/images/testimonial/pramod.sharma.jpg"
                          alt="profilePic"
                        />
                      </div>
                      <div>
                        <p> Pramod Kumar Sharma </p>
                        <span> Program coordinator, Paryavan mitra</span>
                      </div>
                    </div>
                    <div className={styles.carouselInfo}>
                      <p>
                        {" "}
                        I would like to congratulate you and your team in
                        particular for successful development and implementation
                        of our website “paryavaran mitra” which is a program of
                        Centre for Environmental Education.
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.homeBlog}>
          <div className="container">
            <div className={styles.blog}>
              <div className={styles.heading}>
                <h2>LATEST BLOGS</h2>
                <h4>In Information & Technology World</h4>
              </div>
              <div className="row mt-4">
                {Homeblog?.length &&
                  Homeblog.map((el) => {
                    return (
                      <div className="col-md-4">
                        <BlogsHome
                          link="#"
                          img={el?.image_url}
                          title={el?.title}
                          categories={el?.highlight}
                          content={el?.description}
                        />
                      </div>
                    );
                  })}
              </div>
              <div className={styles.viewallblog}>
                <a href="#">View all Blogs!</a>
              </div>
            </div>
          </div>
        </div>
        <ExploreServices />
      </div>
    </div>
  );
}
