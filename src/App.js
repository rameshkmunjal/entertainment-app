import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import HomeScreen from "./Screens/HomeScreen";
import MoviesScreen from "./Screens/MoviesScreen";
import SeriesScreen from "./Screens/SeriesScreen";
import BookmarkedScreen from "./Screens/BookmarkedScreen";

function App() {
  return (
    <div className="wrapper">      
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route exact path='/' element={<HomeScreen/>} />
          <Route path='/entertainment-app' element={<HomeScreen/>} />
          <Route path='/allmovies' element={<MoviesScreen/>} />
          <Route path='/series' element={<SeriesScreen/>} />
          <Route path='/bookmarked' element={<BookmarkedScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
