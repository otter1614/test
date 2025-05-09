import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
//👉 useState(0)을 사용하여 count 상태를 0으로 초기화하고, setCount를 통해 값을 변경할 수 있습니다.
// 이거 쓰는 이유 : 컴포넌트 내부에서 값이 변경될 때 자동으로 렌더링이 업데이트를 시키기 위해서 사용됨
// 그럼 위의 코드는어떤게 바뀌는가 하면 
// 버튼을 클릭 -> 유즈 스테이트 반응 count 0으로 초기화 
// 🔹 useState의 특징
// - 배열 구조: useState는 [상태 변수, 상태 변경 함수] 형태의 배열을 반환합니다.
// - 자동 렌더링: 상태가 변경되면 컴포넌트가 자동으로 다시 렌더링됩니다.
// - 초기값 설정 가능: useState("초기값")처럼 문자열, 숫자, 객체 등 다양한 타입을 초기값으로 설정할 수 있습니다.


// 코드 동작 과정
/*
1. 렌더링 됐을 때 유즈 스테이트의 값이 0으로 초기화 된다
2. 버튼을 눌렀을때 상태변경함수인 setCount가 버튼의 상태가 변한걸 감지함
3. useState의 값이 +1이됨
4. 버튼을 누르게 되면 이게 반복되는 것임
*/ 