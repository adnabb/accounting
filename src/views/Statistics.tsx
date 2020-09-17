import React, {useEffect, useState} from 'react';
import {Category, GroupedRecord, Record} from 'types'
import Layout from '../components/Layout';
import {CategorySection} from './Account/CategorySection';
import {useRecords} from '../hooks/useRecords';
import {useUpdate} from '../hooks/useUpdate';

export default function Statistics() {
  const [catetory, setCatetory] = useState<Category>('expenditure');
  const [groupedRecords, setGroupedRecords] = useState<GroupedRecord>({});
  const {records, getRecordsGroupByCreateTime} = useRecords();
  const onChange = (category:Category) => {
    setCatetory(category);
  }
  useUpdate(() => {
    setGroupedRecords(
        getRecordsGroupByCreateTime(records.filter((record) => record.category === catetory))
    )
  }, [records, catetory])

  return (
      <Layout>
        <CategorySection value={catetory} onChange={(category => {onChange(category)})} />
        <div>
          {JSON.stringify(groupedRecords)}
        </div>
      </Layout>
  )
}