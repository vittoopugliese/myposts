import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { AllPosts } from './pages/AllPosts'
import { About } from './pages/About'


const App = () => {

const [page, setPage] = useState('home')

  return (
    <>
      <Header page={page}  onPage={e => setPage(e)}/>

      {page == 'home' && <Home />}
      {page == 'allPosts' && <AllPosts />}
      {page == 'aboutMe' && <About />}

    </>
  )
}

export default App