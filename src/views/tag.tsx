import React from 'react';
import {useTags} from 'useTags';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/icon';
import styled from 'styled-components';

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px;
  background: #fff;
`

const Tag:React.FC = (props) => {
  const {findTagById} = useTags()
  const {id} = useParams();
  const tag = findTagById(parseInt(id));
  return (
      <Layout>
        <TopBar>
          <Icon name='arrow-left'></Icon>
          <span>编辑标签</span>
          <Icon name=''></Icon>
        </TopBar>
      </Layout>
  )
}

export {Tag};