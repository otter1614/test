import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
  }, []); //빈배열이면 최초 랜더일 일떄만 실행

  return <div>Elapsed time: {seconds} seconds</div>;
}

export default Timer;
// 컴포넌트가 렌더링된 후 실행되는 side effect (예: API 호출, 이벤트 리스너 설정 등)
// 사용 이유 
// 랜더링을 기준으로 얼마 뒤에 사이드 이팩트 즉 뒷단에서 데이터를 받을지를 지정해주는 훅임임
//  