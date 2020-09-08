import React, {ChangeEventHandler, ReactEventHandler} from 'react';
import {useTags} from 'useTags';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Input} from 'components/Input';
import {Button} from 'components/Button';

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #fff;
`
const InputWrapper = styled.div`
  background: #fff;
  margin-top: 8px;
  input {
    background: #fff;
  }
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 44px;
`

const Tag:React.FC = (props) => {
  const {findTagById, updateTagName, deleteTag} = useTags()
  const {id:stringId} = useParams();
  const id = parseInt(stringId)
  const tag = findTagById(id);
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTagName(id, e.target.value)
  }
  return (
      <Layout>
        <TopBar>
          <Icon className="arrow" name='arrow-left'></Icon>
          <span>编辑标签</span>
          <Icon className="arrow" name=''></Icon>
        </TopBar>
        {tag ? (
            <div>
              <InputWrapper>
                <Input label="标签名" placeholder="请输入标签名" value={tag.name} onChange={onChange} />
              </InputWrapper>
              <ButtonWrapper>
                <Button onClick={() => deleteTag(id)}>删除标签</Button>
              </ButtonWrapper>
            </div>
        ) : <div className="no-tag">标签不存在</div>}
      </Layout>
  )
}

export {Tag};