import {createTagId} from 'lib/createTagId'
import {useUpdate} from 'hooks/useUpdate';
import {useEffect, useState} from 'react';
import {Tag} from './views/tag';

type Tag = {
  id: number
  name: string
}

const initialData = [{ id: createTagId(), name: '衣' }, { id: createTagId(), name: '食'}, { id: createTagId(), name: '住'}, { id: createTagId(), name: '行'}];

export const useTags = () => {
  const [tags, setTags] = useState<Array<Tag>>([])
  useEffect(() => {
    const localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    setTags(localTags.length ? localTags : initialData);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])

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
  const addTag = () => {
    const newTag = window.prompt('请输入您期待添加的标签');
    if (!newTag || findTagByName(newTag)) return;
    setTags([
      ...tags,
      { id: createTagId(), name: newTag},
    ]);
  }
  const deleteTag = (id:number) => {
    const index = findTagIndex(id);
    if(index >= 0) {
      const copy = JSON.parse(JSON.stringify(tags));
      copy.splice(index, 1);
      setTags(copy);
    }
  }
  const updateTagName = (id:number, name:string) => {
    const copy = JSON.parse(JSON.stringify(tags));
    const index = findTagIndex(id);
    if (index >= 0) {
      copy[index].name = name;
      setTags(copy);
    }
  }
  return {tags, setTags, findTagByName, findTagById, updateTagName, addTag, deleteTag};
}