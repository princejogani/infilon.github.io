import styles from "../styles/components/Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Tooltip from 'react-bootstrap/Tooltip';

const Footer = () => {

  return (
    <div className={styles.serviceContainer}>

      <div className={`container `}>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
            <div className='company-section-container'>
              <h2 className={styles.h2}> Comapany</h2>
              <ul className={styles.ulstyle}>
                <li><span> About Us </span></li>
                <li> <span> Careers </span> </li>
                <li> <span> Blog </span> </li>
                <li> <span> Employee Policy </span> </li>
                <li> <span> Contact Us </span> </li>
                <li><span>   Sitemap </span></li>
                <li> <span>  Life@infilon </span> </li>
              </ul>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
            <div className='company-section-container'>
              <h2 className={styles.h2}> Services </h2>
              <ul className={styles.ulstyle}>
                <li> <span>Mobile Development </span> </li>
                <li> <span> Web Development </span> </li>
                <li> <span>  Design </span> </li>
                <li> <span>   Marketing </span> </li>
                <li> <span> IoT </span></li>
                <li>  <span>  DevOps </span></li>
                <li>  <span>  AI & ML </span> </li>
              </ul>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
            <div className='company-section-container'>
              <h2 className={styles.h2}> Technology </h2>
              <ul className={styles.ulstyle}>
                <li> <span> React Native </span> </li>
                <li> <span> Flutter </span> </li>
                <li> <span> ReactJs </span> </li>
                <li> <span> Angular </span> </li>
                <li> <span> Node </span></li>
                <li> <span> PHP </span></li>
                <li> <span> Laravel </span> </li>
              </ul>
            </div>
          </div>

          <div className={`col-12 col-sm-12 col-md-4 col-lg-3  ${styles.ourLocation}`}>
            <div className='company-section-container'>
              <h2 className={styles.h2}> Our Location </h2>
              <p className={styles.address}>
                1101-1105, Shivalik Shilp 2, opp. Keshavbaug Party plot, Judges Bunglow Road, Satellite, Ahmedabad, Gujarat 380015
              </p>
            </div>
          </div>

          <div className={`col-12 col-sm-12 col-md-4 col-lg-2 `}>
            <div className='company-section-container'>
              <h2 className={styles.h2}> Have Questions? </h2>
              <ul className={styles.ulstyle}>
                <li>
                  <b> Sales </b>
                  <br />
                  <span> +91 81607 63895 </span>
                </li>
                <li>
                  <span> +91 99044 69794 </span>
                </li>
                <li>
                  <b > Support </b>
                  <br />
                  <span> +91 79 4009 1208 </span>
                </li>
                <li>
                  <span> +91 8000 230 350 </span>
                </li>

              </ul>
            </div>
          </div>

        </div>

        <hr />
        <div className={`row ${styles.footerInfo}`}>
          <div className="col-md-3 align-items-center ">
            <img className="w-75" src="https://www.infilon.com/assets/images/logo/logo-dark.png" alt="Infilon Technology" />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-8">
            <p className={styles.address}>
              Infilon Technologies is a reputed IT company in Ahmedabad, helping Startups and Fintech by providing result-oriented Web and Mobile application development services, and Cloud and DevOps consulting.
              We have a team of professional dedicated developers who have years of expertise and proficiency to create top-notch apps.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <ul className={styles.ulstyles}>
              <li key="twitter">
                <a href="https://www.facebook.com/infilon" target="_blank" />
                <FontAwesomeIcon size="1x" icon={faTwitter} />
                <span>Twitter</span>
              </li>
              <li key="facebook">
                <a href="https://www.facebook.com/infilon" target="_blank" />
                <FontAwesomeIcon size="1x" icon={faFacebook} />
                <span>Facebook</span>
              </li>
              <li key="instagram">
                <a href="https://www.facebook.com/infilon" target="_blank" />
                <FontAwesomeIcon size="1x" icon={faInstagram} />
                <span>Instagram</span>
              </li>
              <li key="linkedin">
                <a href="https://www.facebook.com/infilon" target="_blank" />
                <FontAwesomeIcon size="1x" icon={faLinkedin} />
                <span>Linkedin</span>
              </li>
            </ul>
          </div>

          <div className="col-md-8" />
        </div>

        <div className={`row ${styles.copyRightSection}`}>
          <div className="col-md-6">
            <img height="16px" src="https://banners.copyscape.com/img/copyscape-banner-white-200x25.png" />
            <img height="16px" src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=cc7e32e9-bf18-492c-b0c1-709d5d749453" />
          </div>

          <div className="col-md-6 text-end">
            <span> © 2022 Infilon Technologies Pvt. Ltd. All rights reserved. </span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;
