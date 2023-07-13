// src > img 폴더에 있는 이미지 파일 가져오기
import emotion1 from './img/emotion1.png';
import emotion2 from './img/emotion2.png';
import emotion3 from './img/emotion3.png';
import emotion4 from './img/emotion4.png';
import emotion5 from './img/emotion5.png';

// ### 이미지를 식별해서 가져오는 함수
// 이모션 이미지를 가져오기 위한 함수 인자값은 식별하기 위한 인자값
export const getEmotionImgById = (emotionId) => {
  // 상수 targetEmotionId에 내장객체 String() 사용함으로써 인자값이 문자열로 변환
  // switch문의 case값을 판별하기 위해서 = 문자열, 내장객체 String()를 사용해서 문자열로 변환
  const targetEmotionId = String(emotionId);
  // 문자열로 변환된 값을 인자값으로 스위치 문이 진행
  switch (targetEmotionId) {
    // case 1번일 경우 emotion1 값이 반환된다 나머지 이와 같음
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
      // 기본값은 null
      default :
      return null;
  }
};

// ### 날짜에 대한 함수
// 함수에 targetDate라는 인자값이 들어온다
export const getFormattedDate = (targetDate) => {
  // let을 쓰는 이유는 = 값을 재할당 하려고
  let year = targetDate.getFullYear();
  // 월은 인자값의 월 (월은 인덱스번호 0부터 시작하기 때문에 +1을 해준다)
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  // 월과 날짜를 두자리로 표현하기 위한 조건식
  if(month < 10) {
    month = `0${month}`
  }
  // 월과 날짜를 두자리로 표현하기 위한 조건식
  if(date < 10) {
    date = `0${date}`
  }
  // 변환된 최종값을 반환
  // 이 함수의 목적은 변환된 값을 외부에 전달하기 위한 함수
  return `${year}-${month}-${date}`
}

// 배열객체로 값을 정리
// 각각의 이미지에 대한 정보를 배열 객체로 정의함으로써, 각각의 이미지에 id값, 이름, 이미지에 대한 정의를 해놨다
export const emotionList = [
  {
    id: 1,
    name: "완전 좋음",
    // 여기서 숫자 number 타입으로 값을 넣어도 되는 이유는 위에 상수 targetEmotionId에 
    // String() 내장객체를 썻기때문에 number 타입으로 들어와도 문자열로 치환된다
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "그냥 좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: getEmotionImgById(5),
  },
];