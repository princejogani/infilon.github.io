import styles from '../../styles/components/Language.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LanguageSection = (props) => {

    return (
        <div key={JSON.stringify(props)} className={styles.languageContainer}>
            <FontAwesomeIcon size="4x" color="#21376D" icon={props.icon} />
            <img src={props.img} alt="" />
            <p className={styles.title}>  {props.title} </p>
        </div>

    )
}

export default LanguageSection;