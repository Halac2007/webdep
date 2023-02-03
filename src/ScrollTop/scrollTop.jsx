import React from 'react'
import BackToTop from 'react-back-to-top'

const scrollTop = () => {
  return (
    <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
      <span>scroll up</span>
    </BackToTop>
  )
}

export default scrollTop
