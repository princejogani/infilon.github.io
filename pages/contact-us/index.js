import ExploreServices from '../../components/common/ExploreService'
import dynamic from 'next/dynamic';
import styles from '../../styles/pages/ContactUS.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faSkype, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const NavbarHomeFile = dynamic(() => import('../../components/NavbarHome'), { ssr: false });

const index = () => {
    return (
        <>
            <NavbarHomeFile color="000" />
            <div className='container'>
                <div className={styles.SectionHeading}>
                    <h1 className={styles.header}>Contact Us</h1>
                    <p className={styles.companyname}>Infilon Technologies Pvt. Ltd.</p>
                </div>
                <div className={styles.Contactuscontainer}>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-lg-6'>

                            <div className={styles.contactuswrap}>
                                <div className={styles.Verticleline}></div>
                                <div className={styles.Leftheading}>
                                    To make requests for<br />
                                    further information,<br />
                                    <span>contact us</span> via our social channels.
                                </div>
                                <div className={styles.subheading}>
                                    <p>We just need a couple of hours!
                                        <br />No more than 2 working days since receiving your issue ticket.</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6 col-lg-6'>
                            <div className={styles.formContainer}>
                                <form className={`contactInput`}>
                                    <div className="container">
                                        <div className={`row`}>
                                            <div className="col-6">
                                                <div className="mt-2">
                                                    <input placeholder="Your Name *" type="text" className={`form-control ${styles.inputHolderStyle}`} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mt-2">
                                                    <input placeholder="Your Email *" type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mt-2">
                                                    <input placeholder="Your Subject *" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-md-12">
                                                <div className="mt-3">
                                                    <textarea placeholder="Please describe what you need." rows={6} className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-md-11 col-lg-9 col-xl-6">
                                                <div className="mt-4">
                                                    <button className={styles.sendMessageBtn} width="100%"> Send Message </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.MapContainer}>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-6'>
                            <div className={styles.Map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.85682014613!2d72.52728671489075!3d23.029028784949716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f466a8194f%3A0xbdcde14274fb0096!2sInfilon%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1659072421857!5m2!1sen!2sin" width="100%" height="500" style={{ borderRadius: '10px', boxShadow: ' 0px 2px 2px 1px #ccc' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className={styles.AddressContainer}>
                                <div className={styles.Name}>
                                    <h1 className={styles.heading}>Infilon Technologies Pvt. Ltd.</h1>
                                    <ul className={styles.listAddress}>
                                        <li>
                                            1101-1105, Shivalik Shilp 2, opp. Keshavbaug Party plot, Judges Bunglow Road, Satellite, Ahmedabad, Gujarat 380015
                                        </li>
                                        <li>
                                            <span> <a href="mailto:info@infilon.com" className={styles.mailAddress}>info@infilon.com</a></span>
                                        </li>
                                        <li>
                                            <span><a href="tel:+91-81607 63895" className={styles.contactNumber}>+91 81607 63895</a></span>
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles.SocialList}>
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
                                        <li key="linkedin">
                                            <a href="https://www.facebook.com/infilon" target="_blank" />
                                            <FontAwesomeIcon size="1x" icon={faSkype} />
                                            <span>Linkedin</span>
                                        </li>
                                        <li key="linkedin">
                                            <a href="https://www.facebook.com/infilon" target="_blank" />
                                            <FontAwesomeIcon size="1x" icon={faWhatsapp} />
                                            <span>Linkedin</span>
                                        </li>
                                    </ul>


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

