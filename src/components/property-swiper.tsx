'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';
import { Property } from "@/types/property";
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();

export default function PropertySwiper({ data }: { data: Property['Media'] }) {
    const [bannerUrl, setBannerUrl] = useState(data[0].MediaURL);
    const swiperContainerRef = useRef<any>(null);

    const getBannerUrl = (e: any, value: string) => {
        if (bannerUrl === value) return;
        setBannerUrl(value)

        e.target.classList.add('opacity-80', 'cursor-wait');
    };

    const handleOnLoad = () => {
        if (swiperContainerRef.current) {
            const slide = swiperContainerRef.current?.querySelectorAll('swiper-slide');
            for (let i = 0; i < slide.length; i++) {
                slide[i].querySelector('img').classList.remove('opacity-80', 'cursor-wait');
            }
        }
    };

    return (
        <div>
            <Image className="absolute inset-0 w-full h-full object-cover" width={2000} height={2000} alt="Banner" priority src={bannerUrl} onLoad={handleOnLoad} />
            <div className="max-w-screen-md w-full mx-auto px-16">
                <swiper-container
                    ref={swiperContainerRef}
                    slides-per-view={data.length > 4 ? 4 : data.length}
                    pagination="true"
                    space-between="20"
                    loop={data.length > 0 ? true : false}
                    suppressHydrationWarning={true}
                >
                    {data.map((media: any) => <swiper-slide key={media.MediaURL} suppressHydrationWarning={true}><Image className="aspect-video object-cover rounded-md cursor-pointer" width={500} height={500} alt="Property" src={media.MediaURL} onClick={(e) => getBannerUrl(e, media.MediaURL)} /></swiper-slide>)}
                </swiper-container>
            </div>
        </div>
    );
}
