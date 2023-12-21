import Avatar from "../img/eu.jpeg"
import InformationContainer from "./InformationContainer"
import SocialNetwork from "./SocialNetwork"
import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Guilherme Dantas" />
      <p className="title">Desenvolvedor IoT</p>
      <SocialNetwork/>
      <InformationContainer/>
      <p href="" className="btn">
        Download Currículo
      </p>
    </aside>
  )
}

export default Sidebar