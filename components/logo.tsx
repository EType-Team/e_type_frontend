import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return ( 
        <Link href='/dashboard'>
            <Image
                src='/etype.png'
                alt="logo"
                width={140}
                height={0}
                priority={true}
            />
        </Link>
    )
}
 
export default Logo