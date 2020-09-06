import {useState} from 'react';
import {createTagId} from 'lib/createTagId'

type Tag = {
  id: number
  name: string
}

export const useTags = () => {
  const [tags, setTags] = useState<Array<Tag>>([
    { id: createTagId(), name: '衣' }, { id: createTagId(), name: '食'}, { id: createTagId(), name: '住'}, { id: createTagId(), name: '行'}]);
  return {tags, setTags};
}