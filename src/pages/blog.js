import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { styled as mStyled } from '@material-ui/styles';

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div style={{ margin: "20px 0 40px", display: 'flex', justifyContent: 'center', alignItems: 'space-between', flexWrap: 'wrap' }}>
          {posts.map(({ node }) => {
            console.log(node.frontmatter.thumbnail.publicURL)
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link to={`blog${node.fields.slug}`} style={{ boxShadow: `none`,  color: '#fff' }}>
                <MyCard>
                  <CardActionArea>
                
                    <CardMedia
                      src={node.frontmatter.thumbnail.publicURL}
                      component="img"
                      alt="Thumb"
                      height="140"
                      title='Thumbnail'
                      style={{marginBottom: 0}}
                    />
                    <MyCardContent>
                      <h3 style={{marginBottom: rhythm(1 / 4), marginTop: 0, fontSize: '2.5vh'}}>{title}</h3>
                      <small style={{fontSize: '1.2vh', color: '#e5556e'}}>{node.frontmatter.date}</small>
                    </MyCardContent>
                  </CardActionArea>
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

const MyCard = mStyled(Card)({
  minWidth: '35vw',
  maxWidth: '35vw',
  margin: 10,
  background: '#28202e',
  color: '#fff',
});

const MyCardContent = mStyled(CardContent)({
  minHeight: '8vh',
  maxHeight: '8vh',
})

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
