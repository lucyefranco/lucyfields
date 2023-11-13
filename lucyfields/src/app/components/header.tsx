import NavBar from './navbar'
import { Send_Flowers } from 'next/font/google'

const sendFlowers = Send_Flowers({weight: '400', subsets: ['latin']})

export default function Header() {
  return (
    <header>
      <div style={{padding: '1rem', textAlign: 'center'}}>
        <h1 style={{fontSize: '4.5rem', padding: '1rem'}} className={sendFlowers.className}>Lucy Fields</h1>
          <NavBar />
      </div>
    </header>
  )
}