import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Movie = (curElem) => {
    const {id, title, type, synopsis} = curElem.jawSummary;
  return (
    <Link href={`/shows/${id}`}>
            <div className="relative cursor-pointer">
            <div className="group">
              <div className="relative">
              <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={500} height={230} class="w-full h-auto rounded-lg" />

          
          
                <div className="absolute inset-0 rounded-lg bg-black duration-500 opacity-0 group-hover:opacity-75"></div>
              </div>
          
              <div className="absolute  inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100">
               <div className='text-white text-xl px-2 py-1 rounded-lg'>
               {title}
               </div>
              </div>
            </div>
          </div>
          </Link>
  )
}

export default Movie