import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

const CategorySection: React.FC = () => {
  const [category, setCategory] = useState('expenditure');
  const [categoryList] = useState<('expenditure' | 'income')[]>(['expenditure', 'income']);
  const categoryMap = {'expenditure': '支出', 'income': '收入'};
  return (
    <Wrapper>
      <ol>
        {categoryList.map(c => (
            <li className={c === category ? 'selected' : ''} onClick={() => setCategory(c)}>
              {categoryMap[c]}
            </li>
        ))}
      </ol>
    </Wrapper>
  )
}

export {CategorySection};