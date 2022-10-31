import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../../styles/components/BlogsHome.module.scss'

const BlogsHome = (props) => {
    return (
        <>
            <div className={styles.blog_reuse}>
                <a href={props.link}>
                    <div className={styles.blog_content}>
                        <div className={styles.image}>
                            <img src={props.img} alt="" />
                        </div>
                        <div className={styles.blog_description}>
                            <h6>{props.title}</h6>
                            <div className={styles.categories}>{props.categories}</div>
                            <div className={styles.text_desc}>{props.content}</div>
                        </div>
                        <div className={styles.readmore}>
                            <span>Read more </span>
                            <FontAwesomeIcon className={styles.rightArrow} icon={faArrowRight} />
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default BlogsHome
