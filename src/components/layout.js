import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children, location } = this.props
    console.log(location)
    return (
      <>
        <HeaderContainer>
          <HeaderWrapper>
            <TitleBar>
              <Link to='/blog' style={{ boxShadow: 'none', color: '#fff' }}>
                {title}
              </Link>
            </TitleBar>
            <MainNav>
              <CustomLink to='/' path={location.pathname}>Home</CustomLink>
              <CustomLink to='/blog' path={location.pathname}>Artigos</CustomLink>
              <CustomLink to='/sobre' path={location.pathname}>Sobre</CustomLink>
            </MainNav>
          </HeaderWrapper>
        </HeaderContainer>
        <Wrapper>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <main style={{marginTop: '3.8rem'}}>{children}</main>
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

const HeaderContainer = styled.div`
  background: #e5556e;
  color: #fff;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  padding: .75rem;
  box-shadow: 0 0 .5rem
  rgba(0,0,0,.05);
`

const HeaderWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  z-index: 21;
`

const MainNav = styled.div` 
  display: flex;
  flex: 0 0 20em;
  align-items: center;
  text-align: center;
  pointer-events: all;

  @media(max-width: 768px) {
    flex: 0 0 18em;  
  }
`

const CustomLink = styled(Link)`

  &:hover {
    opacity: 0.8;
    background: #fff;
    color:  #e5556e;
  }

  ${(props) => props.path === props.to ? `
    opacity: 0.8;
    background: #fff;
    color:  #e5556e;
  ` : `
    color: #fff;
  `}

  transition: opacity 0.2s;
  font-size: 1.2em;
  font-weight: 900; 
  box-shadow: none;
  flex: 2;
  text-transform: uppercase;
`

const TitleBar = styled.h1`
  display: flex;
  margin: 0 0;
  font-size: 2vh;
  flex: 2;
  align-items: center;
`

export default Layout
