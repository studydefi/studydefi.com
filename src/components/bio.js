/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  // const data = useStaticQuery(graphql`
  //   query BioQuery {
  //     site {
  //       siteMetadata {
  //         founders {
  //           name
  //         }
  //         social {
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { founders } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        <i>
          Have questions? Find us on{" "}
          <a href="https://twitter.com/studydefi" target="_blank" rel="">
            Twitter
          </a>{" "}
          and{" "}
          <a href="https://discord.gg/rBr3U32" target="_blank" rel="">
            Discord
          </a>
        </i>
      </p>
    </div>
  )
}

export default Bio
