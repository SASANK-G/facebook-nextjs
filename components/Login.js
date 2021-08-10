import Image from 'next/Image';
import fb from '../components/fb.webp';
import { signIn } from 'next-auth/client';

function Login() {
  return (
    <div className="grid justify-center">
      <Image
        src={fb}
        width={200}
        height={200}
        objectFit ="contain"
      
      />
      <h1 onClick={signIn} className="p-4 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login to facebook</h1>
    </div>
  )
}

export default Login
