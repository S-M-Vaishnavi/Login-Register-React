import DashBoard from './pages/DashBoard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterPage/>}/>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
