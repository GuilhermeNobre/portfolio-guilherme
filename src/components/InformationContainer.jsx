import {AiFillPhone, AiTwotoneMail, AiFillEnvironment} from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const dataInfos = [
    {name:"phone", icon: <AiFillPhone id="phone-icon"/>, title: "Telefone", info:"(34) 99867-2460"},
    {name:"email", icon: <AiTwotoneMail id="mail-icon"/>, title: "E-Mail", info:"guinobre1602@gmail.com"},
    {name:"phone", icon: <AiFillEnvironment id="enviroment-icon"/>, title: "Endereço", info:"Uberlândia-MG"},
]

const InformationContainer = () => {
  return (
    <section id="information-container">
        {dataInfos.map((contact) => (
        <div className="info-card" id={contact.name} key={contact.name}>
            {contact.icon}
            <div>
                <h3>{contact.title}</h3>
                <p>{contact.info}</p>
            </div>
        </div>
        ))}
    </section>
  )
}

export default InformationContainer