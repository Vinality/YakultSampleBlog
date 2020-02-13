import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import Img from 'gatsby-image'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <PostWrapper key={node.fields.slug}>
                <Link
                  style={{ boxShadow: `none`,  color: '#fff' }}
                  to={`blog${node.fields.slug}`}
                >
                  <ContentContainer>
                    <Img fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />                       
                    <TextContent>
                      <h3 style={{marginBottom: rhythm(1 / 4), marginTop: 0}}>{title}</h3>
                      <small>{node.frontmatter.date}</small>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </TextContent>
                  </ContentContainer>
                </Link>
              </PostWrapper>
            )
          })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Voltar a Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  border: none;
  margin: 2vh 0 2vh 0;
  padding: 25px 25px;
  cursor: pointer;
  background: #e5556e;
  border-radius: 6px;
  font-weight: 600;
  max-height: 25vh;

  Img {
    border-radius: 6px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const TextContent = styled.div`
  width: 300px;
  padding: 5px 5px;
  margin-left: 10px;
  margin-right: 10px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
