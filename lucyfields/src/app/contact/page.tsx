import style from '../page.module.css'
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import Link from 'next/link'

export default function Contact() {
    return (
        <main className={style.main}>

            <div style={{
                textAlign: "center", margin: 0,
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)"
            }}>
                <h3>Let's Keep in Touch</h3>
                <div style={{ display: 'flex', justifyContent: "space-between", padding: '1rem' }}>
                    <Link target="_blank" href='https://www.linkedin.com/in/luciafields/'><FaLinkedin style={{ width: '3rem', height: '3rem' }} /></Link>
                    <Link target="_blank" href='https://github.com/lucyefranco'><FaGithub style={{ width: '3rem', height: '3rem' }} /></Link>
                    <Link target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vTDRKWfIicczDwv8jfLfzOA4lO86v-uo8r7TVuU-Hd71RdBtUr-LGqBQHVnhtHA3g/pub"><IoDocumentOutline style={{ width: '3rem', height: '3rem' }} /></Link>
                </div>
                <Link href="mailto:lucia.e.fields@gmail.com"> lucia.e.fields@gmail.com</Link>
            </div>
        </main>
    )
}