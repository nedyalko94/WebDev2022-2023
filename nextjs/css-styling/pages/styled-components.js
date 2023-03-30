import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size:50px;
color:${({theme})=> theme.colors.primary}
`

export default function StyledComponents() {
  return (
    <Title>styled-components</Title>
  )
}
