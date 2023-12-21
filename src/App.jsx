import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Wave from './components/Wave'
import './styles/components/app.sass'

function App() {
  return (
    <div id="portfolio">
      <h1>Guilherme Guimarães Dantas</h1>
      <Sidebar/>
      <MainContent/>
      {/* <Wave/> */}
    </div>
    
  )
}

export default App
