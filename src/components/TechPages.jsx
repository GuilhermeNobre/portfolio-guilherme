import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiPython,
  DiPostgresql,
} from "react-icons/di";

import {
  SiCplusplus,
  SiEspressif,
  SiGoland,
  SiAmazonaws,
  SiFlutter
} from "react-icons/si"

import {
  TbDeviceVisionPro 
} from "react-icons/tb"

import '../styles/components/pages.sass'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NET from 'vanta/src/vanta.net'

const technologies_text = {
  python: "Simples e poderoso. Minha primeira linguagem de programação onde desenvolvi diversos projetos que iniciaram minha carreira de programação",
  html: "Hyper espaço da internet sobre ele, sempre fui apaixonado por internet e sempre HTML para meus desenvolvimentos para internet",
  css: "Estilizando do início ao fim. Melhor padrão de estilização é claro que não pode faltar",
  js: "De texto ao Mundo. Um das melhores linguagens programação para fechar esse trio de perfeito de desenvolvimento web e responsivo",
  react: "Reação completa do framework mais utilizado no mundo inclusindo por mim para desenvolvimento, inclusive advinha qual framework montou esse site",
  postgres: "Banco mais potente, também um dos mais utilizado não vai passar despercebido para um das tecnologias que mais utilizo",
  cplusplus: "Rapido e potente e unico. A linguagem fundadora da padrão de alto nível, nunca deixa seu posto de rei, não faltaria aqui",
  espressif: "Conectando o mundo através do IoT, um pequeno objeto que fazer grandes mudanças é uma das minhas melhores habilidades",
  golang: "Poderosa linguagem da Google também entra no time de elite para desenvolvimento de projetos rápidos e escalaveis",
  amazon: "Nuvens repletas de dados, bancos, sites, IoT e tudo. Óbvio que maior sistema computação em nuvem do mundo não vai ficar para trás",
  flutter: "Um código para dominar todos, o framework mais famoso para mobilie está nossos bolsos e no meu portifólio de habilidades",
  comunica: "Comunicação é a chave do universo e vai ser nossa chave para desenvolvimento de todos projetos, por isso não pode deixar de ser falada",
  visao: "Vê com o computador já mais que real, também podemos fazer varios projetos com visual computing, podendo até utilizar IAs para diversos projetos."
}

const technologies = [
  { id: "python", name: "Python", icon: <DiPython />, textinfo: technologies_text['python']},
  { id: "html", name: "HTML5", icon: <DiHtml5 />, textinfo: technologies_text['html'] },
  { id: "css", name: "CSS3", icon: <DiCss3 />, textinfo: technologies_text['css'] },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, textinfo: technologies_text['js'] },
  { id: "react", name: "React", icon: <DiReact />, textinfo: technologies_text['react'] },
  { id: "golang", name: "Golang", icon: <SiGoland />, textinfo: technologies_text['golang'] },
  { id: "postgres", name: "Postgres", icon: <DiPostgresql />, textinfo: technologies_text['postgres'] },
  { id: "cplusplus", name: "C++", icon: <SiCplusplus />, textinfo: technologies_text['cplusplus'] },
  { id: "espressif", name: "Espressif", icon: <SiEspressif />, textinfo: technologies_text['espressif'] },
  { id: "aws", name: "AWS", icon: <SiAmazonaws />, textinfo: technologies_text['amazon'] },
  { id: "flutter", name: "Flutter", icon: <SiFlutter />, textinfo: technologies_text['flutter'] },
  { id: "visualcomputing", name: "Visual Computing", icon: <TbDeviceVisionPro />, textinfo: technologies_text['visao'] },
];

const TechPages = () => {

  useEffect(() => {
    NET({
      el: "#background-vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xff3c7d,
      backgroundColor: 0x251741,
      points: 20.00,
      maxDistance: 13.00
    })
  }, [])

  useEffect(() => {
    goTopPage();
  }, [])


  function goTopPage() {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <div className="bg" id="background-vanta">
      <div id="technologies-id">
        <div id="title-div">
          <h2>Tecnologias</h2>
          <div id="grad-line"/>
        </div>
        <section className="technologies-containter">
          <div className="technologias-grid">
            {technologies.map((tech) => (
              <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="technoloy-info">
                  <h3>{tech.name}</h3>
                  <p>
                    {tech.textinfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
            <Link className="btn" id="button-back" to="/" >Voltar</Link>
        </section>
      </div>
    </div>
  )
}

export default TechPages