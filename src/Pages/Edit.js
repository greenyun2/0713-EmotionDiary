import React, {useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../Components/Button';
import Header from '../Components/Header';
import { DiaryDispatchContext } from '../App';
import Editor from '../Components/Editor';
import useDiary from '../Hooks/useDiary';

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      navigate('/', {replace: true});
    }
  }
  // onSubmit() 함수안에 들어가는 onUpdate()의 인자값 매칭오류
  // onsubmit() 안에 data가 들어오면
  const onSubmit = (data) => {
    const {date, content, emotionId} = data;
    onUpdate(id, date, content, emotionId);
    navigate('/', {replace: true});
  }
  if(!data) {
    return <div>일기를 불러오고 있습니다...</div>
  } else {
    return (
      <div>
        <Header 
        title={'일기 수정하기'} 
        leftChild={<Button text={'< 뒤로가기'} onClick={goBack}/>} 
        rightChild={<Button text={'삭제하기'} onClick={onClickDelete} type={'negative'}/>}
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    )
  }
}

export default Edit