import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import styled from 'styled-components'

import {
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div style={{ margin: "20pxmaxWidth: 2000, maxHeight: 0 40px", display: 'flex', justifyContent: 'center', alignItems: 'space-between', flexWrap: 'wrap' }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link to={`blog${node.fields.slug}`} style={{ boxShadow: `none`,  color: '#fff' }}>
                <MyCard>
                  <CoverContainer>
                    <CardMedia
                      src={node.frontmatter.thumbnail.publicURL}
                      component="img"
                      alt="Thumb"
                      height="140"
                      title='Thumbnail'
                      style={{marginBottom: 0, height: '20vh'}}
                    />
                  </CoverContainer>
                  <CardContent>
                    <Title>{title}</Title>
                    <Date>{node.frontmatter.date}</Date>
                    <Description>{node.frontmatter.description}</Description>
                  </CardContent>
                </MyCard>
              </Link>
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

const MyCard = styled(Card)`
  display: flex;
  min-height: 20vh;
  max-height: 20vh;
  width: 35vw;
  margin: 10px;
  background: #28202e;
  color: #fff;

  @media(max-width: 960px) {
    width: 80vw;
  }
`

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
  margin-top: 0;
  font-size: 1.5vw;

  @media(max-width: 960px) {
    font-size: 3.5vw;
  }
`

const Date = styled.small`
  font-size: 0.7vw; 
  color: #e5556e;

  @media(max-width: 960px) {
    font-size: 2.8vw;
  }
`

const Description = styled.p`
  font-size: 0.8vw; 

  @media(max-width: 960px) {
    font-size: 3.2vw;
  }
`

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-width: 10vw;
  max-width: 10vw;

  @media(max-width: 960px) {
    display: none;
  }
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
                fluid(maxWidth: 2000, maxHeight: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
