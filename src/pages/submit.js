import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

class Submit extends React.Component {
  render() {
    return (
      <Container>
        <Message>
          <Content>
            <p>Obrigado!</p>
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
          </Content>
        </Message>
      </Container>
    )
  }
}

const Message = styled.div`
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

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35293E;
`

const Content = styled.div`

`

export default Submit
