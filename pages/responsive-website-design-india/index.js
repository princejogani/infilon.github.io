import dynamic from "next/dynamic";
import styles from "../../styles/pages/ResponsiveWebDesignIndia.module.scss";
const NavbarHomeFile = dynamic(() => import("../../components/NavbarHome"), {
    ssr: false,
});

const index = () => {
    return (
        <>
            <NavbarHomeFile color="000" />
            <div className="container">
                <div className={styles.SectionHeadingContainer}>
                    <div className={styles.Headingwrapper}>
                        <h1>
                            Responsive <span> Website Design</span>
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.Verticleline}></div>
                            <div className={styles.ManagedIT}>
                                <p>
                                    Infilon, An Indian company provides highly cost effective and
                                    attention-driven{" "}
                                    <span>Responsive Website Design & Development service</span>{" "}
                                    for valued clients all across the world with commitment and
                                    efficient professional work.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className={styles.text}>
                                <p>
                                    In Modern and technology stretched world Website visitors are
                                    not limited to desktop or laptop, As per statistics more and
                                    more people around the world as well as in INDIA utilizes
                                    mobile browsers to visit or search on mobiles. Responsive
                                    website technology works like Liquid fluids, it adjusts the
                                    width and resolutions as per browser width. We are specialized
                                    in creating responsive & unique web presence for businesses
                                    and organizations. With the help of our experienced and
                                    qualified staff we have build list of happy customers.
                                </p>
                            </div>
                            <div className={styles.ButtonContainer}>
                                <button className={styles.btnQuote}>
                                    Get a free Quote now!
                                </button>
                                <button className={styles.ContactUs}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.AboutusWrapperSection}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className={styles.LeftResourceBox}>
                                <h1>
                                    <span> Web Application</span> Development
                                </h1>
                                <p>
                                    A web application is an application that is accessed via a web
                                    browser over a network such as the Internet or an intranet.
                                    Web applications are popular because it uses web browser as a
                                    client .It can be as simple as a message board or a guest
                                    sign-in book on a website, or as complex as a word processor
                                    or a spreadsheet.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2">
                            <div className={styles.ImageFluid}>
                                <img src="https://www.infilon.com/assets/images/inner/WebApplicationDevelopment.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.DemoImageSectionwrapper}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.LeftResourceBox}>
                                <h3>
                                    <span>Content Management System </span>(CMS)
                                </h3>
                                <img src="https://www.infilon.com/assets/images/inner/ecomm.gif"></img>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className={styles.RightResourceBox}>
                                <div className={styles.FirstText}>
                                    Our, Content Management System (CMS)Development solutions that
                                    can be used to build applications like Corporate sites, Micro
                                    sites, Web Portals, Shopping carts, Discussion boards,
                                    Intranets and Extranets. We have served numerous clients with
                                    our customized Content Management System Web Development
                                    solution that has helped them to publish large quantities of
                                    content at multiple locations on continuous basis.
                                </div>
                                <div className={styles.SecondText}>
                                    Content updates on websites are very easy task with our CMS
                                    Management applications. We offer Custom CMS development
                                    packages starts with lowest in the market. Get started with
                                    our basic package of Content Management system (CMS) to make
                                    your static website live for its content management. This will
                                    interact more visitors on website, because it has fresh
                                    contents every time they visit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.EcommerceResourceWrapper}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className={styles.LeftResourceBox}>
                                <h1>
                                    <span>E-Commerce </span>Development
                                </h1>
                                <p>
                                    Infilon Technologies Pvt. Ltd., as a leading E-commerce
                                    application development company in India, is counted for its
                                    capability to deliver Ecommerce development service for all
                                    kinds of business requirements. Ecommerce website has become
                                    an indispensible device for every enterprise in order to have
                                    completely controllable online presence and get tuned with
                                    changing scenario of global markets. We offer budget friendly
                                    Ecommerce solutions that can be availed in a wide range of
                                    options.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2">
                            <div className={styles.RightResourceBox}>
                                <img src="https://www.infilon.com/assets/images/inner/DeviceMacbookAir.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WebmaintainanceResourceWrapper}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.LeftBox}>
                                <img src="https://www.infilon.com/assets/images/inner/web-app.gif"></img>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.RightBox}>
                                <p>
                                    To keep website up to date website maintenance support is
                                    must. Some sites need updates everyday while others only
                                    require occasional maintenance. Web Maintenance Services by
                                    Infilon Technologies can substantially reduce your costs by
                                    eliminating the need to hire full time website design
                                    professionals or web content programmers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;

