
import Image from 'next/Image';
import fb from '../components/fb.webp';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';



function Header() {
  return (
    <div>
      {/* left */}
      <div className="flex items-center">
        <Image 
        src={fb}
        width={40}
        height={40}
        layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon 
          className='h-6 text-gray-600'
          />
          <input className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 ' type="text" placeholder="Search">

          </input>
        </div>

      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div>
            <HeaderIcon Icon={HomeIcon}/>
        </div>
      </div>

      {/* right */}
    </div>
  )
}

export default Header
