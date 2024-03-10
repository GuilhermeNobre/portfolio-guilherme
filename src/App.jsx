import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
// import Wave from './components/Wave'
import GLOBE from 'vanta/src/vanta.globe'
import './styles/components/app.sass'
import { useEffect } from 'react'


function App() {
  useEffect(() => { 
    GLOBE({
      el: "#portfolio",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.20,
      color: 0xff005a,
      points: 11.00,
      maxDistance: 29.00,
      spacing: 17.00,
      size: 1.5,
      backgroundColor: 0x150622,
      showDots: false,
    })
  }, [])

  return (
    <div className='bg' id="portfolio">
      <h1>Guilherme Guimarães Dantas</h1>
      <Sidebar/>
      <MainContent/>
    </div>
    
  )
}

export default App
