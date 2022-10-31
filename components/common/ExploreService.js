import styles from '../../styles/components/Explore.module.scss';

const ExploreServices = () => {

    return(
        <div className={styles.exploreHowServiceSection}>
            <div className="container">
                <div className="row align-items-center"> 
                    <div className="col-md-6">
                        <div className={styles.exploreServiceHeadingSection}>
                            <h2 className={styles.exploreServiceHeading}>
                                Explore how our services can be integrated with
                                <span> your business. </span>
                            </h2>
                            <p className={styles.exploreServicePara}> We’re just a Conversation away! </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <form>  
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="mt-2">
                                            <input  placeholder="Your Name *" type="text" className={`form-control ${styles.inputHolderStyle}`} /> 
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mt-2">
                                            <input placeholder="Your Email *" type="email" className="form-control" /> 
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mt-2">
                                            <input type="text" placeholder="Your Phone Number *" className="form-control" /> 
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
                                            <button className= {styles.scheduleConsultationBtn} width="100%"> Schedule Your Free Consultation </button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ExploreServices;