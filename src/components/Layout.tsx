import GNav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  flex-grow: 1;
  overflow-y: auto;
`
type Props = {
  children: object
}

export default function Layout(props:Props) {
  return (
      <Wrapper>
        <Main>
          {props.children}
        </Main>
        <GNav />
      </Wrapper>
  )
}