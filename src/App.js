import './App.css';
import Categories from './Screens/Categories';
import CourseInfo from './Screens/CourseInfo';
import Home from './Screens/Home';
import { Route, Routes } from 'react-router';


function App() {


  return (
    
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courseInfo' element={<CourseInfo/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>

    </div>

    
  );
}

export default App;
