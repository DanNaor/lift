import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WelcomePage from './pages/WelcomePage';
import ChoosingPage from './pages/ChoosingPage'
import WorkoutSession from './pages/WorkoutSession';
function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/ChoosingPage' element={<ChoosingPage />} />
            <Route path='/WorkoutSession' element={<WorkoutSession />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
