import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Home() {
  const { user } = useUser();
  console.log('USER ➡️', user);
  return (
    <div>
      <h1>Welcome to Blog Bonanza! 😃</h1>
      <div>
        <Link href='/api/auth/login'>Login</Link>
      </div>
    </div>
  );
}
