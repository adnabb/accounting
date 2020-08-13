import React, {useState} from 'react';
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

type Category = 'expenditure' | 'income'
export default function Account() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: 'expenditure' as Category,
    amount: 0,
  })

  return (
      <MyLayout>
        {selected.tags} <br/>
        {selected.note} <br/>
        {selected.category} <br/>
        {selected.amount} <br/>
        <Layout>
          <TagSection value={selected.tags} onChange={(tags) => {
            setSelected({
              ...selected,
              tags,
            })
          }}/>
          <NoteSection value={selected.note} onChange={(note) => {
            setSelected({
              ...selected,
              note,
            })
          }} />
          <CategorySection value={selected.category} onChange={(category) => {
            setSelected({
              ...selected,
              category,
            })
          }} />
          <KeyoardSection value={selected.amount} onChange={(amount) => {
            setSelected({
              ...selected,
              amount,
            })
          }} />
        </Layout>
      </MyLayout>
  )
}