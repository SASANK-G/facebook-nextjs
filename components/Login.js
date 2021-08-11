import Image from 'next/Image';
import fb from '../components/fb.webp';
import { signIn } from 'next-auth/client';

function Login() {
  return (
    <div className=" bg-gray-200 w-screen h-screen flex flex-col items-center justify-evenly shadow-xl">
      <Image
        src={fb}
        width={200}
        height={200}
        objectFit ="contain"
      
      />
      <h1 onClick={signIn} className="w-1/5 p-4  shadow-2xl bg-blue-500 rounded-full text-white text-center cursor-pointer">Login to facebook</h1>
    </div>
  )
}

export default Login
