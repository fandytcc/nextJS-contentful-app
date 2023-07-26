import Link from 'next/link';
import Image from 'next/image'
import Container from './Container';

export default function Header() {
  return (
    <header className="py-5 px-20 fixed z-10 w-full bg-white top-0">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          </Link>
        </Container>
      </nav>
    </header>
  )
}