import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon
} from "react-share";
const SharePanel = ({slug}) => {
    return <div>
        <FacebookShareButton url={`dentalvip.com.ve/${slug}`} style={{ marginRight: '10px' }} >
            <FacebookIcon size={35} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={`dentalvip.com.ve/${slug}`} style={{ marginRight: '10px' }}>
            <TwitterIcon size={35} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={`dentalvip.com.ve/${slug}`} style={{ marginRight: '10px' }}>
            <LinkedinIcon size={35} round={true} />
        </LinkedinShareButton>
        <EmailShareButton url={`dentalvip.com.ve/${slug}`} >
            <EmailIcon size={35} round={true} />
        </EmailShareButton>
    </div>

}

export default SharePanel