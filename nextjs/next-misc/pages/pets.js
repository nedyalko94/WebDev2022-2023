import React from 'react'
import Image from 'next/image'

export default function pets() {
  return (
    <div>
        {
            // when is render download full image which is not good and slow 
            // ["1","2","3","4","5"].map(path=><img key={path} src={`/images/${path}.jpg`} alt="pet" width="600" height="800" />)

            //  next js with Image transform the image (size and format) and make load faster + lazy loading
            
                        ["1","2","3","4","5"].map(path=><Image key={path} src={`/images/${path}.jpg`} alt="pet" width="600" height="800" />)


        }
    </div>
  )
}
