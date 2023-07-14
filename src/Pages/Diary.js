import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Button from '../Components/Button';
import { getFormattedDate } from '../util'
import Viewer from '../Components/Viewer';
import useDiary from '../Hooks/useDiary';

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  }
  // 예외처리
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>
  } else {
    const {date, emotionId, content} = data;
    console.log(data)
    const title = `${getFormattedDate(new Date(Number(date)))}기록`
    return (
      <div>
        <Header 
        title={title} 
        leftChild={<Button text={'< 뒤로가기'} onClick={goBack}/>}
        rightChild={<Button text={'수정하기'} onClick={goEdit}/>}
        />
        <Viewer 
        content={content}
        emotionId={emotionId}
        />
      </div>
    )
  }
}

export default Diary;