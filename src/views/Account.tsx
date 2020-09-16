import React, {useState} from 'react';
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

type Category = 'expenditure' | 'income'
type Record = {
  tagIds:  number[],
  note: string,
  category: Category,
  amount: number,
  createTime?: number,
}
const initialSelected: Record = {tagIds: [], note: '', category: 'expenditure', amount: 0 };
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
          <CategorySection value={selected.category} onChange={(category) => {onChange({category})}} />
          <KeyoardSection value={selected.amount} onChange={(amount) => {onChange(({amount}))}} onOk={onOk} />
        </Layout>
      </MyLayout>
  )
}