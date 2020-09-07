import React from 'react';
import {useTags} from 'useTags';
import { useParams } from 'react-router-dom';

const Tag:React.FC = (props) => {
  const {findTagById} = useTags()
  const {id} = useParams();
  const tag = findTagById(parseInt(id));
  return (
      <div>{tag.name}</div>
  )
}

export {Tag};