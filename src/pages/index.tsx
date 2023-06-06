import About from './about'
import Introduction from './introduction'
import Projects from './projects'
import Navbar from './components/navbar'
import Contact from './contact'
import { useRef } from 'react'

function Home() {
  const aboutRef = useRef<null | HTMLDivElement>(null)
  const projectRef = useRef<null | HTMLDivElement>(null)
  const contactRef = useRef<null | HTMLDivElement>(null)

  const navClicked = (section: number) => {
    switch (section) {
      //   case 0:
      //     IntroRef.current?.scrollIntoView({behavior: 'smooth'});
      //     break;
      case 1:
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 2:
        projectRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 3:
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        break
    }
  }
  return (
    <div className='cursor-default'>
      <div className='fixed bg-[url(/blackbackground.svg)] bg-cover w-full h-[100vh] z-[-10] bg-center'></div>
      <Navbar clicked={navClicked} />
      <Introduction />
      <span ref={aboutRef}>
        <About />
      </span>
      <span ref={projectRef}>
        <Projects />
      </span>
      <span ref={contactRef}>
        <Contact />
      </span>
    </div>
  )
}

export default Home
