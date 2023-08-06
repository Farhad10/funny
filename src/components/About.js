import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
const page = () => {
  
  return (
    <>
    <div className='lg:flex'>
      <div className='lg:w-[50%] lg:ml-32 mx-4'>
        <div className='flex justify-center lg:mt-16'>
      <Image width={100} height={100} src="/images/logo.webp" className="" alt="PolyPlex Logo" />
      </div>
<h2 className='text-2xl font-semibold flex justify-center my-6'>
The Best Shows
</h2>
<p className='flex justify-center'>
They combine high end furniture materials with creative styles that make them simply unique. Whether it's a bed base, a leather sofa, a solid wood dining table, or a sideboard, every piece of furniture can be a piece of luxury.
A good quality piece of furniture should be structurally sound, solid and well-built to ensure its prolonged use over the years. You should feel safe when sitting in, or leaning on the piece, and you shouldn't be able to recognize any sway, give or flex in it.
</p>
      </div>
      <div className=' grid grid-cols-2 gap-4 lg:ml-20 lg:mr-32 m-4'>
      <div className="relative">
  <div className="group">
    <div className="relative">
    <Image width={250} height={350} src="/images/sacredgame.jpg" className="rounded-lg w-60 h-60 " alt="About4" />


      <div className="absolute inset-0 rounded-lg bg-black duration-500 opacity-0 group-hover:opacity-75"></div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
                href="/login">  <Button text="Read More" /></Link>
    </div>
  </div>
</div>
<div className="relative">
  <div className="group">
    <div className="relative">
    <Image width={250} height={350} src="/images/mimi.webp" className="rounded-lg w-60 h-60 " alt="About4" />


      <div className="absolute inset-0 bg-black rounded-lg duration-500 opacity-0 group-hover:opacity-75"></div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
                href="/login">  <Button text="Read More" /></Link>
    </div>
  </div>
</div>
<div className="relative">
  <div className="group">
    <div className="relative">
    <Image width={250} height={350} src="/images/rrr.jpg" className="rounded-lg w-60 h-60 " alt="About5" />


      <div className="absolute inset-0 bg-black rounded-lg duration-500 opacity-0 group-hover:opacity-75"></div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
                href="/login">  <Button text="Read More" /></Link>
    </div>
  </div>
</div>
<div className="relative">
  <div className="group">
    <div className="relative">
    <Image width={250} height={350} src="/images/jamtara.jpg" className="rounded-lg w-60 h-60 " alt="About4" />


      <div className="absolute inset-0 bg-black rounded-lg duration-500 opacity-0 group-hover:opacity-75"></div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
                href="/login">  <Button text="Read More" /></Link>
    </div>
  </div>
</div>

      </div>
    </div>
    <div className='lg:flex lg:my-16 my-10'>
    <div className='lg:w-[45%] lg:mx-20 mx-4 lg:h-screen items-center '>
      
      <h2 className='text-2xl font-semibold flex justify-center my-6'>
      Peaky Blinder
      </h2>
      <p className='flex justify-center mb-6'>
      Peaky Blinders is a crime drama centred on a family of mixed Irish Traveller and Romani origins based in Birmingham, England, starting in 1919, several months after the end of the First World War. It centres on the Peaky Blinders street gang and their ambitious, cunning crime boss Tommy Shelby (Murphy). The gang comes to the attention of Major Chester Campbell (Neill), a detective chief inspector in the Royal Irish Constabulary sent over by Winston Churchill from Belfast, where he had been sent to clean up the city of the Irish Republican Army flying columns, the Communist Party of Great Britain, street gangs, and common criminals.The first series concludes on 3 December 1919—"Black Star Day", the event where the Peaky Blinders plan to take over Billy Kimber's betting pitches at the Worcester Races.
      </p>
      <div className='flex justify-center'>
      <Button text="Watch Now" />
      </div>
            </div>
    <div className='lg:w-[50%] lg:ml-32 m-4 lg:order-first order-last'>
    <div className="relative">
  <div className="group">
    <div className="relative">
    <Image width={1000} height={800} src="/images/aboutPeaky.jpg" className="w-full h-auto rounded-lg" alt="PolyPlex Logo" />



      <div className="absolute inset-0 bg-black rounded-lg duration-500 opacity-0 group-hover:opacity-75"></div>
    </div>

    <div className="absolute inset-0 lg:mt-28 mt-6 opacity-0 group-hover:opacity-100">
     <div className='text-white text-3xl my-6 flex  items-center justify-center'>
      Peaky Blinder 
     </div>
     <div className='flex  items-center justify-center'>
      <Button text="Watch Now" />
      </div>
    </div>
  </div>
</div>

    </div>
     
     
    </div>
    </>
  )
}

export default page