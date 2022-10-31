import styles from "../../styles/components/FlutterBenefits.module.scss";

const FlutterBenefitsCard = (props) => {
  return (
    <div className={styles.FlutterBenefitsCard}>
      <a href="#">
        <div className={styles.imgbox}>
          <div>
            <img
              className="img-fulid"
              src="https://www.infilon.com/assets/images/icons/mitech-box-image-style-05-image-03-60x60.png"
              alt=""
            />
          </div>
          <div>
            <h3>{props.text}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FlutterBenefitsCard;
