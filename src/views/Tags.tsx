import React from 'react';
import styled from 'styled-components';
import {useTags} from 'hooks/useTags';
import {Link} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';

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
  margin-top: 44px;
`

export default function Tags() {
  const {tags, addTag} = useTags();
  return (
      <Layout>
        <TagWrapper>
          {tags.map((tag, index) => <li key={index}>
            <Link to={'/tags/' + tag.id}>
              <span className="tag">{tag.name}</span>
              <Icon className="arrow" name="arrow-right"/>
            </Link>
          </li>)}
        </TagWrapper>
        <ButtonWrapper>
          <Button onClick={addTag}>新建标签</Button>
        </ButtonWrapper>
      </Layout>
  )
}