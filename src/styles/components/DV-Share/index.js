import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
const SharePanel = ({slug}) => {
    return <div className="share-panel">
        <FacebookShareButton url={`dentalvip.com.ve${slug}`} style={{ marginRight: '10px' }} >
            <FacebookIcon size={36} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={`dentalvip.com.ve${slug}`} style={{ marginRight: '10px' }}>
            <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={`dentalvip.com.ve${slug}`} style={{ marginRight: '10px' }}>
            <LinkedinIcon size={36} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton url={`dentalvip.com.ve${slug}`} style={{ marginRight: '10px' }}>
            <WhatsappIcon size={36} round={true} />
        </WhatsappShareButton>
        <EmailShareButton url={`dentalvip.com.ve${slug}`} >
            <EmailIcon size={36} round={true} />
        </EmailShareButton>
    </div>

}

export default SharePanel