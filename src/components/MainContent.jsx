import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ProjectsContainers from './ProjectsContainers'
import TechologiesContainer from './TechologiesContainer'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer/>
      <TechologiesContainer/>
      <ProjectsContainers/>
    </main>
  )
}

export default MainContent