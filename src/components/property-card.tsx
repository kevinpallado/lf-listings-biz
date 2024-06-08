import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import Link from 'next/link';
import { Property } from "@/types/property";
import slugify from "slugify";

export default function PropertyCard({ data } : { data: Property}) {
    const slug = slugify(data.UnparsedAddress, { lower: true });
    return (
        <Link href={`/property/${data.ListingId}_${data.ListingKey}_${slug}`} className="relative">
            <Badge variant="secondary" className="absolute top-3 left-3 sm:top-4 sm:left-4 uppercase rounded z-10 bg-white/80 text-[10px] sm:text-sm">{data.ListingType}</Badge>
            <div className="overflow-hidden rounded-lg aspect-video">
                {data.Media && data.Media.length > 0 ? (
                    <Image className="h-auto object-cover transition-all hover:scale-105 rounded-lg w-full" width={500} height={500} alt="Property Image" src={data.Media[0].MediaURL} />
                ) : null}
            </div>
            <div className="pt-4 pb-2 text-sm">
                <h3 className="text-base font-bold leading-none mb-2" suppressHydrationWarning={true}>{data.ListPrice}</h3>
                <p className="text-base text-muted-foreground mb-4">{data.UnparsedAddress}</p>
                <ul className="flex flex-wrap items-center space-x-1.5 lg:space-x-4 text-xs lg:text-sm text-muted-foreground font-medium uppercase">
                    {data.BedroomsTotal > 0 ? <li className="inline-flex items-center after:content-[''] after:block after:w-[3px] after:h-[3px] after:bg-black after:ml-1.5 lg:after:ml-4 after:rounded-full text-[#182230]">{data.BedroomsTotal} Beds</li> : null}
                    {data.BathroomsFull > 0 ? <li className="inline-flex items-center after:content-[''] after:block after:w-[3px] after:h-[3px] after:bg-black after:ml-1.5 lg:after:ml-4 after:rounded-full text-[#182230]">{data.BathroomsFull} Bathrooms</li> : null}
                    {data.BathroomsHalf > 0 ? <li className="inline-flex items-center after:content-[''] after:block after:w-[3px] after:h-[3px] after:bg-black after:ml-1.5 lg:after:ml-4 after:rounded-full text-[#182230]">{data.BathroomsHalf} Half Baths</li> : null}
                    {data.LivingArea ? <li className="text-[#182230]">{data.LivingArea} Sq.ft.</li> : null}
                </ul>
            </div>
        </Link>
    )
}
