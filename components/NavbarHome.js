import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/components/Navbar.module.scss'
import header from '../styles/components/Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMoon, faSun, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import useScrollListener from '../hooks/useScrollListner'
import Link from 'next/link';
import Head from 'next/head';;
import Accordion from 'react-bootstrap/Accordion';

const NavbarHomeFile = ({ color, filter }) => {
    const scroll = useScrollListener();
    const [modebtn, setModebtn] = useState(faMoon);

    useEffect(() => {
        if (scroll.y > 80) {
            document.getElementById('nav-navweb').classList.add(styles.sticky_top_nav)
        } else {
            document.getElementById('nav-navweb').classList.remove(styles.sticky_top_nav)
        }
        if (scroll.y > 45) {
            document.getElementById('nav-navmobile').classList.add(styles.sticky_top_nav)
        } else {
            document.getElementById('nav-navmobile').classList.remove(styles.sticky_top_nav)
        }
    }, [scroll.y])


    useEffect(() => {
        const mode = window.localStorage.getItem('mode')
        if (mode === 'dark') {
            setModebtn(faSun)
            document.documentElement.classList.add('dark-mode');
            window.localStorage.setItem('mode', 'dark')
        }
    }, [])

    const darkmode = () => {
        if (document.documentElement.classList.contains('dark-mode')) {
            document.documentElement.classList.remove('dark-mode');
            setModebtn(faMoon)
            window.localStorage.setItem('mode', 'light')
        } else {
            document.documentElement.classList.add('dark-mode');
            setModebtn(faSun)
            window.localStorage.setItem('mode', 'dark')
        }
    }

    return (
        <>
            <Head>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </Head>
            <div className={`${header.header} ${filter === "none" ? 'filter-none' : ''} ${color === "000" ? header.black : header.white} d-none d-lg-block`}>
                <div className="container">
                    <div className='row'>
                        <div className='col-8'>
                            <span className={header.HeaderLeft}>A Leading Software Development Company</span>
                        </div>
                        <div className='col-4 text-end'>
                            <a href="tel:918160763895" className={header.HeaderRight}>

                                <span className="text-end">
                                    <strong>+91 81607 63895 </strong>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <Navbar id="nav-navweb" className={`${styles.Nav} ${color === "000" ? styles.black : styles.white}`} key={'xl'} bg="transperent" expand={'xl'} >
                    <Container fluid className={`${styles.fluid}`}>
                        <Navbar.Brand href="#">
                            <div className={`navbarBrand ${styles.navbarBrand}`}>
                                {document.documentElement.classList.contains('dark-mode') ?
                                    <>
                                        <Link href="/">
                                            <img src="https://www.infilon.com/assets/images/logo/logo-dark.png" alt="" />
                                        </Link>
                                        <Link href="/">
                                            <img src="https://www.infilon.com/assets/images/logo/logo-dark.png" alt="" />
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link href="/">
                                            <img src="https://www.infilon.com/assets/images/logo/light-logo.png" alt="" />
                                        </Link>
                                        <Link href="/">
                                            <img src="https://www.infilon.com/assets/images/logo/logo-dark.png" alt="" />
                                        </Link>
                                    </>
                                }
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
                                <Nav className="justify-content-end flex-grow-1">
                                    <ul className="navbar-nav ml-auto nav-fill">

                                        <li className={`nav-item `}>
                                            <Link href="/who-we-are/" className={`nav-link`}>
                                                <a className={styles.dropdown_toggle_about}>About</a>
                                            </Link>
                                        </li>

                                        <li className={`nav-item dropdown ${styles.megamenudropdown}`}>
                                            <Link href="/what-we-offer">
                                                <a className={`nav-link dropdown-toggle ${styles.dropdown_toggle}`} id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Services
                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                </a>
                                            </Link>

                                            <div class={`dropdown-menu dropdown-menu-right ${styles.dropdown_menu}`}>
                                                <div class={styles.megamenu}>
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <h2>Mobile Development</h2>
                                                            <ul>
                                                                <li><a href="https://www.infilon.com/android-application-development/"><span>Android Apps</span></a></li>
                                                                <li><a href="https://www.infilon.com/iphone-app-development/"><span>iOS Apps</span></a></li>
                                                                <li><a href="https://www.infilon.com/react-native-development/"><span>React Native</span></a></li>
                                                                <li><a href="https://www.infilon.com/flutter-app-development/"><span>Flutter</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <h2>Web Development</h2>
                                                            <ul>
                                                                <li><a href="https://www.infilon.com/enterprise-resource-planning-erp-ahmedabad/"><span>Enterprise Solutions</span></a></li>
                                                                <li><a href="#"><span>eCommerce</span></a></li>
                                                                <li><a href="#"><span>CMS</span></a></li>
                                                                <li><a href="#"><span>Custom Development</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <h2>Design</h2>
                                                            <ul>
                                                                <li><a href="#"><span>UI / UX Design</span></a></li>
                                                                <li><a href="#"><span>Wireframe</span></a></li>
                                                                <li><Link href="/responsive-website-design-india"><a><span>Responsive Web</span></a></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <h2>Marketing</h2>
                                                            <ul>
                                                                <li><a href="https://www.infilon.com/search-engine-optimization-seo-ahmedabad/"><span>SEO</span></a></li>
                                                                <li><a href="#"><span>PPC Campaigns</span></a></li>
                                                                <li><a href="#"><span>Social Media</span></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-md-3">
                                                            <h2>IoT</h2>
                                                            <ul>
                                                                <li><a href="#"><span>Industrial Automation</span></a></li>
                                                                <li><a href="#"><span>Home Automation</span></a></li>
                                                                <li><a href="#"><span>Connected Devices</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <h2>DevOps</h2>
                                                            <ul>
                                                                <li><a href="#"><span>Consulting</span></a></li>
                                                                <li><a href="#"><span>Setup</span></a></li>
                                                                <li><a href="#"><span>Solutions</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <h2>AI &amp; ML</h2>
                                                            <ul>
                                                                <li><a href="#"><span>Artificial Intelligence</span></a></li>
                                                                <li><a href="https://www.infilon.com/chatbot-development/"><span>Chatbot Development</span></a></li>
                                                                <li><a href="#"><span>Deep Learning</span></a></li>
                                                                <li><a href="#"><span>Machine Learning</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <h2>QA</h2>
                                                            <ul>
                                                                <li><a href="#"><span>Manual QA Testing</span></a></li>
                                                                <li><a href="#"><span>Web &amp; Mobile App Testing</span></a></li>
                                                                <li><a href="#"><span>Performance Testing</span></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class={`row ${styles.support}`}>
                                                        <div class="col-md-3">
                                                            <a href="tel:918160763895">
                                                                <img src="https://www.infilon.com/assets/images/icons/sales.png" alt="" />
                                                                <span><b>Sales</b>+91 81607 63895</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <a href="https://api.whatsapp.com/send?phone=919904469794" target="_blank">
                                                                <img src="https://www.infilon.com/assets/images/icons/whatsapp.png" alt="" />
                                                                <span><b>Whatsapp</b>+91 99044 69794</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <a href="mailto:info@infilon.com">
                                                                <img src="https://www.infilon.com/assets/images/icons/gmail.png" alt="" />
                                                                <span><b>Email</b>info@infilon.com</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <a href="tel:918000230350">
                                                                <img src="https://www.infilon.com/assets/images/icons/support.png" alt="" />
                                                                <span><b>Support</b>+91 8000 230 350</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`nav-item dropdown ${styles.megamenudropdown}`}>
                                            <Link href="/">
                                                <a className={`nav-link dropdown-toggle ${styles.dropdown_toggle}`} id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Technology
                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                </a>
                                            </Link>

                                            <div className={`dropdown-menu dropdown-menu-right ${styles.dropdown_menu}`}>
                                                <div className={styles.megamenu}>
                                                    <div class="row">
                                                        <div class="col-md-9">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h2>Mobile</h2>
                                                                    <ul>
                                                                        <li><a href="https://www.infilon.com/flutter-app-development/"><span>Flutter</span></a></li>
                                                                        <li><a href="https://www.infilon.com/react-native-development/"><span>React Native</span></a></li>
                                                                        <li><a href="https://www.infilon.com/android-application-development/"><span>Android</span></a></li>
                                                                        <li><a href="https://www.infilon.com/iphone-app-development/"><span>iOS</span></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h2>Backend</h2>
                                                                    <ul>
                                                                        <li><a href="https://www.infilon.com/golang-development/"><span>Golang </span></a></li>
                                                                        <li><a href="#"><span>Node</span></a></li>
                                                                        <li><a href="#"><span>Python</span></a></li>
                                                                        <li><a href="https://www.infilon.com/php-development/"><span>PHP</span></a></li>
                                                                        <li><a href="#"><span>.NET</span></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h2>Front End</h2>
                                                                    <ul>
                                                                        <li><a href="#"><span>Angular</span></a></li>
                                                                        <li><a href="https://www.infilon.com/react-js-development-company/"><span>ReactJs</span></a></li>
                                                                        <li><a href="#"><span>Vue.js</span></a></li>
                                                                        <li><a href="#"><span>HTML5 / JavaScript</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-4">
                                                                <div class="col-md-4">
                                                                    <h2>Infra and DevOps</h2>
                                                                    <ul>
                                                                        <li><a href="#"><span>AWS</span></a></li>
                                                                        <li><a href="#"><span>Google Cloud</span></a></li>
                                                                        <li><a href="#"><span>Azure</span></a></li>
                                                                        <li><a href="#"><span>DigitalOcean</span></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h2>Database</h2>
                                                                    <ul>
                                                                        <li><a href="#"><span>MySQL</span></a></li>
                                                                        <li><a href="#"><span>PostgreSQL</span></a></li>
                                                                        <li><a href="#"><span>Firebase</span></a></li>
                                                                        <li><a href="#"><span>MongoDB</span></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h2>CMS</h2>
                                                                    <ul>
                                                                        <li><a href="https://www.infilon.com/magento-ecommerce-development/"><span>Magento</span></a></li>
                                                                        <li><a href="#"><span>Shopify</span></a></li>
                                                                        <li><a href="https://www.infilon.com/wordpress-development/"><span>WordPress</span></a></li>
                                                                        <li><a href="#"><span>WooCommerce</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class={`col-md-3 ${styles.getstarted}`}>
                                                            <p>Ready<br />to get <br /> started?</p>
                                                            <Link href="/contact-us" class="btn"><a>Get Quote <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                                                        </div>
                                                    </div>
                                                    <div className={`row ${styles.support}`}>
                                                        <div class="col-md-3">
                                                            <a href="tel:918160763895">
                                                                <img src="https://www.infilon.com/assets/images/icons/sales.png" alt="" />
                                                                <span><b>Sales</b>+91 81607 63895</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <a href="https://api.whatsapp.com/send?phone=919904469794" target="_blank">
                                                                <img src="https://www.infilon.com/assets/images/icons/whatsapp.png" alt="" />
                                                                <span><b>Whatsapp</b>+91 99044 69794</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <a href="mailto:info@infilon.com">
                                                                <img src="https://www.infilon.com/assets/images/icons/gmail.png" alt="" />
                                                                <span><b>Email</b>info@infilon.com</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <a href="tel:918000230350">
                                                                <img src="https://www.infilon.com/assets/images/icons/support.png" alt="" />
                                                                <span><b>Support</b>+91 8000 230 350</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`nav-item dropdown ${styles.megamenudropdown}`}>
                                            <Link href="/">
                                                <a className={`nav-link dropdown-toggle ${styles.dropdown_toggle}`} id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Hire a Team
                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                </a>
                                            </Link>

                                            <div className={`dropdown-menu dropdown-menu-right ${styles.dropdown_menu}`} aria-labelledby="servicesDropdown">
                                                <div className={styles.megamenu}>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <h2>Hire Mobile App Developers</h2>
                                                            <ul>
                                                                <li><a href="#"><span>Hire iPhone App Developers</span></a></li>
                                                                <li><a href="#"><span>Hire Android App Developers</span></a></li>
                                                                <li><Link href="/hire-flutter-app-developers"><span>Hire Flutter Developers</span></Link></li>
                                                                <li><a href="#"><span>Hire React Native Developers</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h2>Hire Front-end Developers</h2>
                                                            <ul>
                                                                <li><a href="#"><span>Hire ReactJS Developers</span></a></li>
                                                                <li><a href="#"><span>Hire Vue.js Developers</span></a></li>
                                                                <li><a href="#"><span>Hire AngularJS Developers</span></a></li>
                                                                <li><a href="#"><span>Hire Full Stack Developers</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <h2>Hire Back-end Developers</h2>
                                                            <ul>
                                                                <li><a href="#"><span>Hire Python Developers</span></a></li>
                                                                <li><a href="#"><span>Hire Node.js Developers</span></a></li>
                                                                <li><a href="/php-developer"><span>Hire PHP Developers</span></a></li>
                                                                <li><a href="/asp-net-developer"><span>Hire .NET Developers</span></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className={`row ${styles.support}`}>
                                                        <div className="col-md-3">
                                                            <a href="tel:918160763895">
                                                                <img src="https://www.infilon.com/assets/images/icons/sales.png" alt="" />
                                                                <span><b>Sales</b>+91 81607 63895</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <a href="https://api.whatsapp.com/send?phone=919904469794" target="_blank">
                                                                <img src="https://www.infilon.com/assets/images/icons/whatsapp.png" alt="" />
                                                                <span><b>Whatsapp</b>+91 99044 69794</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <a href="mailto:info@infilon.com">
                                                                <img src="https://www.infilon.com/assets/images/icons/gmail.png" alt="" />
                                                                <span><b>Email</b>info@infilon.com</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <a href="tel:918000230350">
                                                                <img src="https://www.infilon.com/assets/images/icons/support.png" alt="" />
                                                                <span><b>Support</b>+91 8000 230 350</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item ">
                                            <Link href="/careers">
                                                <a className={`nav-link ${styles.dropdown_toggle} ${styles.hire_tooltip}`}>
                                                    <span>
                                                        Careers
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/blogs">
                                                <a className={`nav-link ${styles.dropdown_toggle} `}>
                                                    Blog
                                                </a>
                                            </a>
                                        </li>
                                    </ul>
                                    <Button className={styles.navContactUs}>
                                        <Link href="/contact-us">
                                            <span>
                                                Contact Us
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </Link>
                                    </Button>
                                    <span onClick={() => darkmode()} className={`${styles.nav_modebtn} nav_modebtn nav-item pl-4`}>
                                        <FontAwesomeIcon icon={modebtn} />
                                    </span>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>


            <div className="container">
                <Navbar id="nav-navmobile" className={`${styles.NavWeb} ${color === "000" ? styles.black : styles.white}`} key={'xl'} bg="transperent" expand={'xl'} >
                    <Container fluid className={`${styles.fluid}`}>
                        <Navbar.Brand href="#">
                            <div className={`navbarBrand ${styles.navbarBrand}`}>
                                {document.documentElement.classList.contains('dark-mode') ?
                                    <>
                                        <Link href="/">
                                            <img src="https://www.infilon.com/assets/images/logo/logo-dark.png" alt="" />
                                        </Link>
                                        <Link href="/">
                                            <img src="https://www.infilon.com/assets/images/logo/logo-dark.png" alt="" />
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link href="/">
                                            <img src="https://www.infilon.com/assets/images/logo/light-logo.png" alt="" />
                                        </Link>
                                        <Link href="/">
                                            <img src="https://www.infilon.com/assets/images/logo/logo-dark.png" alt="" />
                                        </Link>
                                    </>
                                }
                            </div>
                        </Navbar.Brand>
                        <div className={`btnMenuModeglobe ${styles.btnMenuMode}`}>
                            <span className="" onClick={() => darkmode()}>
                                <FontAwesomeIcon icon={modebtn} />
                            </span>
                            <Navbar.Toggle id="nav-toggler" className='' aria-controls={`offcanvasNavbar-expand-${'xl'}`}>
                                <span />
                                <span />
                                <span />
                            </Navbar.Toggle>
                        </div>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${'xl'}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${'xl'}`}
                            placement="end"
                            className={styles.OffcanvasMenu}
                        >
                            <Offcanvas.Header className={styles.OffcanvasHeader} closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xl'}`}>
                                    <Link href="/">
                                        <a>
                                            <img className={styles.OffcanvasBrandImg} src="https://www.infilon.com/assets/images/logo/logo-dark.png" alt="" />
                                        </a>
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className={styles.OffcanvasBody}>
                                <div className={`${styles.nav_navmobile} nav_navmobile`}>
                                    <Link href="/who-we-are">
                                        <div className={styles.menu_link}>
                                            <a>
                                                About
                                            </a>
                                        </div>
                                    </Link>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Services</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Technology</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Hire a Team</Accordion.Header>
                                            <Accordion.Body className='lastchild-border-none'>
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Hire Mobile App Developers</Accordion.Header>
                                                        <Accordion.Body className='lastchild-border-none'>
                                                            <Link href="#">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire iPhone App Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="#">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire Android App Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="/hire-flutter-app-developers">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire Flutter Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="#">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire React Native Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>Hire Front-end Developers</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Link href="#">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire ReactJS Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="#">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire Vue.js Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="/hire-flutter-app-developers">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire AngularJS Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="#">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire Full Stack Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header>Hire Back-end Developers</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Link href="#">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire Python Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="#">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire Node.js Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="/php-developer">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire PHP Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                            <Link href="/asp-net-developer">
                                                                <div className={`${styles.menu_link} menu_link`}>
                                                                    <a>
                                                                        Hire .NET Developers
                                                                    </a>
                                                                </div>
                                                            </Link>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Link href="/career">
                                        <div className={`${styles.menu_link} ${styles.hire_toggle}`}>
                                            <a>
                                                Career
                                            </a>
                                        </div>
                                    </Link>
                                    <Link href="/blogs">
                                        <div className={styles.menu_link}>
                                            <a>
                                                Blog
                                            </a>
                                        </div>
                                    </Link>
                                    <Link href="/contact-us">
                                        <a>
                                            <div className={styles.btnContact}>
                                                <button>
                                                    Contact Us
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </button>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}



export default NavbarHomeFile
