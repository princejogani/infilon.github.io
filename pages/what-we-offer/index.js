import styles from '../../styles/pages/WhatWeOffer.module.scss';
import dynamic from 'next/dynamic';
import ITserviceCard from '../../components/common/ITserviceCard';
import ExploreServices from '../../components/common/ExploreService';
const NavbarHomeFile = dynamic(() => import('../../components/NavbarHome'), { ssr: false });

const index = () => {
    return (
        <>
            <NavbarHomeFile color="000" />
            <div className='container'>
                <div className={styles.headingServices}>
                    <h1 className={styles.heading}>What <span>We Offer</span></h1>
                    <p>
                        Infilon Technologies is a professional IT company in Ahmedabad offers Internet Marketing in India including Search engine optimization, SEO is an art of creating a search engine friendly website. Search engine optimization services assist you to increase web traffic on your website’s potentiality.
                    </p>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <ITserviceCard
                            withouthover="https://www.infilon.com/assets/images/icons/what-offer-icon/icon1.png"
                            withhover="https://www.infilon.com/assets/images/icons/what-offer-icon/wicon1.png"
                            description="We are one of the pioneered Professional IT Company located in Ahmedabad, India. We believe that success of any project through knowledge of the latest technologies, expert management, effective communication and full-cycle quality assurance. The significance of integrating the latest technology development platform with an attractive usable design and navigation puts Infilon Technologies Pvt Ltd apart from a regular IT company in India."
                            link="#"
                            linkname="Discover now"
                        />
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <ITserviceCard
                            withouthover="https://www.infilon.com/assets/images/icons/what-offer-icon/icon2.png"
                            withhover="https://www.infilon.com/assets/images/icons/what-offer-icon/wicon2.png"

                            description="The Company has been the prime example of aesthetic and custom web design services. Infilon Technologies a leading software company in India, combine skill, knowledge, talent and experience to produce cutting edge customized solutions that are suitable for most people and can start from just startup, and building up to more complex solutions."
                            link="#"
                            linkname="Discover now"
                        />
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <ITserviceCard
                            withouthover="https://www.infilon.com/assets/images/icons/what-offer-icon/icon3.png"
                            withhover="https://www.infilon.com/assets/images/icons/what-offer-icon/wicon3.png"
                            title="Custom Software Development"
                            description="We offer customized software solution for small scale to medium scale industry companies in India. Software Application featuring need-based and great-value functionality help improve the bottom line by increasing productivity, enhancing information & business process transparency and escalating business system efficiency. Our company has efficiency and industry reach to meet each individual company or business needs."
                            link="#"
                            linkname="Discover now"
                        />
                    </div>
                </div>
            </div>
            <ExploreServices />
        </>
    );
}

export default index;
