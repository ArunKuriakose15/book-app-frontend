import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';

function App() {
  return (
    <div >

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<AddBook/>} />
          <Route />
          <Route />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
