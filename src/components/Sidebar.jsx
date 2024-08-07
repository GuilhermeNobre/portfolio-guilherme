import Avatar from "../img/eu.jpeg"
import InformationContainer from "./InformationContainer"
import SocialNetwork from "./SocialNetwork"
import Curriculm from "../files/cv.pdf"
import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Guilherme Dantas" />
      <p className="title">Desenvolvedor IoT e Software</p>
      <SocialNetwork/>
      <InformationContainer/>
      <a id="btn-cv" href={Curriculm} download="Guilherme Dantas Currículo" className="btn">
        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar