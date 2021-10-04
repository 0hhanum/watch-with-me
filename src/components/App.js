import Router from "Components/Router";
import Header from "Components/Header";
// import Header from "Components/Header";
// Header 폴더에 index.js 를 만들어서 이런 식으로 import 가 가능.

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
