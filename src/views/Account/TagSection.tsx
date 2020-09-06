import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';

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
  value: string[]
  onChange: (tags:string[]) => void
}
const TagSection:React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selected = props.value;
  const addTag = () => {
    const newTag = window.prompt('请输入您期待添加的标签');
    if (!newTag || tags.indexOf(newTag) >= 0) return;
    setTags([
      ...tags,
      newTag,
    ]);
  }
  const getTagClass = (tag:string) => {
    return selected.indexOf(tag) >= 0 ? 'selected' : ''
  }
  const triggerTag = (tag:string) => {
    props.onChange(selected.indexOf(tag) >= 0 ? selected.filter(currentTag => currentTag !== tag) : [...selected, tag])
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag} className={getTagClass(tag)} onClick={() => triggerTag(tag)}>{tag}</li>)}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export { TagSection }