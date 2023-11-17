import style from '../page.module.css'
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import Link from 'next/link'

export default function Contact() {
    return (
        <main className={style.main}>
      
        <h3>Let's Keep in Touch</h3>
        <div style={{display:'flex', padding:'1rem'}}>
        <Link target="_blank" href="mailto:lucia.e.fields@gmail.com"><MdOutlineEmail style={{width:'3rem', height: '3rem'}}/></Link>
        <Link target="_blank" href='https://www.linkedin.com/in/luciafields/'><FaLinkedin style={{width:'3rem', height: '3rem'}}/></Link>
        <Link target="_blank" href='https://github.com/lucyefranco'><FaGithub style={{width:'3rem', height: '3rem'}}/></Link>
        <Link target="_blank" href="https://docs.google.com/document/d/1REKVjlRaxzAf_9xzmKzsV_YIL3Jr1OHD/edit?usp=sharing&ouid=101981977920962452415&rtpof=true&sd=true"><IoDocumentOutline style={{width:'3rem', height: '3rem'}}/></Link>
        </div>
    </main>
    )
  }