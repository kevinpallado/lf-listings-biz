import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Image from 'next/image';
import Logo from '@/public/lf-logo.jpg';
import PropertySwiper from '@/components/property-swiper';
import { Separator } from "@/components/ui/separator"
import { fetchAPI } from "@/lib/fetch-api";

type Params = { id: string };

async function findOne(value: Params) {
    const getId = value.id.split('_');

    // Fetch data from external API
    const { data } = await fetchAPI(`/listings/property/${getId[1]}`)

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
                        <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 line-clamp-2">{data.UnparsedAddress}</h1>
                        <p className="text-white text-lg" suppressHydrationWarning={true}>{data.ListPrice}</p>
                    </div>
                </div>

                {data.Media && <PropertySwiper data={data.Media} />}
            </div>
            <main className="bg-black">
                <div className="bg-white rounded-t-[48px]">
                    <div className="wrapper relative pb-10 pt-1 xl:pt-0">
                        <div className="sticky z-10 bg-white top-0 mb-5">
                            <div className="flex items-center">
                                <ul className="hidden xl:flex items-center flex-grow">
                                    <li className="max-w-60 w-full py-10 px-4 text-center">Overview</li>
                                    <li className="max-w-60 w-full py-10 px-4 text-center">Features & Amenities</li>
                                    <li className="max-w-60 w-full py-10 px-4 text-center">Lifestyle Index</li>
                                </ul>
                                <div className="space-x-2 flex xl:block w-full xl:w-auto py-10 xl:py-0">
                                    <Button size="lg" variant="outline" className="h-[56px] rounded-full grow">Get in Touch</Button>
                                    <Button size="lg" className="h-[56px] rounded-full grow">Schedule a Tour</Button>
                                </div>
                            </div>
                            <Separator className="hidden xl:block" />
                        </div>

                        <div className="xl:flex xl:space-x-10 2xl:space-x-16">
                            <div className="flex-1 min-w-0">
                                <Breadcrumb className="mb-5">
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
                                {process.env.SHOW_COMMISSION === "true" ? <section id="commission" className="mb-5">
                                    <div>
                                        <div className="flex justify-between">
                                            <h3 className="section-title mb-8">Commission</h3>
                                            {data.CompensationAgreementLink != null && <a className="no-underline hover:underline text-blue-600" href={data.CompensationAgreementLink} target="_blank">Download Compensation Agreement</a>}
                                        </div>
                                        <div className="space-y-2 mb-8 px-4">
                                            <div className="flex items-center">
                                                <div className="w-4/12">Price</div>
                                                <div className="font-bold" suppressHydrationWarning={true}>{data.ListPrice}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4/12">Commission Type</div>
                                                <div className="font-bold" suppressHydrationWarning={true}>{data.CommissionType ? `${data.CommissionType} @ ${data.CommissionAmount}` : 'No Information'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </section> : <section id="commission" className="mb-5">
                                    <div>
                                        <a className="no-underline hover:underline text-blue-600" href={`${process.env.BIZ_URL}/${params.id}`} target="_blank">Click the here to see buyer broker cooperating details</a>
                                    </div>
                                </section>}

                                <div className="mb-5 space-y-2 sm:space-y-3">
                                    <h2 className="section-title">Property Description</h2>
                                    <p className="section-description">{data.PublicRemarks}</p>
                                </div>

                                <section id="overview" className="mb-5">
                                    <h2 className="section-title mb-8">Overview</h2>

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
                                    <h2 className="section-title mb-10">Property Features & Amenities</h2>
                                    <div className="mb-8">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Interior</h3>

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
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Exterior</h3>

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
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Details</h3>

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
                                    </div>
                                </section>
                            </div>
                            <aside className="bg-white xl:max-w-md w-full">
                                <div className="sticky top-32">
                                    <div className="flex justify-center rounded-md bg-[#F2F4F7] p-6 space-x-4">
                                        <div>
                                            <Image className="aspect-square object-cover rounded-md w-24" width={200} height={200} alt="Agent" src={data.AgentImage ? data.AgentImage : Logo} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="mb-1.5">
                                                <h5 className="font-bold">{data.BackOfficeAddedBy ? data.BackOfficeAddedBy : data.ListAgentFullName}</h5>
                                                <p className="text-sm">{data.AgentBrokerOffice ? data.AgentBrokerOffice : data.ListOfficeName}</p>
                                            </div>
                                            <div className="font-medium">
                                                <a href={`tel:${data.AgentContactNumber ? data.AgentContactNumber : data.ListAgentPreferredPhone}`} className="block hover:underline">{data.AgentContactNumber ? data.AgentContactNumber : data.ListAgentPreferredPhone}</a>
                                                <a href={`mailto:${data.AgentEmail ? data.AgentEmail : data.ListAgentEmail}`} className="block hover:underline uppercase">{data.AgentEmail ? data.AgentEmail : data.ListAgentEmail}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-1.5">
                                        <i>Information is Believed To Be Accurate But Not Guaranteed</i>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
