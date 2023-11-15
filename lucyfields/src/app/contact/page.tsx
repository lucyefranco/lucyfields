import style from '../page.module.css'
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";

export default function Contact() {
    return (
        <main className={style.main}>
      
      <h1>Let's Keep in Touch</h1>
        <MdOutlineEmail />
        <p>Email</p>
        <FaLinkedin />
        <p>Linkedin</p>
        <FaGithub />
        <p>Github</p>
        <IoDocumentOutline />
        <p>Resume</p>
    </main>
    )
  }