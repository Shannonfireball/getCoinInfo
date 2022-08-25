import './App.css';
import Search from './components/Search';
import Container from '@mui/material/Container';
import DisplayCoins from './components/displayCoins';
import AddNewWord from './components/addWord';
import HeaderCard from './components/headerCard';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullDetails from './components/fullDetails';

const App =()=> {
      return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <Container maxWidth="md"> 
              <Search/>
              <HeaderCard/>
              <DisplayCoins/>
          </Container>}>    
    </Route>
    <Route path="/details" element={<FullDetails/>} >
    <Route index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select a coin</p>
              </main>
            }
          />
    <Route path=":details" element={<FullDetails/>} />
    </Route>
    <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />    
  </Routes>    
  </BrowserRouter>
      );
}


export default App;


