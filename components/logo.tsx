import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <>
            <Link href='/dashboard'>
                <Image
                    src='/etype.png'
                    alt="logo"
                    width={140}
                    height={20}
                />
            </Link>
        </>
     );
}
 
export default Logo;