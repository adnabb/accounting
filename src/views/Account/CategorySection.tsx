import styled from 'styled-components';

export const CategorySection = styled.section`
  font-size: 24px;
  > ol {
    display: flex;
    background: rgba(248, 208, 45, .3);
    text-align: center;
    > li {
      width: 50%;
      padding: 20px 0;
      position: relative;
      &.selected {
        font-weight: bold;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 100%;
          background: rgba(248, 208, 45, .6);
        }
      }
    }
  }
`;