import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
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
            <div className="banner banner-overlay">
                <Image className="absolute inset-0 w-full h-full aspect-video object-cover" width={2000} height={2000} priority alt="Banner" src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="relative z-10 flex flex-col justify-end text-center max-w-3xl m-auto">
                    <h1 className="text-5xl text-white font-bold mb-6">Premier Real Estate Solutions</h1>
                    <p className="text-white">Explore luxury homes, family-friendly neighborhoods, and investment properties. Our expert team offers personalized service and deep market knowledge to help you find the perfect property. Start your journey with us today!</p>
                </div>
            </div>
            <main className="bg-black">
                <div className="bg-white rounded-t-[48px]">
                    <div className="mx-auto py-28 px-20">
                        <div className="max-w-max-w-2xl mb-8 space-y-1">
                            <h2 className="text-5xl text-primary font-bold tracking-tight">Featured Properties</h2>
                            <p>Check out some of our most exclusive houses, apartments, townhomes, penthouses, and more.</p>
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
            <Footer />
        </div>
    );
}
