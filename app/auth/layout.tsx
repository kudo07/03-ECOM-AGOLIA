import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { La_Belle_Aurore, Yeon_Sung } from 'next/font/google';

const font = La_Belle_Aurore({
  subsets: ['latin'],
  weight: ['400'],
});
const font1 = Yeon_Sung({
  subsets: ['latin'],
  weight: ['400'],
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col ml-14 lg:flex-row items-center lg:h-screen relative">
        {/* Left Section (Image and Text) */}
        <div className="relative flex flex-col lg:flex-col w-full lg:w-1/2 items-center lg:justify-between lg:px-5">
          <div className="w-64 lg:-ml-10 mb-2 mt-10 lg:mb-0 lg:absolute lg:left-0 lg:transform lg:-translate-y-1/2 lg:top-1/4 ">
            <img src="/Logo2.gif" className="-mb-12" />
          </div>
          <div className="text-center lg:text-left lg:ml-44 hidden lg:block relative ">
            <Button
              className={cn(
                ' bg-gradient-to-b from-rose-500 via-rose-600 to-rose-900 text-transparent inline-block bg-clip-text lg:text-5xl lg:p-12 lg:-ml-12',
                font1.className
              )}
            >
              <p className="font-semibold text-5xl">SMOOH</p>
            </Button>
            <span
              className={cn('mt-2 lg:text-lg cursor-none  ', font.className)}
            >
              <p className="bg-gradient-to-b from-white via-gray-500 to-gray-700 inline-block text-transparent bg-clip-text mt-4 text-4xl font-bold">
                Shopping Made Smooth and Simple
              </p>
            </span>
          </div>
        </div>

        {/* Right Section (Login/Signup Component with Gray Background) */}
        <div className=" flex-1 w-full lg:w-1/2 lg:-mr-26 flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
  //   after writing the {children} the login page render from login folder
};

export default layout;
// to make this work to render the /auth/login we make to pass the children here to populated a;; the route sub segment in the auth folder to render it
// we extracts the children here
