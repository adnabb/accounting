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
    tagIds: [] as number[],
    note: '',
    category: 'expenditure' as Category,
    amount: 0,
  })
  const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }

  return (
      <MyLayout>
        <Layout>
          <TagSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})}/>
          <NoteSection value={selected.note} onChange={(note) => onChange(({note}))} />
          <CategorySection value={selected.category} onChange={(category) => {onChange({category})}} />
          <KeyoardSection value={selected.amount} onChange={(amount) => {onChange(({amount}))}} />
        </Layout>
      </MyLayout>
  )
}