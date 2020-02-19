import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
  
    return (
      <>
        <Header>
          <HeaderContainer>
            <h1 style={{margin: '0 0', fontSize: '2.5vh'}}>
              {title}
            </h1>
            <MainNav>
              <ul>
                <li>
                  <CustomLink to="/">Home &nbsp;</CustomLink>
                </li>
                <li>
                  <CustomLink to="/blog">Artigos &nbsp;</CustomLink>
                </li>
                <li>
                  <CustomLink to="#">Sobre &nbsp;</CustomLink>
                </li>
              </ul>
            </MainNav>
          </HeaderContainer>
        </Header>
        <Wrapper>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <main>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" style={{color: '#e5556e', textDecoration: 'none'}}>Gatsby</a>
          </Footer>
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: #35293E;
  color: #fff;
`

const Footer = styled.footer`
  text-align: center;
  padding: 24px;
`

const Header = styled.header`
  display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
`

const HeaderContainer = styled.div`
  height: 10vh;
  display: flex;
  background: #e5556e;
  color: #fff;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
  width: 100%;
`

const CustomLink = styled(Link)`
  font-size: 1.4em;
  font-weight: bold; 
  color: #fff;
  box-shadow: none;
`

const MainNav = styled.nav` 
  ul {
    margin: 1em 0 .5em;
	  text-align: center;
  }

  li {
    font-size: '2vh';
    display: inline;
  }
`

export default Layout
