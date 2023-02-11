import './App.css';
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Note from './components/Note/Note';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

const App = () => {
 
  return (
    <div className="App"> 
      <Header />
     
      <Routes>
        <Route element={<Content />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Contacts />} path='/contacts' />
        <Route element={ <img src="https://geekflare.com/wp-content/uploads/2019/01/The-Front-End-Spectrum-1076x628.png" alt="" /> } path='/about/info' />
      </Routes>
      
      
    </div>
  );
}

export default App;

//состояние - данные (переменные), с которыми работает и от которых зависит компонент
//компонет - это ф-ция, которая возвращает нам jsx