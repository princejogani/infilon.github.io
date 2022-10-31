import dynamic from "next/dynamic";
import styles from "../../styles/pages/MagentoEcom.module.scss";
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
              Magento Development
              <br />
              The <span> Best Magento Development Company </span>in Ahmedabad
              India
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.Verticleline}></div>
              <div className={styles.ManagedIT}>
                <p>
                  There is no doubt that{" "}
                  <span>
                    Magento is a standout amongst the most popular e-commerce
                    platforms today.
                  </span>{" "}
                  If you are looking to significantly boost your sales, a
                  Magento online store is the primary thing you need.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className={styles.text}>
                <p>
                  Infilon Technologies is a web development company providing a
                  full scope of web design and Magento services. We are an
                  Ahmedabad based company that helps brands to succeed in the
                  field of e-commerce.
                </p>
              </div>
              <div className={styles.text}>
                <p>
                  Magento is surprisingly the most outstanding open source
                  E-commerce development platform. Being designed on MVC
                  architecture, the Magento platform is utilized for developing
                  scalable web stores.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="text">
                <br />
                <br />
                However, choosing the right e-commerce platform isn’t
                sufficient, you will likewise need to choose the right Magento
                development company to build up your dream website. And Infilon
                Technologies is here to assist you to do that.
                <br />
                <br />
                With our professional Magento services, we offer end-to-end
                online shopping portal solutions helping the small to large
                businesses to innovate, scale, and achieve remarkable growth for
                an e-commerce portal.
                <br />
                <br />
                At Infilon Technologies, we have the best of the industry
                Magento developers working with us. Our team of professional
                Magento Developers participates proactively in the complete
                development process of your Magento eCommerce store. Hire
                Magento Developer from us to power your store with improved
                features that boost sales and offer incredible customer
                experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.AboutusWrapperSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.LeftResourceBox}>
                <div>
                  <h2>
                    <span>Magento Development Services</span> We Offer
                  </h2>
                  <div>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>Magento Website Development</li>
                          <li>Magento Theme Development</li>
                          <li>Custom Magento Development</li>
                          <li>Custom E-commerce Store</li>
                          <li>Magento Store Development</li>
                          <li>Magento Module Development</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>Magento Plugin Development</li>
                          <li>Magento API Development</li>
                          <li> Magento Speed Optimization</li>
                          <li>Magento Shopping Cart Development</li>
                          <li>Responsive Magento Website</li>
                          <li>Magento Migration Solutions</li>
                          <li>Support &amp; Maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div>
                <img
                  src="https://www.infilon.com/assets/images/inner/Magento-Development-Services.png"
                  alt="Web Application Development"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inftech}>
        <div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className={styles.LeftResourceBox}>
                  <div >
                    <h2 >
                      <span>Why Choose </span>{" "}
                      Infilon Technologies?
                    </h2>
                    <div>
                      <img
                        src="https://www.infilon.com/assets/images/inner/ecomm.gif"
                        alt="Web Application Development"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.RightResourceBox}>
                  <div>
                    <div>
                      <ul>
                        <li>
                          Magento programmers with extraordinary professional
                          experience
                        </li>
                        <li>
                          Latest Technologies and High Standards
                        </li>
                        <li>Competitive pricing</li>
                        <li>Brilliant Magento themes</li>
                        <li>
                          The effective back-end for website control
                        </li>
                        <li>High work ethics</li>
                        <li>
                          Competent coders with result-driven strategies
                        </li>
                        <li>
                          Bonus add-one of customization and website testing
                        </li>
                        <li>24/7 availability for support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
