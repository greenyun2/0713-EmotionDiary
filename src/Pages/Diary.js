import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const Diary = () => {
  const { id } = useParams();
  return (
    <div>
      {id}번 일기
    </div>
  )
}

export default Diary