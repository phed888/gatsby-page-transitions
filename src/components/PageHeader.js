import React from 'react'
import styled from 'styled-components'

const PageHeaderStyles = styled.div`
  background-color: ${props => props.bgColor};
  padding: 1.6rem 1.6rem 0 1.6rem;
  position: relative;
  height: 20rem;
  h1 {
    position: absolute;
    bottom: -2rem;
    left: 1.6rem;
    font-size: 8.6rem;
    color: white;
  }
`

export default function PageHeader(props) {
  return (
    <PageHeaderStyles bgColor={props.bgColor}>
      <h1>{props.pageTitle}</h1>
    </PageHeaderStyles>
  )
}
