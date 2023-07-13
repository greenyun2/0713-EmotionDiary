import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import New from './Pages/New';
import Diary from './Pages/Diary';
import Edit from './Pages/Edit';
import { useReducer, useRef } from 'react';

  // 데이터 생성, 삭제, 수정 관리
  // useReducer() 훅을 사용하기 위한 오버로드 함수
  // reducer()의 초기상태를 의미하는 : state, dispatch의 값 받아와 사용하는 action
  function reducer(state, action) {
    // 아래 구조분해할당에서 dispatch의 값의 타입을 가져와 스위치 문이 실행
    switch (action.type) {
      // 아래 dispatch의 정의해놓은 type: "CREATE"일때
      case "CREATE": {
        // dispatch의 data객체 안에 있는 내용을 출력하고(새로 만들어진 데이터) 뒤에 초기에 있었던 값들을 나열
        // 초기값이 [] 빈배열 
        // action.data = 밑에 정의해놓은 객체의 이중객체 {}
        // ...state는 초기값 = 처음 있던애들 역시 객체 {}
        // 즉, 초기값인 [] 안에 객체타입인 action.data, 원래있던 객체타입애들 넣어줘 라는 소리
        return [action.data, ...state]
      }
      // 수정됐을떄의 기능
      case "UPDATE": {
        // 수정되는 아이디 값과 같다면 새로운 걸로 바꿔주고 아니라면 기존값으로
        return state.map((it) => String(it.id) === String(action.id) ? {...action.data} : it)
      }
      case "DELETE": {
        // 삭제 = 선택된 요소를 화면에 출력하지 않는다
        // 선택되지 않은 나머지 요소만 화면에 출력해준다
        // 삭제라는 기능은 선택되지 않은 애들만 뽑아주면 된다
        return state.filter((it) => String(it.id) !== String(action.targetId))
      }
      default: {
        // 기본값일 경우 초기상태인 state를 반환한다
        return state;
      }
    }
  }

function App() {
  // 데이터 생성, 삭제, 수정 관리
  // 초기값을 빈배열
  const [data, dispatch] = useReducer(reducer, []);
  // DOM에 접근하기 위한 useRef() 사용 초기값은 1
  const idRef = useRef(1);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
      content,
      emotionId,
    })
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
