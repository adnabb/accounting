import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';

const Wrapper = styled.section`
  padding: 0 16px;
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > ol {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin: 0 0 8px 0;
    > li {
      border-radius: 18px;
      padding: 4px 18px;
      background: rgba(248, 208, 45, .6);
      margin-right: 24px;
      margin-bottom: 10px;
      &.selected {
        background: #fda7df;
        font-weight: bold;
      }
    }
  }
  > button {
    border: none;
    border-bottom: 1px solid #666;
    background: white;
    color: #767676;
    margin-bottom: 12px;
    width: max-content;
  }
`;

type Props = {
  value: number[]
  onChange: (tags:number[]) => void
}
const TagSection:React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedIds = props.value;

  const getTagClass = (id:number) => {
    return selectedIds.indexOf(id) >= 0 ? 'selected' : ''
  }
  const triggerTag = (id:number) => {
    props.onChange(selectedIds.indexOf(id) >= 0 ? selectedIds.filter(currentTag => currentTag !== id) : [...selectedIds, id])
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag.id} className={getTagClass(tag.id)} onClick={() => triggerTag(tag.id)}>{tag.name}</li>)}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export { TagSection }