import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import useScrollListener from '../hooks/useScrollListner'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
    const scroll = useScrollListener();
    useEffect(() => {
        if (scroll.y > 150 && scroll.y - scroll.lastY < 0) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [scroll.y, scroll.lastY])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {
                visible ?
                    <>
                        <div className="scrollTop" onClick={scrollToTop}>
                            <FontAwesomeIcon className='without-hover-upicon' icon={faArrowUp} />
                            <FontAwesomeIcon className='hover-upicon' icon={faArrowUp} />
                        </div>
                        {/* <div className="scrollTop" onClick={scrollToTop}>
                        </div> */}
                    </>
                    :
                    ''
            }
        </>
    );
}

export default ScrollButton;
