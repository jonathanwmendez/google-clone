import Head from 'next/head'
import Avatar from '../components/avatar'
import Footer from '../components/footer'
import { MicrophoneIcon, Squares2X2Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?${term}`)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/googleGIcon.svg" />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          
          {/* Menu Icon */}
          <Squares2X2Icon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar 
            url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zTQ5uSpLHdtyXe2kptbR3fMV9tU9y67c3Q&usqp=CAU' 
            className={''}
          />
        </div>
      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image 
          src='https://www.google.com/logos/doodles/2022/seasonal-holidays-2022-6753651837109831.8-ladc.gif'
          height={100}
          width={300}
          alt='Google Logo'
        />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500' />
          <input 
            ref={searchInputRef} 
            type="text" 
            className='flex-grow focus:outline-none' 
          />
          <MicrophoneIcon className='h-5' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I&apos;m Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />

    </div>
  )
}
