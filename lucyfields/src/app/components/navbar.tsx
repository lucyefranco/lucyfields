import Link from 'next/link'
export default function NavBar() {
    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <nav style={{display:'flex', justifyContent:'space-between'}}>
                <Link href='/'> Home </Link>
                <Link href='/about'> About </Link>
                <Link href='/blog'> Blog </Link>
                <Link href='/contact'> Contact </Link>
            </nav>
        </div>
    )
  }