import React, {useState} from 'react';
import {Category, Record} from 'types'
import {useRecords} from 'hooks/useRecords';
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
const CategoryWrapper = styled.div`
  ol {
    background: rgba(248, 208, 45, .3);
  }
`

const initialSelected: Record = {tagIds: [], note: '', category: 'expenditure', amount: 0, createTime: new Date().getTime() };
export default function Account() {
  const [selected, setSelected] = useState<Record>(initialSelected)
  const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
      createTime: new Date().getTime()
    });
  }
  const { addRecord } = useRecords();
  const clearSelected = () => {
    setSelected(initialSelected)
  }
  const onOk = () => {
    if (selected.tagIds.length <= 0) { alert('请选择标签'); return; }
    if (selected.amount <= 0) { alert('请输入金额'); return; }
    addRecord(selected);
    clearSelected();
  }
  return (
      <MyLayout>
        <Layout>
          <TagSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})}/>
          <NoteSection value={selected.note} onChange={(note) => onChange(({note}))} />
          <CategoryWrapper>
            <CategorySection value={selected.category} onChange={(category) => {onChange({category})}} />
          </CategoryWrapper>
          <KeyoardSection value={selected.amount} onChange={(amount) => {onChange(({amount}))}} onOk={onOk} />
        </Layout>
      </MyLayout>
  )
}