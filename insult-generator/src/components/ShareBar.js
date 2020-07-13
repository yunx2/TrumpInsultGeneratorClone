import React from 'react'
import {
EmailShareButton,
FacebookShareButton,
LinkedinShareButton,
PinterestShareButton,
TwitterShareButton,
WhatsappShareButton
} from 'react-share'

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

const Sharebar = () => {
  return (
    <div>
      <EmailShareButton url={window.location}><EmailIcon /></EmailShareButton>
      <FacebookShareButton url={window.location}><FacebookIcon /></FacebookShareButton> 
      <LinkedinShareButton url={window.location}><LinkedinIcon /></LinkedinShareButton>
      <PinterestShareButton url={window.location}><PinterestIcon /></PinterestShareButton>
      <TwitterShareButton url={window.location}><TwitterIcon /></TwitterShareButton>
      <WhatsappShareButton url={window.location}><WhatsappIcon /></WhatsappShareButton>
    </div>
  )
}

export default Sharebar