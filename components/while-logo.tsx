import Image from "next/image";
import Link from "next/link";

const WhiteLogo = () => {
    return (
        <Link href='/'>
            <Image
                src='/etype-white.png'
                alt="logo"
                width={140}
                height={0}
                priority={true}
            />
        </Link>
    );
}
 
export default WhiteLogo;