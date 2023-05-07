import { useEffect, useState } from "react"

export const Header = ({ page, onPage }) => {

  let showSub = true
  if (page !== 'home') showSub = false
  const soundcloud = 'https://soundcloud.com/vittoopugliese'
  // inizializa en condicion, devuelve estado actual al refres
  const [showNavItems, setShowNavItems] = useState(window.innerWidth < 740)

  useEffect(() => {
    window.addEventListener('resize', handleToggle)

    function handleToggle() {
      (window.innerWidth > 740) ? setShowNavItems(false) : setShowNavItems(true)
    }

    return () => {
      window.removeEventListener('resize', handleToggle);
    };
  }, [])

  const [navToggler, setNavToggler] = useState()

  function navigate(e) {
    onPage(e)
    setNavToggler(false)
  }

  function openNavToggler(e) {
    if (e == 'open') {
      setNavToggler(true)
      if (navToggler) setNavToggler(false)
    } else setNavToggler(false)
  }

  return (
    <>
      <header>
        <nav>
          <p className="navName">Vittorio Pugliese</p>

          {!showNavItems && (
            <div className="navItems">
              <a onClick={() => navigate('home')} href="#">Home</a>
              <a onClick={() => navigate('allPosts')} href="#">All Posts</a>
              <a onClick={() => navigate('aboutMe')} href="#">About Me</a>
              <a href={soundcloud} target="_blank">SoundCloud</a>
            </div>
          )}

          <div className="navTogglerContainer">

            {showNavItems && (
              <>
                <div className="navSearch">
                  <img src="src/assets/search-alt.svg" width={'30px'} />
                </div>
                <div className="navToggle" onClick={() => openNavToggler('open')}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </>
            )}

            {
              (showNavItems && navToggler) && (
                <>
                  <div className="modalBackground" onClick={() => openNavToggler('close')}>
                    <div className="modalItemsContainer">
                      <a onClick={() => onPage('home')}>Home</a>
                      <a onClick={() => onPage('allPosts')}>All Posts</a>
                      <a onClick={() => onPage('aboutMe')}>About Me</a>
                      <a href={soundcloud} target="_blank">SoundCloud</a>
                    </div>
                  </div>
                </>
              )
            }

          </div>
        </nav>

        {showSub && (
          <div className="navTitleAndEmailContainer">
            <h1>Join and travel around my blog. <br /> <span>Get notified every post!</span></h1>
            <div className="navEmailContainer">
              <input type="text" placeholder="Your email address..." />
              <button>Subscribe</button>
            </div>
          </div>
        )}

      </header>
    </>
  )
}
