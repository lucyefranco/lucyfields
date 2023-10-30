'use client'
import style from '../page.module.css'
import { auth, provider } from "../firebase-config"
import { signInWithPopup } from 'firebase/auth'
import { useAuthContext } from '../../../context/context'
import { useRouter } from 'next/navigation'




export default function Contact() {

    const router = useRouter();
    const { isAuth, setIsAuth } = useAuthContext();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", "true")
            setIsAuth(true)
            router.push('/')
        })
    }
    return (
        <main className={style.main}>
            <p>Welcome to login</p>
            <div>
                <p>Sign in with Google to continue</p>
                <button onClick={signInWithGoogle}>Sign in with google</button>
            </div>
        </main>
    )
}