
import './App.css'
import Login from './Pages/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TreatmentList from './Pages/TreatmentList/TreatmentList'
import { Provider } from './AuthContext'
function App() {
  return (
    <Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/list' element={<TreatmentList/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
