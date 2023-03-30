import React from 'react'
import Image from 'next/image'
import firstImage from '@/public/images/1.jpg'
import second from '@/public/images/2.jpg'

export default function pets() {
    return (
        <div>


            {/* //  with static path/src and placeholder="blur"  while loading we get blur version of the picture */}
            <Image src={firstImage} placeholder="blur" alt="pet"  width="600" height="800" />
            <Image src={second} placeholder="blur" alt="pet" blurDataURL='' width="600" height="800" />
            {/* blurDataURL=''  is for dynamic images*/}








        </div>
    )
}