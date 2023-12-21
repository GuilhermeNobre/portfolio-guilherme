import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const dataInfos = [
    {name:"phone", icon: <AiFillPhone id="phone-icon"/>, title: "Telefone", info:"(34) 99921-2212"},
    {name:"email", icon: <AiOutlineMail id="mail-icon"/>, title: "E-Mail", info:"guinobre1602@gmail.com"},
    {name:"phone", icon: <AiFillEnvironment id="enviroment-icon"/>, title: "Endereço", info:"Uberlândia-MG"},
]

const InformationContainer = () => {
  return (
    <section id="information-container">
        {dataInfos.map((contact) => (
        <div className="info-card">
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