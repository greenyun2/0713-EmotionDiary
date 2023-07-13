import React from 'react'
import Editor from '../Components/Editor';


const Home = () => {
  return (
    <div>
      <Editor 
      initData={{
        date: new Date().getTime(),
        emotionId: 1,
        content: "이전에 작성했던 일기",
      }}
      onSubmit={() => {
        alert('작성 완료 버튼을 눌렀어')
      }}/>
    </div>
  )
}

export default Home;