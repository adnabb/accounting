import styled from 'styled-components';

export const NoteSection = styled.section`
  font-size: 14px;
  > label {
    padding: 26px 16px;
    display: inline-block;
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