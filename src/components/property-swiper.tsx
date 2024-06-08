'use client';

import Image from 'next/image';
import { Property } from "@/types/property";
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();

export default function PropertySwiper({ data }: { data: Property['Media'] }) {
    return (
        <div>
            <div className="absolute inset-0 w-full h-full object-cover overflow-hidden z-0">
                <swiper-container
                    space-between="10"
                    loop="true"
                    thumbs-swiper=".swiper-listing-thumbs"
                    effect="fade"
                    className="swiper-container"
                    suppressHydrationWarning={true}
                    class="absolute inset-0 w-full h-full object-cover overflow-hidden z-0"
                >
                    {data.map((media: any) => <swiper-slide class="-mt-2.5" key={media.MediaURL} suppressHydrationWarning={true}><Image className="w-full h-full aspect-video object-cover" priority width={1000} height={1000} alt="Property" src={media.MediaURL} /></swiper-slide>)}
                </swiper-container>
            </div>
            <div className="hidden md:block max-w-screen-md w-full mx-auto px-16">
                <swiper-container
                    slides-per-view={data.length > 4 ? 4 : data.length}
                    pagination="true"
                    space-between="20"
                    loop={data.length > 0 ? true : false}
                    watch-slides-progress="true"
                    class="swiper-listing-thumbs"
                    suppressHydrationWarning={true}
                >
                    {data.map((media: any) => <swiper-slide key={media.MediaURL} suppressHydrationWarning={true}><Image className="aspect-video object-cover rounded-md cursor-pointer" width={500} height={500} alt="Property" src={media.MediaURL} /></swiper-slide>)}
                </swiper-container>
            </div>
        </div>
    );
}
