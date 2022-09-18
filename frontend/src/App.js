import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WelcomePage from './pages/WelcomePage';
import ChoosingPage from './pages/ChoosingPage'
function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            {/* <Route path='/ChoosingPage' element={<ChoosingPage />} /> */}
            {/* <Route path='/register' element={<Register />} /> */}
          </Routes>
        </div>
      </Router>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
