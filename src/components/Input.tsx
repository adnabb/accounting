import React, {BaseHTMLAttributes, ReactHTMLElement} from 'react';
import styled from 'styled-components';

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Label = styled.label`
  padding: 12px 16px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  font: inherit;
  > input {
    font: inherit;
    margin-left: 16px;
    line-height: 18px;
    border: none;
    // background: $background-color;
    background: #f5f5f5;
  }
`

export const Input: React.FC<Props> = (props) => {
  const {label, ...rest} = props;
  return (
    <Label>
      <span>{label}</span>
      <input {...rest}/>
    </Label>
  )
}