import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import HeroImage from '../public/hero.jpg';

export default function Home() {
  return (
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center relative'>
      <Image src={HeroImage} alt='hero' fill className='absolute' />
      <div className='relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-neutral-900/90 rounded-md backdrop-blur-sm'>
        <Logo />
        <p className='mb-2'>Share your thoughts with the world!</p>
        <Link href='/post/new' className='btn'>
          Get Started
        </Link>
      </div>
    </div>
  );
}
