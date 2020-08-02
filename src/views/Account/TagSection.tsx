import styled from 'styled-components';

export const TagSection = styled.section`
  padding: 0 16px;
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > ol {
    display: flex;
    font-size: 14px;
    margin: 0 0 18px 0;
    > li {
      border-radius: 18px;
      padding: 4px 18px;
      background: rgba(248, 208, 45, .6);
      margin-right: 24px;
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