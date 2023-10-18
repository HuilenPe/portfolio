import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/PublicPage/HomePage'
import HeroPage from '../pages/PublicPage/HeroPage'
import AboutMePage from '../pages/PublicPage/AboutMePage'
import ProjectsPage from '../pages/PublicPage/ProjectsPage'

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HeroPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/about' element={<AboutMePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
    </Routes>
  </BrowserRouter>
)

export default routes
