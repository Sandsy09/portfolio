import { Routes, Route } from 'react-router-dom';

import Header from './Components/Sections/Header';
import LandingPage from './Pages/LandingPage';
import BlogPage from './Pages/BlogPage';

import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<LandingPage />}/>
        <Route path='blog' element={<BlogPage />}/>
      </Route>
    </Routes>
    
  )
}

export default App


