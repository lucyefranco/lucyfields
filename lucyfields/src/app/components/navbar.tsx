import Link from 'next/link'
export default function NavBar() {
    return (
        <div style={{margin: '1rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Link style={{fontSize:"1.2rem"}} href='/'> Home </Link>
                <Link style={{fontSize:"1.2rem"}} href='/about'> About </Link>
                <Link style={{fontSize:"1.2rem"}} href='/blog'> Blog </Link>
                <Link style={{fontSize:"1.2rem"}} href='/contact'> Contact </Link>
        </div>
    )
}