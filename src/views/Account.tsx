import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {TagSection} from './Account/TagSection';
import {NoteSection} from './Account/NoteSection';
import {CategorySection} from './Account/CategorySection';
import {KeyoardSection} from './Account/KeyboardSection';

const MyLayout = styled.div`
  > div {
    > main {
      display: flex;
      flex-direction: column;
    }  
  }
`;

export default function Account() {

  return (
      <MyLayout>
        <Layout>
          <TagSection />
          <NoteSection />
          <CategorySection />
          <KeyoardSection />
        </Layout>
      </MyLayout>
  )
}