import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import Img from 'gatsby-image'

import {
  Card,
  CardActionArea,
  CardContent,
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
            const title = node.frontmatter.title || node.fields.slug
            return (
              // <PostWrapper key={node.fields.slug}>
              //   <Link
              //     style={{ boxShadow: `none`,  color: '#fff' }}
              //     to={`blog${node.fields.slug}`}
              //   >
              //     <ContentContainer>
              //       <div style={{minWidth: '10vw', maxWidth: '10vw' }}>
              //         <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
              //       </div>                       
              //       <TextContent>
              //         <h3 style={{marginBottom: rhythm(1 / 4), marginTop: 0, fontSize: '2.5vh'}}>{title}</h3>
              //         <small style={{fontSize: '1vh'}}>{node.frontmatter.date}</small>
              //         <p 
              //           style={{fontSize: '2vh'}}
              //           dangerouslySetInnerHTML={{
              //             __html: node.frontmatter.description || node.excerpt,
              //           }}
              //         />
              //       </TextContent>
              //     </ContentContainer>
              //   </Link>
              // </PostWrapper>
            
              <Link to={`blog${node.fields.slug}`} style={{ boxShadow: `none`,  color: '#fff' }}>
                <MyCard>
                  <CardActionArea>
                  <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
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

// const PostWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   border: none;
//   margin: 2vh 0 2vh 0;
//   padding: 25px 25px;
//   cursor: pointer;
//   background: #e5556e;
//   border-radius: 6px;
//   font-weight: 600;
//   max-height: 30vh;

//   Img {
//     border-radius: 6px;
//   }
// `

// const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
// `

// const TextContent = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: column;
//   max-height: 15vh;
//   padding: 5px 5px;
//   margin-left: 10px;
//   margin-right: 10px;
//   white-space: normal;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `

const MyCard = mStyled(Card)({
  minWidth: '15vw',
  maxWidth: '15vw',
  // width: '15vw',
  // height: '20vw',
  margin: 10,
  background: '#28202e',
  color: '#fff',
});

const MyCardContent = mStyled(CardContent)({
  minHeight: '7vw',
  maxHeight: '7vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
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
            }
          }
        }
      }
    }
  }
`
