import { useUser } from '@auth0/nextjs-auth0/client';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../Logo';

export const AppLayout = ({ children }) => {
  const { user } = useUser();
  return (
    <div className='grid grid-cols-[300px_1fr] h-screen max-h-screen'>
      <div className='flex flex-col text-white overflow-hidden'>
        <div className='bg-neutral-800 px-2'>
          <div>
            <Logo />
          </div>
          <Link
            className='bg-green-500 tracking-wider text-white font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block'
            href='/post/new'
          >
            New Post
          </Link>
          <Link href='/token-topup' className='block mt-2 text-center'>
            <FontAwesomeIcon className='text-yellow-500' icon={faCoins} />
            <span className='pl-1'>0 Tokens</span>
          </Link>
        </div>
        <div className='flex-1 overflow-auto bg-gradient-to-b from-neutral-800 to-rose-800'>
          List of Posts
        </div>
        <div className='bg-rose-800 flex items-center gap-2 border-t border-t-black/50 h-20 px-2'>
          {' '}
          {!!user ? (
            <>
              <div className='min-w-[50px]'>
                <Image
                  src={user.picture}
                  alt={user.name}
                  width={50}
                  height={50}
                  className='rounded-full'
                />
              </div>
              <div className='flex-1'>
                <div className='font-bold'>{user.email}</div>
                <Link className='text-sm' href='/api/auth/logout'>
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <Link href='/api/auth/login'>Login</Link>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
