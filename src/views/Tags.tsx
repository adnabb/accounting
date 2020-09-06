import React from 'react';
import styled from 'styled-components';
import {useTags} from 'useTags';
import Layout from '../components/Layout';
import {Link} from 'react-router-dom';

const TagWrapper = styled.ol`
  font-size: 16px;
  li {
    a {
      padding: 12px 16px;
      border-bottom: 1px solid #dddde0;
      background: #fff;
      display: flex;
      justify-content: space-between;
    }
    .tag {
      white-space: nowrap;
      display: block;
      max-width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
  button {
    font-size: 16px;
    padding: 9px 16px;
    color: #FFFFFF;
    background: #767676;
    border-radius: 4px;
    margin-top: 44px;
  }
`

export default function Tags() {
  const {tags, setTags} = useTags();
  return (
      <Layout>
        <TagWrapper>
          {tags.map((tag, index) => <li key={index}>
            <Link to={'/tags/' + tag.id}>
              <span className="tag">{tag.name}</span>
              <span>></span>
            </Link>
          </li>)}
        </TagWrapper>
        <ButtonWrapper>
          <button>新建标签</button>
        </ButtonWrapper>
      </Layout>
  )
}