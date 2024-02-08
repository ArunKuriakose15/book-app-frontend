import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';
import SearchBook from './components/SearchBook';

function App() {
  return (
    <div >

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<AddBook/>} />
          <Route path='/view' element={<ViewBook/>} />
          <Route path='/search' element={<SearchBook/>} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
