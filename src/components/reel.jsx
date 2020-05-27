import React from "react"

import ReelItem from "./reelItem.jsx"

import { useStaticQuery, graphql } from "gatsby"

const Reel = props => {
  let data = useStaticQuery(graphql`
    query ReelQuery {
      allStrapiProjects(sort: { order: ASC, fields: orderOfAppearance }) {
        edges {
          node {
            title
            orderOfAppearance
            video {
              publicURL
              relativePath
              absolutePath
            }
            focusPic {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            reelPic {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  let items = data.allStrapiProjects.edges
  return (
    <>
      {items.map(item => (
        <ReelItem
         showVideo = {props.showVideo}
          time={props.time}
          updateCurrent={num => props.updateCurrent(num)}
          updateInfo={info => props.updateInfo(info)}
          current={props.current}
          key={item.node}
          item={item.node}
        />
      ))}
    </>
  )
}
export default Reel
