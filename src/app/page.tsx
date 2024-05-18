import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Image from 'next/image';
import Link from 'next/link';
import { Property } from "@/types/property";
import { fetchAPI } from "@/lib/fetch-api";

async function getFeaturedData() {
    // Fetch data from external API
    const { data } = await fetchAPI('/listings/featured')

    // Pass data to the page via props
    return data
}

export default async function Home() {
    const data = await getFeaturedData();

    return (
        <div>
            <Header />
            <div className="banner">
                <Image className="absolute inset-0 w-full h-full object-cover" width={2000} height={2000} alt="Banner" priority src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="relative z-10 max-w-3xl m-auto">
                    <div className="mb-12">
                        <h1 className="text-5xl text-white font-bold mb-6">Premier Real Estate Solutions</h1>
                        <p className="text-white">Explore luxury homes, family-friendly neighborhoods, and investment properties. Our expert team offers personalized service and deep market knowledge to help you find the perfect property. Start your journey with us today!</p>
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
                            {data.slice(0, -1).map((property: Property) => {
                                return (
                                    <Link href={`/property/${property.ListingKey}`} key={property.ListingKey} className="relative">
                                        <Badge variant="secondary" className="absolute top-4 left-4 uppercase rounded z-10 bg-white/80">For sale</Badge>
                                        <div className="overflow-hidden rounded-lg aspect-video">
                                            <Image className="h-auto object-cover transition-all hover:scale-105 rounded-lg w-full" width={500} height={500} alt="Real estate" src={property.Media[0].MediaURL} />
                                        </div>
                                        <div className="space-y-1 pt-4 pb-2 text-sm">
                                            <h3 className="text-base font-bold leading-none mb-2">{property.ListPrice}</h3>
                                            <p className="text-base text-muted-foreground">{property.UnparsedAddress}</p>
                                            <ul className="flex items-center space-x-4 text-sm text-muted-foreground font-medium uppercase">
                                                {property.BedroomsTotal > 0 ? <li>{property.BedroomsTotal} Beds</li> : null}
                                                {property.BathroomsFull > 0 ? <li>{property.BathroomsFull} Bathrooms</li> : null}
                                                {property.BathroomsHalf > 0 ? <li>{property.BathroomsHalf} Half Baths</li> : null}
                                                <li>{property.LivingArea} Sq.ft.</li>
                                            </ul>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        <Button size="lg" className="h-[58px] rounded-full" asChild>
                            <Link href="/listing">
                                View More <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
