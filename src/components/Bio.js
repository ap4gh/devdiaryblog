import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div className="bio-container">
            <div className="bio">
              <div className="bio-pic">
                <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
              </div>
              <p className="bio-text">
                A blog about Programming&nbsp;💻, Designing&nbsp;🌟 &
                Productivity&nbsp;💯.
              </p>
            </div>
            <div className="social-media">
              <a href="https://twitter.com/DiaryOfDev">Twitter</a>&nbsp; •&nbsp;
              <a href="https://github.com/ap4gh/devdiaryblog">GitHub</a>
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
