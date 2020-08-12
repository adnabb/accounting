import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 14px;
  > label {
    padding: 26px 16px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    > input {
      margin-left: 16px;
      border: none;
      // background: $background-color;
      background: #f5f5f5;
    }
  }
`;

const NoteSection:React.FC = () => {
  const [note, setNote] = useState('');
  const input = React.useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (input && input.current) {
      setNote(input.current.value);
    }
  }
  return (
      <Wrapper>
        <label>
          <span>备注</span>
          <input type="text" ref={input} placeholder="请在这里添加备注" onBlur={onBlur}/>
        </label>
      </Wrapper>
  )
}

export {NoteSection};