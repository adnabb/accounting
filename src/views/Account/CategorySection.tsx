import styled from 'styled-components';
import { Category } from 'types';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ol {
    display: flex;
    background: white;
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

type Props = {
  value: Category
  onChange: (category:Category) => void
}
const CategorySection: React.FC<Props> = (props) => {
  const [categoryList] = useState<('expenditure' | 'income')[]>(['expenditure', 'income']);
  const categoryMap = {'expenditure': '支出', 'income': '收入'};
  return (
    <Wrapper>
      <ol>
        {categoryList.map(c => (
            <li className={c === props.value ? 'selected' : ''} key={c} onClick={() => props.onChange(c)}>
              {categoryMap[c]}
            </li>
        ))}
      </ol>
    </Wrapper>
  )
}

export {CategorySection};