import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'
import { About } from './pages/About'

// todo subscribe button 
const App = () => {

const [page, setPage] = useState('home')

  return (
    <>
      <Header page={page}  onPage={e => setPage(e)}/>

      {page == 'home' && <Home />}
      {page == 'posts' && <Posts />}
      {page == 'about' && <About />}

    </>
  )
}

export default App