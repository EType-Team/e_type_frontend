import Image from "next/image";

const Logo = () => {
    return ( 
        <>
            <Image
                src='/etype.png'
                alt="logo"
                width={140}
                height={20}
            />
        </>
     );
}
 
export default Logo;