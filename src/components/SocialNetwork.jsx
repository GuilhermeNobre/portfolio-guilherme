import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"
import "../styles/components/socialnetwork.sass"

const socialnetwork = [
    { name: "linkedin", icon: <FaLinkedinIn />, linktext: "https://www.linkedin.com/in/guilherme-dantas-8a208622a/"},
    { name: "github", icon: <FaGithub />, linktext: "https://github.com/GuilhermeNobre"},
    { name: "instagram", icon: <FaInstagram />, linktext: "https://www.instagram.com/guigdantas16" },
]

const SocialNetwork = () => {
  return (
    <section id="social-networks">
        {socialnetwork.map((network) =>(
            <a href={network.linktext} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetwork