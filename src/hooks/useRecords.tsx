import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type Category = 'expenditure' | 'income'
type Record = {
  tagIds:  number[],
  note: string,
  category: Category,
  amount: number,
  createTime?: number,
}

export const useRecords = () => {
  const [records, setRecords] = useState<Array<Record>>([]);
  const getRecord = () => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }
  const addRecord = (record: Record) => {
    setRecords([...records, record])
  }
  useEffect(() => {
   getRecord();
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records])
  return {addRecord}
}