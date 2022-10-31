import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/components/Header.module.scss"

const Header = () => {
  return (
    <div className={`${styles.headerSection} d-none d-lg-block`}>
      <div className='container'>
        <div className='row'>
          {/* <div className='col-12 d-flex justify-content-between align-items-center'> */}
          <div className={styles.headerInteriorSection}>
            <div>
              <h2> A Leading Software Development Company</h2>
            </div>
            <div className='mt-2'>
              <p> <FontAwesomeIcon color="#fff" icon={faPhone} /> +91 81607 63895 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header