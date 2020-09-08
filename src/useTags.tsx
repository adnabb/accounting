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
  const findTagIndex = (id:number) => {
    let index = -1;
    for (let i = 0; i < tags.length; i+=1) {
      if(tags[i].id === id) {
        index = i;
      }
    }
    return index;
  }
  const updateTagName = (id:number, name:string) => {
    const copy = JSON.parse(JSON.stringify(tags));
    const index = findTagIndex(id);
    if (index >= 0) {
      copy[index].name = name;
      setTags(copy);
    }
  }
  return {tags, setTags, findTagByName, findTagById, updateTagName};
}