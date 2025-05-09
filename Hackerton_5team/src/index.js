import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 자신이 만든 컴포넌트를 사용하는 방법 
// 자신이 사용할 컴포넌트를 임포트 해옵니다
// 참조 해온 컴포넌트의 이름을 정의 해줍니다 
// 예 : import App from './App'; 이 코드를 보면 App 컴포넌트를 참조합니다 
// 컴포트를 태그화 해줍니다 이름을 지정 해준다는 뜻입니다
// 컴포넌트를 App이라는 이름으로 태그를 만들었으면 <App /> 이라는 태그로 랜더링 시켜줍니다
// 여기서 쓰는 컴포넌트 들은 단일 태그 입니다
// 주의점 이름을 설정 할때 제일 처음 오는 알파벳은 대 문자로 표기 합니다 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
