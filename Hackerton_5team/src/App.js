import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // return 문 안에 html문장이 있으면 index.js에서 <App /> 얘가 랜더링 되는 과정임
    // 단 return 문 안에는 태그 하나로 뭉쳐줘야함
    //예 : 아래의 주석을 풀면 오류떠서 랜더링 걸림 그러니가 만약에 이 아래 코드 까지 쓰고 싶으면 위 아래로 
    // 코드를 감싸는 테그를 달면 됨  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
