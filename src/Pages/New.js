import React from 'react';
import Header from '../Components/Header';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import Editor from '../Components/Editor';
import { DiaryDispatchContext } from '../App';
import { useContext } from 'react';


const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const onSubmit = (data) => {
    const {date, content, emotionId} = data;
    onCreate(date, content, emotionId);
    navigate('/', {replace: true});
  }

  return (
    <div>
      <Header 
      title={'새 일기 쓰기'} 
      leftChild={<Button text={'< 뒤로가기'} onClick={goBack}/>} 
      />
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New;