
import './App.scss';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
// import { Router, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
