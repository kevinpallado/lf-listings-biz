import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Image from 'next/image';
import Link from 'next/link';
import LocationSwiper from "@/components/location-swiper";
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

    const quickLinks = [
        {
            name: 'New York',
            image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            name: 'Florida',
            image: 'https://images.pexels.com/photos/2406203/pexels-photo-2406203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ]

    return (
        <div>
            <Header />
            <div className="relative banner-overlay">
                <div className="absolute top-0 left-0 h-full w-full bg-black -z-10">
                    <div className="relative h-full overflow-hidden">
                        <video className="absolute -z-10 object-cover w-full h-full" poster="/thumbnail.jpg" loop muted autoPlay playsInline>
                            <source data-src="/banner.mp4" type="video/mp4" src="/banner.mp4" />
                        </video>
                    </div>
                </div>
                <div className="absolute inset-0 transition-opacity"></div>
                <div className="relative z-10 flex flex-col justify-end text-center max-w-3xl m-auto min-h-[80vh] pb-10 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24 px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">Empowering Your Real Estate Experience</h1>
                    <p className="text-white font-bold">Finding Homes, Building Dreams | Where Families Thrive Together</p>
                </div>
            </div>
            <main className="bg-black">
                <div className="bg-[#F7F7F7] rounded-t-[48px] overflow-hidden">
                    {/* <section className="relative mx-auto py-28 px-20">
                        <div className="flex gap-x-24">
                            <div className="mb-8 mx-auto space-y-2">
                                <h2 className="text-primary text-5xl font-bold tracking-tight">Our Regions</h2>
                                <p>Discover the home you’ve been waiting for.</p>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="grid grid-cols-3 gap-8">
                                    {quickLinks.map((link, index) => (
                                        <span key={index}>
                                            <Link href="/" className="relative z-10 inline-flex items-center justify-between text-base font-bold p-[calc(1rem-1px)_1rem] cursor-pointer outline-0 no-underline transition-all select-none whitespace-nowrap gap-x-4 min-w-full h-full rounded-lg bg-white [&:hover+div]:opacity-100 hover:bg-primary hover:text-white">
                                                <span className="line-clamp-1">{link.name}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                                            </Link>
                                            <div className="absolute top-0 right-0 bottom-0 w-4/6 h-full overflow-hidden opacity-0 transition-opacity pointer-events-none rounded-tr-[48px] region-overlay">
                                                <Image className="object-cover h-full w-full" width={500} height={500} src={link.image} alt="Property location" />
                                            </div>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section className="wrapper relative py-12 sm:py-16 md:lg-20 lg:py-24 xl:py-28 bg-white">
                        <div className="max-w-2xl w-full mb-8 space-y-2 sm:space-y-3">
                            <h2 className="section-title">Featured Properties</h2>
                            <p className="section-description">Check out some of our most exclusive houses, apartments, townhomes, penthouses, and more.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-6 md:lg-gap-8 lg:gap-10 xl:gap-12 mb-6">
                            {data.slice(0, -1).map((property: Property) => <PropertyCard key={property.ListingKey} data={property} />)}
                        </div>

                        <Button size="lg" className="h-[58px] rounded-full" asChild>
                            <Link href="/listing">
                                View More <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </Link>
                        </Button>
                    </section>

                    <section className="bg-[#F7F7F7]">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
                            <div className="relative opacity-80 aspect-video md:aspect-auto">
                                <Image className="absolute inset-0 w-full h-full object-cover" width={500} height={500} alt="banner" src="https://images.pexels.com/photos/105950/pexels-photo-105950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                            <div className="md:flex items-center justify-center py-12 md:py-28 px-6 sm:px-8 md:px-10 lg:pr-12 xl:pr-16 2xl:pr-20">
                                <div>
                                    <h4 className="text-sm text-left text-[#787878] font-bold uppercase tracking-wide mb-4 md:mb-8">Become an Agent</h4>
                                    <h2 className="text-3xl sm:text-5xl text-primary font-bold leading-tight max-w-md w-full mb-4 md:mb-6">Close Like A Million Dollar Agent </h2>
                                    <p className="mb-6">London Foster is the Fastest Growing, Innovative Real Estate Office in South Florida.</p>
                                    <Button size="lg" className="font-bold h-[58px] rounded-full" asChild>
                                        <Link href="https://www.joinlondonfoster.com/">
                                            Join Us <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="relative mx-auto py-28 bg-white">
                        <div className="max-w-2xl w-full mb-8 space-y-2 px-20">
                            <h2 className="text-primary text-5xl font-bold leading-tight">The Boldest New Developments</h2>
                            <p>Explore transformative new buildings that elevate modern luxury living.</p>
                        </div>

                        <LocationSwiper />
                    </section> */}
                </div>
            </main>
            <Footer />
        </div>
    );
}
