import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import Pagination from "@/components/pagination";
import { Property } from "@/types/property";
import { fetchAPI } from "@/lib/fetch-api";

async function getListingData(value: number) {
    // Fetch data from external API
    const response = await fetchAPI(`/listings/pagination?page=${value}`)

    // Pass data to the page via props
    return response;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
    const currentPage = Number(searchParams?.page) || 1;

    const { data, meta } = await getListingData(currentPage);

    return (
        <div>
            <Header />
            <div className="banner">
                <Image className="absolute inset-0 w-full h-full object-cover" width={2000} height={2000} priority alt="Banner" src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="relative z-10 max-w-3xl m-auto">
                    <div className="mb-12">
                        <h1 className="text-5xl text-white font-bold mb-6">Premier Real Estate Solutions</h1>
                        <p className="text-white">Explore luxury homes, family-friendly neighborhoods, and investment properties. Our expert team offers personalized service and deep market knowledge to help you find the perfect property. Start your journey with us today!</p>
                    </div>
                    <div className="flex max-w-lg w-full bg-white rounded-full py-4 pr-4 pl-8 mx-auto items-center space-x-2">
                        <Input type="text" className="bg-white h-auto" placeholder="Enter your home address..." style={{ padding: 'calc(1rem - 1px) 1.25rem' }} />
                        <Button type="submit" size="lg" className="h-[52px] rounded-full">Continue</Button>
                    </div>
                </div>
            </div>
            <main className="bg-black">
                <div className="bg-white rounded-t-[48px]">
                    <div className="mx-auto py-10 px-16">
                        <div className="mb-8 space-y-1">
                            <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-12 mb-6">
                            {data.map((property: Property) => {
                                return (
                                    <div key={property.ListingKey} className="relative">
                                        <Badge variant="secondary" className="absolute top-4 left-4 uppercase rounded z-10 bg-white/80">For sale</Badge>
                                        <div className="overflow-hidden rounded-lg aspect-video">
                                            {property.Media && property.Media.length > 0 ? (
                                                <Image className="h-auto object-cover transition-all hover:scale-105 rounded-lg w-full" width={500} height={500} alt="Real estate" src={property.Media[0].MediaURL} />
                                            ) : null}
                                        </div>
                                        <div className="space-y-1 pt-4 pb-2 text-sm">
                                            <h3 className="text-base font-bold leading-none mb-2">{property.ListPrice}</h3>
                                            <p className="text-base text-muted-foreground">{property.UnparsedAddress}</p>
                                            <ul className="flex items-center space-x-4 text-sm text-muted-foreground font-medium uppercase">
                                                {property.BedroomsTotal > 0 ? <li>{property.BedroomsTotal} Beds</li> : null}
                                                {property.BathroomsFull > 0 ? <li>{property.BathroomsFull} Bathrooms</li> : null}
                                                {property.BathroomsHalf > 0 ? <li>{property.BathroomsHalf} Half Baths</li> : null}
                                                {property.LivingArea !== null ? <li>{property.LivingArea} Sq.ft.</li> : null}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <Pagination meta={meta} />
                    </div>
                </div>
            </main>
        </div>
    );
}
