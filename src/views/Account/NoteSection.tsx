import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';

const Wrapper = styled.section`
  font-size: 14px;
  label {
    padding: 25px 16px;
  }
`;

type Props = {
  value: string
  onChange: (note:string) => void
}
const NoteSection:React.FC<Props> = (props) => {
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  }
  return (
      <Wrapper>
        <Input label="备注" type="text" value={props.value} placeholder="请在这里添加备注" onChange={onChange}/>
      </Wrapper>
  )
}

export {NoteSection};