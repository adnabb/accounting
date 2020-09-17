import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {Record, GroupedRecord} from 'types'

import {useUpdate} from './useUpdate';

export const useRecords = () => {
  const [records, setRecords] = useState<Array<Record>>([]);
  const getRecord = () => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }
  const addRecord = (record: Record) => {
    setRecords([...records, record])
  }
  const getRecordsGroupByCreateTime = (recordList: Array<Record> = records) => {
    const recordsByTime: GroupedRecord = {};
    for (let i = 0; i < recordList.length; i += 1) {
      const record = recordList[i];
      const key = dayjs(record.createTime).format('YYYY年MM月DD日');
      if (!recordsByTime[key]) {recordsByTime[key] = []}
      recordsByTime[key].push(record)
    }
    return recordsByTime;
  }
  useEffect(() => {getRecord();}, [])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records])
  return {records, getRecordsGroupByCreateTime, addRecord}
}