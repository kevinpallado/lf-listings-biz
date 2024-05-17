import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import { fetchAPI } from "@/lib/fetch-api";

type Params = {
    id: string | number
};

async function findOne(value: Params) {
    // Fetch data from external API
    const { data } = await fetchAPI(`/listings/property/${value.id}`)

    // Pass data to the page via props
    return data
}

export default async function Page({ params }: { params: Params }) {
    const data = await findOne(params);

    return (
        <div>
            <Header />
            <div className="banner">
                <Image className="absolute inset-0 w-full h-full object-cover" width={2000} height={2000} alt="Banner" priority src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="relative z-10 max-w-3xl mt-auto mx-auto">
                    <div className="mb-12">
                        <h1 className="text-5xl text-white font-bold mb-6">{data.listing_directory}</h1>
                        <p className="text-white text-lg">{data.listing_price}</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <Image className="aspect-video object-cover rounded-md" width={1000} height={1000} alt="Property" src="https://images.pexels.com/photos/3625713/pexels-photo-3625713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Image className="aspect-video object-cover rounded-md" width={1000} height={1000} alt="Property" src="https://images.pexels.com/photos/3639539/pexels-photo-3639539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Image className="aspect-video object-cover rounded-md" width={1000} height={1000} alt="Property" src="https://images.pexels.com/photos/3639504/pexels-photo-3639504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Image className="aspect-video object-cover rounded-md" width={1000} height={1000} alt="Property" src="https://images.pexels.com/photos/7579042/pexels-photo-7579042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                </div>
            </div>
            <main className="bg-black">
                <div className="bg-white rounded-t-[48px]">
                    <div className="mx-auto pb-10 px-16">
                        <div className="sticky z-10 bg-white top-0 mb-10">
                            <div className="flex items-center">
                                <ul className="flex items-center flex-grow">
                                    <li className="max-w-60 w-full py-10 px-4 text-center">Overview</li>
                                    <li className="max-w-60 w-full py-10 px-4 text-center">Features & Amenities</li>
                                    <li className="max-w-60 w-full py-10 px-4 text-center">Lifestyle Index</li>
                                </ul>
                                <div className="space-x-2">
                                    <Button size="lg" variant="outline" className="h-[56px] rounded-full">Get in Touch</Button>
                                    <Button size="lg" className="h-[56px] rounded-full">Schedule a Tour</Button>
                                </div>
                            </div>
                            <Separator />
                        </div>

                        <div className="flex space-x-6">
                            <div className="flex-1 min-w-0">
                                <Breadcrumb className="mb-10">
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                        <BreadcrumbPage>{data.listing_directory}</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>

                                <div className="mb-20">
                                    <h2 className="text-5xl font-bold mb-8">Property Description</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam minus accusamus adipisci molestiae voluptates, animi, aut ut, ducimus magnam reiciendis earum dignissimos dolore ea et tempore sapiente? Reiciendis perferendis odio porro iure consequatur dicta facilis! Repudiandae odio accusantium consequatur fugit ipsa non sint amet omnis. Doloremque commodi quam adipisci iusto!</p>
                                </div>

                                <section id="overview" className="mb-20">
                                    <h2 className="text-5xl font-bold mb-8">Overview</h2>

                                    <table className="w-full">
                                        <tbody>
                                            <tr className="border-y py-8">
                                                <td className="w-4/12 font-bold px-4">Property Type</td>
                                                <td className="py-8">Condo</td>
                                            </tr>
                                            <tr className="border-b py-8">
                                                <td className="w-4/12 font-bold px-4">Location</td>
                                                <td className="py-8">217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019</td>
                                            </tr>
                                            <tr className="border-b py-8">
                                                <td className="w-4/12 font-bold px-4">MLS ID</td>
                                                <td className="py-8">RPLU-1032522855446</td>
                                            </tr>
                                            <tr className="border-b py-8">
                                                <td className="w-4/12 font-bold px-4">Listing Last Updated</td>
                                                <td className="py-8">3/12/2024 4:14 PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>

                                <section id="amenities">
                                    <h2 className="text-5xl font-bold mb-10">Property Features & Amenities</h2>
                                    <div className="mb-8">
                                        <h3 className="text-4xl font-bold mb-8">Interior</h3>

                                        <div className="space-y-2 mb-8 px-4">
                                            <div className="flex items-center">
                                                <div className="w-4/12">Total Bedrooms</div>
                                                <div className="font-bold">7</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Full Bathrooms</div>
                                                <div className="font-bold">11</div>
                                            </div>
                                        </div>
                                        <Separator />
                                    </div>
                                    <div className="mb-8">
                                        <h3 className="text-4xl font-bold mb-8">Exterior</h3>

                                        <div className="space-y-2 mb-8 px-4">
                                            <div className="flex items-center">
                                                <div className="w-4/12">Stories</div>
                                                <div className="font-bold">131</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Air Conditioning</div>
                                                <div className="font-bold">Other</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Other Exterior Features</div>
                                                <div className="font-bold">Building Roof Deck, None</div>
                                            </div>
                                        </div>
                                        <Separator />
                                    </div>
                                    <div className="mb-8">
                                        <h3 className="text-4xl font-bold mb-8">Details</h3>

                                        <div className="space-y-2 mb-8 px-4">
                                            <div className="flex items-center">
                                                <div className="w-4/12">Neighborhood</div>
                                                <div className="font-bold">Midtown East</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">View Description</div>
                                                <div className="font-bold">River</div>
                                            </div>
                                        </div>
                                        <Separator />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-bold mb-8">Financial</h3>

                                        <div className="space-y-2 mb-8 px-4">
                                            <div className="flex items-center">
                                                <div className="w-4/12">Price</div>
                                                <div className="font-bold">11238922305.00 PHP</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Common Charges</div>
                                                <div className="font-bold">1657308.77 PHP/mo</div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <aside className="bg-white w-[550px]">
                                <div className="sticky top-32">
                                    <div className="flex justify-center rounded-md bg-[#F2F4F7] p-6 space-x-4">
                                    <div>
                                        <Image className="aspect-square object-cover rounded-md w-24" width={200} height={200} alt="Agent" src="https://images.pexels.com/photos/7709235/pexels-photo-7709235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="mb-1.5">
                                            <h5 className="font-bold">{data.agent_office_name}</h5>
                                            <p className="text-sm">{data.broker_office_name}</p>
                                        </div>
                                        <div className="font-medium">
                                            <a href={`tel:${data.agent_office_phone}`} className="block hover:underline">{data.agent_office_phone}</a>
                                            <a href={`mailto:${data.agent_office_email}`} className="block hover:underline uppercase">{data.agent_office_email}</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
