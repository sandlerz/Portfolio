import { Routes, Route } from 'react-router-dom'
import Main from './Pages/Main/Main'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}
