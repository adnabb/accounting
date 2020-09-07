import {useState} from 'react';
import {createTagId} from 'lib/createTagId'

type Tag = {
  id: number
  name: string
}

const initialData = [{ id: createTagId(), name: '衣' }, { id: createTagId(), name: '食'}, { id: createTagId(), name: '住'}, { id: createTagId(), name: '行'}];

export const useTags = () => {
  const [tags, setTags] = useState<Array<Tag>>(initialData);
  const findTagByName = (name: string) => {
    const found = tags.filter((tag) => tag.name === name);
    return found && found[0];
  }
  const findTagById = (id: number) => {
    const found = tags.filter((tag) => tag.id === id);
    return found && found[0];
  }
  return {tags, setTags, findTagByName, findTagById};
}