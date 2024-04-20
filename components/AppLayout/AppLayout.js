import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';

export const AppLayout = ({ children }) => {
  const { user } = useUser();
  return (
    <div className='grid grid-cols-[300px_1fr] h-screen max-h-screen'>
      <div className='flex flex-col text-white overflow-hidden'>
        <div className='bg-neutral-800'>
          <div>Logo</div>
          <div>Button</div>
          <div>Tokens</div>
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
