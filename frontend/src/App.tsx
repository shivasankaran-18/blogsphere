import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { RecoilRoot } from 'recoil'
import { Publish } from './pages/Publish'

function App() {
 1

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="/publish" element={<Publish />} />



          
        </Routes>
      
      </BrowserRouter>
      </RecoilRoot> 
    </>
  )
}

export default App
