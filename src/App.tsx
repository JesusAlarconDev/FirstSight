import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Today from './Pages/Today'
import Layout from './Layout'
import Challenges from './Pages/Challenges'
import Network from './Pages/Network'
import EarTraining from './Pages/EarTraining'
import Profile from './Pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
            <Routes>
              <Route path="/" element={<Today />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/network" element={<Network />} />
              <Route path="/eartraining" element={<EarTraining />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}
