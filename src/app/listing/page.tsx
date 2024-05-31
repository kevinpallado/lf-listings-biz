import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import Pagination from "@/components/pagination";
import { Property } from "@/types/property";
import PropertyCard from "@/components/property-card";
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
            <div className="banner banner-overlay">
                <Image className="absolute inset-0 w-full h-full object-cover" width={2000} height={2000} priority alt="Banner" src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="relative z-10 max-w-3xl m-auto">
                    <div className="mb-12">
                        <h1 className="text-4xl text-white font-bold mb-6">Empowering Your Real Estate Experience</h1>
                        <p className="text-white">"Finding Homes, Building Dreams – Where Families Thrive Together"</p>
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
                        <div className="mb-8 space-y-2">
                            <h2 className="text-primary text-5xl font-bold tracking-tight">Listing Properties</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-12 mb-6">
                            {data.map((property: Property) => <PropertyCard key={property.ListingKey} data={property} />)}
                        </div>

                        <Pagination meta={meta} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
