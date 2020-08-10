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
          <KeyoardSection>
            <div className="result">100</div>
            <div className="button-wrapper clearfix">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>删除</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>清空</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button className="ok">OK</button>
              <button className="zero">0</button>
              <button className="dot">.</button>
            </div>
          </KeyoardSection>
        </Layout>
      </MyLayout>
  )
}