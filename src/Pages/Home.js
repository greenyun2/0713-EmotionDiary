import React, { useState, useContext, useEffect }  from 'react';
import { DiaryStateContext } from '../App';
import Button from '../Components/Button';
import Header from '../Components/Header';
import { getMonthRangeByDate } from '../util';
import DiaryList from '../Components/DiaryList';


const Home = () => {
  // App.js 에서 뿌려주기로한 data = value={data} = mockData : 초기 목업데이터
  const data = useContext(DiaryStateContext);
  // Header > title 날짜변화
  const [pivotDate, setPivotDate] = useState(new Date());
  // 일기장 안에 월에 맞는 데이터 출력해주기 위한 상태변화 함수
  const [filteredData, setFilteredData] = useState([]);

  // 날짜에 맞는 데이터만 랜더링 시키기
  useEffect(() => {
    if(data.length >= 1) {
      // 현재 페이지가 보여주는 월의 값
      const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
      // 날짜에 맞게 필터링 
      setFilteredData(data.filter((it) => beginTimeStamp <= it.date && it.date <= endTimeStamp));
    } else {
      // 아니라면 []
      setFilteredData([]);
    };
    // data = 목업데이터, pivotDate = 월 
  }, [data, pivotDate]);

  // Header > Button 컴포넌트 클릭시 날짜 변화 함수
  const onIncreaseMont = () => {
    // 클릭시 년도는 고대로, 월만 + 1 = 다음 월
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  const onDecreaseMont = () => {
    // 클릭시 년도는 고대로, 월만 - 1 = 이전 월
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }
  // 헤더 title의 날짜 정보 초기값의 년도를 가져오고, 초기값의 월값을 져온다
  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

  return (
    <div>
      <Header 
      title={headerTitle} 
      leftChild={<Button text={'<'} onClick={onDecreaseMont} />} 
      rightChild={<Button text={'>'} onClick={onIncreaseMont}/>}
      />
      <DiaryList data={filteredData} />
    </div>
  )
};

export default Home;