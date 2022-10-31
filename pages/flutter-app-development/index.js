import dynamic from "next/dynamic";
import styles from "../../styles/pages/FlutterDev.module.scss";
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
              Flutter <span>App Development</span>
              <br />
              Flutter in <span> App Development Company </span>in Ahmedabad
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.Verticleline}></div>
              <div className={styles.ManagedIT}>
                <p>
                  Flutter is a flexible, animated, and innovative framework
                  utilized for{" "}
                  <span>
                    the development of the next-gen apps for platforms
                  </span>{" "}
                  like Android and iOS with a single codebase within record
                  time.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.text}>
                <p>
                  The core concepts for Flutter are connecting and drawing.
                  Flutter can be appropriately observed in applications that
                  make use of the Camera, Geolocation, Network, and 3rd party
                  SDKs. All of these attributes to the latest standards in
                  cross-platform developments which can be experienced utilizing
                  the flutter application development framework.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={styles.text}>
                At Infilon Technologies, as a famous Flutter App Development
                Company, we have a professional team of Flutter developers with
                experience in making outstanding and practically rich
                applications.
                <br />
                <br />
                We are a leading Flutter App Development Company in Ahmedabad
                India to enthusiastically develop amazing and functional mobile
                applications, customized to meet the needs of clients.
                Notwithstanding the latest existence of flutter compared to
                other frameworks, we have still managed to get familiar with its
                styles and methods of functioning by making us a standout
                amongst the best flutter app development company.
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
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
                  <div>
                    <h2>
                      <span>Why Choose </span> Infilon Technologies?
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
                        <li>Latest Technologies and High Standards</li>
                        <li>Competitive pricing</li>
                        <li>Brilliant Magento themes</li>
                        <li>The effective back-end for website control</li>
                        <li>High work ethics</li>
                        <li>Competent coders with result-driven strategies</li>
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
