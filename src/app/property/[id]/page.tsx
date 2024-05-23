import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Image from 'next/image';
import PropertySwiper from '@/components/property-swiper';
import { Separator } from "@/components/ui/separator"
import { fetchAPI } from "@/lib/fetch-api";

type Params = { id: string | number };

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
            <div className="banner banner-overlay">
                <div className="relative z-10 max-w-3xl mt-auto mx-auto">
                    <div className="mb-12">
                        <h1 className="text-5xl text-white font-bold leading-tight mb-6 line-clamp-2">{data.UnparsedAddress}</h1>
                        <p className="text-white text-lg">{data.ListPrice}</p>
                    </div>
                </div>

                <PropertySwiper data={data.Media} />
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
                                        <BreadcrumbPage>{data.UnparsedAddress}</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>

                                <div className="mb-20">
                                    <h2 className="text-5xl font-bold mb-8">Property Description</h2>
                                    <p>{data.PublicRemarks}</p>
                                </div>

                                <section id="overview" className="mb-20">
                                    <h2 className="text-5xl font-bold mb-8">Overview</h2>

                                    <table className="w-full">
                                        <tbody>
                                            <tr className="border-y py-8">
                                                <td className="w-4/12 font-bold px-4">Property Type</td>
                                                <td className="py-8">{data.PropertyType}</td>
                                            </tr>
                                            <tr className="border-b py-8">
                                                <td className="w-4/12 font-bold px-4">Location</td>
                                                <td className="py-8">{data.UnparsedAddress}</td>
                                            </tr>
                                            <tr className="border-b py-8">
                                                <td className="w-4/12 font-bold px-4">MLS ID</td>
                                                <td className="py-8">{data.ListingId}</td>
                                            </tr>
                                            <tr className="border-b py-8">
                                                <td className="w-4/12 font-bold px-4">Market Date</td>
                                                <td className="py-8">{data.OnMarketDate}</td>
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
                                                <div className="font-bold">{data.BedroomsTotal}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Full Bathrooms</div>
                                                <div className="font-bold">{data.BathroomsFull}</div>
                                            </div>
                                        </div>
                                        <Separator />
                                    </div>
                                    <div className="mb-8">
                                        <h3 className="text-4xl font-bold mb-8">Exterior</h3>

                                        <div className="space-y-2 mb-8 px-4">
                                            <div className="flex items-center">
                                                <div className="w-4/12">Stories</div>
                                                <div className="font-bold">{data.StoriesTotal}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Air Conditioning</div>
                                                <div className="font-bold">{data.Cooling}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Other Exterior Features</div>
                                                <div className="font-bold">{data.ExteriorFeatures}</div>
                                            </div>
                                        </div>
                                        <Separator />
                                    </div>
                                    <div className="mb-8">
                                        <h3 className="text-4xl font-bold mb-8">Details</h3>

                                        <div className="space-y-2 mb-8 px-4">
                                            <div className="flex items-center">
                                                <div className="w-4/12">Neighborhood</div>
                                                <div className="font-bold">{data.SubdivisionName}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Utilities</div>
                                                <div className="font-bold">{data.Utilities}</div>
                                            </div>
                                        </div>
                                        <Separator />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-bold mb-8">Financial</h3>

                                        <div className="space-y-2 mb-8 px-4">
                                            <div className="flex items-center">
                                                <div className="w-4/12">Price</div>
                                                <div className="font-bold">{data.ListPrice}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Commission Type</div>
                                                <div className="font-bold">{data.CommissionType ? `${data.CommissionType} @ ${data.CommissionAmount}` : 'No Information'}</div>
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
                                            <h5 className="font-bold">{data.BackOfficeAddedBy}</h5>
                                            <p className="text-sm">{data.AgentBrokerOffice}</p>
                                        </div>
                                        <div className="font-medium">
                                            <a href={`tel:${data.AgentContactNumber}`} className="block hover:underline">{data.AgentContactNumber}</a>
                                            <a href={`mailto:${data.AgentEmail}`} className="block hover:underline uppercase">{data.AgentEmail}</a>
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
