import React from 'react'
import Image from 'next/image';
const page = async ({params}) => {
    const id = params.id
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f2194a27d3mshc68cf2c54e4e23ep1e2e3ejsne8c62546c0a3',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;
  return (
    <div class=" lg:m-20 mt-20">
         <div
                class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div
                  class="shrink-1  mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                                 <Image src={main_data.backgroundImage.url} alt={main_data.title} width={500} height={270} class="w-full h-auto rounded-lg rounded-b-none" />

                </div>
          
                
                <div class="mb-12  lg:p-12 p-4 rounded-lg md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <div class="px-4 py-2 mt-2">
                <h1 class="font-bold text-2xl uppercase py-2"  >Type : {main_data.type} </h1>
                    <h2 class=" pb-2 mr-1 text-xl">
                   Title : {main_data.title}
                    </h2>
                    <p class=" pb-2 mr-1">
                   Synopsis : {main_data.synopsis}
                    </p>
                    <p class=" pb-2 mr-1">
                   Synopsis : {main_data.synopsisRegular}
                    </p>
               
            </div>
                </div>
              </div>
    </div>
  )
}

export default page