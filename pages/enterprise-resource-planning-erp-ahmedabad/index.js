import styles from "../../styles/pages/EnterpriceERP.module.scss";
import dynamic from "next/dynamic";
import ITserviceCard from "../../components/common/ITserviceCard";
import ExploreServices from "../../components/common/ExploreService";
import FlutterBenefitsCard from "../../components/common/FlutterBenefitsCard";
const NavbarHomeFile = dynamic(() => import("../../components/NavbarHome"), {
  ssr: false,
});

const index = () => {
  return (
    <>
      <NavbarHomeFile color="000" />
      <div className="container">
        <div className={styles.headingServices}>
          <h1 className={styles.heading}>
            ERP <span>Software Company</span>
          </h1>
          <h1 className={styles.heading}>
            Trusted ERP<span>software solutions</span>
          </h1>
          <p>
            Infilon Technologies is a professional IT company in Ahmedabad
            offers Internet Marketing in India including Search engine
            optimization, SEO is an art of creating a search engine friendly
            website. Search engine optimization services assist you to increase
            web traffic on your website’s potentiality.
          </p>
          <h1 className={styles.subheading}>
            Benefits Of <span>Flutter App Development</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FlutterBenefitsCard text="Sales and Marketing" />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className={styles.whatiserp}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-12 col-lg-12">
              <h2>
                <span>What </span> is ERP?
              </h2>
              <div className={styles.text}>
                Enterprise Resource Planning (ERP) is a way to integrate
                Enterprise data processing and resource management in a way it
                simplifies the business processing, in today’s competitive world
                Small to Large Enterprises has to manage the future market.
                Enterprise is a group of people with certain resources,
                Enterprise Resource Planning (ERP) is an integrated
                computer-based system used to manage internal and external
                resources, including tangible assets, financial resources,
                materials, and human resources.
              </div>
              <div className={styles.text}>
                Enterprise Resource Planning We provide ERP implementation
                solutions not only in ahmedabad but across the india. ERP
                solutions provided by Infilon technologies Pvt Ltd is well known
                for its unique customization and out of the box ERP software
                maintenance and support services. Enterprise Resource Planning
                generally depends on software selection and implementation
                phases with accurate knowledge of the project. ERP predicts and
                balances demands of the market and organization to solution of
                supply.
              </div>
              <div className={styles.text}>
                Its goals include high-levels of customer service, productivity,
                decision-making, coordinates sales, complete supply chain
                management, cost reduction solution, inventory turnover, and
                effective supply chain and e-commerce management. The purpose of
                the ERP system is to run the business efficiently and
                effectively in competitive challenging world. ERP (Enterprise
                Resource Planning)is the evolution of manufacturing requirement
                planning (MRP). Advantages of ERP implementation are business
                integration, flexibility, better analysis and planning, use of
                latest technology, improved efficiency, information integration,
                automated data exchange among other systems.
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreServices />
    </>
  );
};

export default index;
