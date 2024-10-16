import { auth } from '@/server/auth';
import Logo from './logo';
import { UserButton } from './user-button';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Yeon_Sung } from 'next/font/google';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

//
const font1 = Yeon_Sung({
  subsets: ['latin'],
  weight: ['400'],
});
export default async function Nav() {
  const session = await auth();
  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between items-center md:gap-8 gap-4">
          <li className="flex flex-1">
            <Link href="/" aria-label="Smooh">
              <div className="flex gap-3 justify-center text-center align-bottom">
                <Logo />
                <p
                  className={cn(
                    ' bg-gradient-to-b from-rose-500 via-rose-600 to-rose-900 text-transparent inline-block bg-clip-text text-2xl  -ml-3 mb-4',
                    font1.className
                  )}
                >
                  SMOOH
                </p>
              </div>
            </Link>
          </li>
          {!session ? (
            <li className="flex items-center justify-center">
              <Button
                asChild
                className="bg-inherit hover:bg-inherit text-rose-500"
              >
                <Link href="/auth/login" className="flex gap-2">
                  <LogIn className="bg-none" size={16} /> <span>Login</span>
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
