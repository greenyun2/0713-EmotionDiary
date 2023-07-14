import React, { useEffect, useState } from 'react';
import './DiaryList.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';

// select의 최신순, 오래된순 
const sortOptionList = [
  {
    value: "latest",
    name: "최신순",
  },
  {
    value: "oldest",
    name: "오래된 순",
  }
];


const DiaryList = ({ data }) => {
  // 최신순, 오래된순의 상태변화 
  const [sortType, setSortType] = useState("latest");
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate('/new');
  }
  const [sortedData, setSortedData] = useState([]);
  // 최신순, 오래된순에 따라 페이지 렌더링 시키기
  useEffect(() => {
    const compare = (b, a) => {
      if (sortType === "latest") {
        // 최신순 : 큰숫자, 작은숫자 오래된 숫자
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.data);
      }
    }
    // 데이터 복제하기 제이슨은 문자열로 가져오고 가져올때 값이 지멋대로 정렬될수 있기 때문에 다시한번 배열타입으로 바꿔준다
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);

    setSortedData(copyList);

  }, [data, sortType]);

  return (
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select  value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className='right_col'> 
          <Button 
          onClick={onClickNew}
          type={'positive'}
          text={'새일기 쓰기'}
          />
        </div>
      </div>
      <div className='list_wrapper'>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  )
}

export default DiaryList;