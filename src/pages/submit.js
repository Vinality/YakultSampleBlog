import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"

class Submit extends React.Component {
  render() {
    // const { data } = this.props
    const siteTitle = "Yakult Personal Test Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Container>
          <div>
            <h1>Obrigado!</h1>
            <p>Seu email foi enviado</p>
            <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {'<'} Voltar
            </Link>
          </div>
        </Container>
      </Layout>
    )
  }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #000;
    height: 25vh;
    width: 40vh;
    border-radius: 20px;
    padding: 10vh;
`

export default Submit
