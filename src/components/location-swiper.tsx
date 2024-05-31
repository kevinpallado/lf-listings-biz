'use client';

import Image from 'next/image';
import Link from 'next/link';
import { register } from 'swiper/element/bundle';
import { useRef } from 'react';

// register Swiper custom elements
register();

const data = [
    {
        name: 'United States',
        capital: 'Washington, D.C.',
        image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Brazil',
        capital: 'Brasília',
        image: 'https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'United Kingdom',
        capital: 'London',
        image: 'https://images.pexels.com/photos/7245332/pexels-photo-7245332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Germany',
        capital: 'Berlin',
        image: 'https://images.pexels.com/photos/1590882/pexels-photo-1590882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'France',
        capital: 'Paris',
        image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Italy',
        capital: 'Rome',
        image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Spain',
        capital: 'Madrid',
        image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        image: 'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'China',
        capital: 'Beijing',
        image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'India',
        capital: 'New Delhi',
        image: 'https://images.pexels.com/photos/2792601/pexels-photo-2792601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Russia',
        capital: 'Moscow',
        image: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Mexico',
        capital: 'Mexico City',
        image: 'https://images.pexels.com/photos/604661/pexels-photo-604661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'South Africa',
        capital: 'Pretoria',
        image: 'https://images.pexels.com/photos/51809/pexels-photo-51809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        image: 'https://images.pexels.com/photos/13664798/pexels-photo-13664798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Egypt',
        capital: 'Cairo',
        image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Turkey',
        capital: 'Ankara',
        image: 'https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Saudi Arabia',
        capital: 'Riyadh',
        image: 'https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'South Korea',
        capital: 'Seoul',
        image: 'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
]

export default function LocationSwiper() {
    const swiperContainerRef = useRef<any>(null);

    return (
        <swiper-container
            ref={swiperContainerRef}
            slides-per-view="auto"
            pagination="true"
            free-mode="true"
            space-between="20"
            loop={data.length > 0 ? true : false}
            suppressHydrationWarning={true}
        >
            {data.map((media: any) => <swiper-slide class="location-slide" key={media.name} suppressHydrationWarning={true}>
                <Image className="aspect-video object-cover rounded-md cursor-pointer" width={500} height={500} alt="Property" src={media.image} />
                <Link href="/"></Link>
                <div className="relative z-10">
                    <h4 className="location-name">{media.name}</h4>
                    <p className="location-capital">{media.capital}</p>
                </div>
            </swiper-slide>)}
        </swiper-container>
    );
}
