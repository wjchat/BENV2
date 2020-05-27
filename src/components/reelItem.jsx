import React, { useEffect } from "react"

import Img from "gatsby-image"
import { gsap, Power3 } from "gsap"
import "../sass/reelItem.scss"

const ReelItem = props => {
  let focus
  let animate
  useEffect(() => {
    if (focus) {
      if (props.item.orderOfAppearance === props.current) {
        props.updateInfo({
          title: props.item.title,
          video: props.item.video.publicURL,
        })
        gsap.to(focus, props.time * 0.4, {
          opacity: 1,
          delay: props.time * 0.5,
        })
      } else {
        gsap.to(focus, props.time, {
          opacity: 0,
        })
      }
    }
  }, [props.current, focus])
  useEffect(() => {
    if (animate) {
      if (props.showVideo) {
        if (props.current === props.item.orderOfAppearance) {
          gsap.to(animate, props.time * 0.5, {
            opacity: 0,
            scale: 1.2,
            pointerEvents: "none",
            ease: Power3.easeInOut,
          })
        } else {
          gsap.to(animate, props.time * 0.5, {
            opacity: 0,
            scale: 0.8,
            pointerEvents: "none",
            ease: Power3.easeInOut,
          })
        }
      } else {
        gsap.to(animate, props.time * 0.5, {
          opacity: 1,
          scale: 1,
          pointerEvents: "all",
          ease: Power3.easeInOut,
        })
      }
    }
  }, [props.showVideo, animate])
  const handleClick = () => {
    if (props.current === props.item.orderOfAppearance) {
      props.updateInfo({ title: props.item.title, showVideo: true })
    } else {
      props.updateCurrent(props.item.orderOfAppearance)
    }
  }
  return (
    <div
      ref={div => (animate = div)}
      onClick={() => handleClick()}
      className="itemContainer"
    >
      <div className="image">
        <Img fluid={props.item.reelPic.childImageSharp.fluid} />
      </div>
      <div ref={div => (focus = div)} className="image focus">
        <Img fluid={props.item.focusPic.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default ReelItem
