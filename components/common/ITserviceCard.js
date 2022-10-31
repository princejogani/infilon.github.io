import React from 'react'
import styles from '../../styles/components/ITserviceCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ITserviceCard = (props) => {
    return (
        <>
            <div className={styles.ItServiceCardConatainer}>
                <div className={styles.imagebox}>
                    <img className={styles.withouthover} src={props.withouthover} />
                    <img className={styles.withhover} src={props.withhover} />
                </div>
                <div className={styles.card_content}>
                    <h5>{props.title}</h5>
                    <p className={styles.cardContainerDescription}>
                        {props.description}
                    </p>
                    <div className={styles.cardContainerLink}>
                        <a href={props.link}>
                            {props.linkname} &nbsp;
                            <FontAwesomeIcon className={styles.fontIconStyle} icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ITserviceCard
