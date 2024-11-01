import Link from 'next/link';

interface LogoProps{
    link?: boolean,
}

const Logo = ({ link = true } : LogoProps ) => {
    const logo = <h4>UMT DM</h4>;
    return link ? <Link href="/" >{logo}</Link> : logo;
};

export default Logo;