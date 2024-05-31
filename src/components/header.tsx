import Image from 'next/image';
import Link from 'next/link'
import Logo from '@/public/logo.svg';

export default function Header() {
    return (
        <header className="absolute top-4 left-0 right-0 z-20 w-full flex justify-between items-center py-4 pr-4 pl-10">
            <div className='flex items-center justify-start text-left max-w-[175px] h-[40px] overflow-hidden border-0 outline-0'>
                <Image
                    priority
                    src={Logo}
                    alt="Follow us on Twitter"
                    className='max-h-full'
                />
            </div>
            <nav className="flex items-center text-white">
                <Link className="text-sm font-semibold transition-colors hover:text-white py-2 px-4" href="/">Home</Link>
                <Link className="text-sm font-semibold transition-colors hover:text-white py-2 px-4" href="/">About Us</Link>
                <Link className="text-sm font-semibold transition-colors hover:text-white py-2 px-4" href="/property">Property</Link>
                <Link className="text-sm font-semibold transition-colors hover:text-white py-2 px-4" href="/">Blog</Link>
            </nav>
        </header>
    )
}
