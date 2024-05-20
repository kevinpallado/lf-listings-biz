import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Image from 'next/image';
import Link from 'next/link';
import { Property } from "@/types/property";
import PropertyCard from "@/components/property-card";
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
            <div className="relative banner-overlay">
                <div className="absolute top-0 left-0 h-full w-full bg-black -z-10">
                    <div className="relative h-full overflow-hidden">
                        <video className="absolute -z-10 object-cover w-full h-full" poster="https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/so_0,eo_0/nxyi3r8gi6tccpz4ke5p/8.jpg" loop muted autoPlay playsInline>
                            <source data-src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/nxyi3r8gi6tccpz4ke5p/8.webm" type="video/webm" src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/nxyi3r8gi6tccpz4ke5p/8.webm" />
                            <source data-src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/nxyi3r8gi6tccpz4ke5p/8.mp4" type="video/mp4" src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/nxyi3r8gi6tccpz4ke5p/8.mp4" />
                        </video>
                    </div>
                </div>
                <div className="absolute inset-0 transition-opacity"></div>
                <div className="relative z-10 flex flex-col justify-end text-center max-w-3xl m-auto min-h-[80vh] pb-28">
                    <h1 className="text-7xl text-white font-bold mb-6">Premier Real Estate Solutions</h1>
                    <p className="text-white font-bold">Explore luxury homes, family-friendly neighborhoods, and investment properties. Our expert team offers personalized service and deep market knowledge to help you find the perfect property. Start your journey with us today!</p>
                </div>
            </div>
            <main className="bg-black">
                <div className="bg-white rounded-t-[48px]">
                    <div className="mx-auto py-10 px-16">
                        <div className="mb-8 space-y-1">
                            <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-12 mb-6">
                            {data.slice(0, -1).map((property: Property) => <PropertyCard key={property.ListingKey} data={property} />)}
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
