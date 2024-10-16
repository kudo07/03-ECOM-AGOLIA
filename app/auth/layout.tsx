import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Inknut_Antiqua, Roboto } from 'next/font/google';

const font = Roboto({
  subsets: ['latin'],
  weight: ['700'],
});
const font1 = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400'],
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col ml-14 lg:flex-row items-center lg:h-screen relative">
        {/* Neon Green Circle for Background Effect */}
        <div className="absolute inset-0 z-[-1] flex justify-center items-center">
          {/* <div className="w-72 h-72 rounded-full bg-cyan-500 opacity-30"></div> */}
        </div>

        {/* Left Section (Image and Text) */}
        <div className="relative flex flex-col lg:flex-col w-full lg:w-1/2 items-center lg:justify-between  lg:px-0">
          <div className=" w-20 lg:w-36 lg:-ml-10 mb-10 mt-10 lg:mb-0 lg:absolute lg:left-0 lg:transform lg:-translate-y-1/2 lg:top-1/4 ">
            <img src="/icon.png" alt="Descriptive Text" className="-mb-12" />
          </div>
          <div className="text-center lg:text-left lg:ml-44 hidden lg:block relative ">
            <Button
              className={cn(
                ' bg-gradient-to-b from-pink-500 via-pink-600 to-pink-900 text-transparent inline-block bg-clip-text text-8xl lg:text-5xl lg:p-12 lg:-ml-12  ',
                font.className
              )}
            >
              SMOOH
            </Button>
            <span
              className={cn(
                'mt-2 text-base lg:text-lg cursor-none ',
                font1.className
              )}
            >
              <p className="bg-gradient-to-b from-white via-gray-300 to-gray-700 inline-block text-transparent bg-clip-text mt-4 text-xl">
                Quick Commerce for stationary's stuff
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
