import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className="bio-container">
            <div className="bio">
              <div className="bio-pic">
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                />
              </div>
              <p className="bio-text">
                A blog about Programming&nbsp;💻, Designing&nbsp;🌟 & Productivity&nbsp;💯.
              </p>
            </div>
            <div className="social-media">
              <a href="https://twitter.com/DiaryOfDev">Twitter</a>&nbsp;
              •&nbsp;<a href="https://github.com/ap4gh">GitHub</a>&nbsp;
              •&nbsp;<a href="https://discord.gg/6RYUs42">Discord</a>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
