import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size:50px;
color:${({theme})=> theme.colors.primary}
`
//  theme.colors.primary is from _app.js theme 

export default function StyledComponents() {
  return (
    <Title>styled-components</Title>
  )
}
