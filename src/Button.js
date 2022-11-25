import React from 'react'
// import GoogleFontLoader from 'react-google-font-loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faHeart, faHeartBroken)
 
const Button = ({icon, onClick}) => {
    return (
        // <div className={`button ${icon}`}>
        //     <i className={`fas fa-3x fa-${icon}`}></i>
        // </div>
 
        <FontAwesomeIcon icon={icon} onClick={onClick}/>
 
        // <div className={icon} />
    )
}
 
export default Button
