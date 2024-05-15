import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { Input } from "@/components/ui/input"

const properties = [
    {
        price: '195,000,000',
        address: '217 West 57th Street Unit: PENTHOUSE, New York City, NY 10019',
        amenities: [
            '7 Beds',
            '11 Full Baths',
            '17,545 Sq.Ft.'
        ],
        image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        price: '79,995,000',
        address: '165 SURFSIDE DR, Water Mill, NY 11976',
        amenities: [
            '8 Beds',
            '8 Full Baths',
            '8,600 Sq.Ft.'
        ],
        image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        price: '75,000,000',
        address: '56 North Moore St., New York City, NY 10013',
        amenities: [
            '50 Beds'
        ],
        image: 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]

export default function Home() {
    return (
        <div>
            <header className="absolute top-0 left-0 right-0 z-10 w-full flex justify-between items-center h-16 px-16">
                <div>Logo</div>
                <nav className="flex items-center space-x-4 lg:space-x-6 mx-6 text-white">
                    <a className="text-sm font-medium transition-colors hover:text-primary" href="/">Home</a>
                    <a className="text-sm font-medium transition-colors hover:text-primary" href="/">About Us</a>
                    <a className="text-sm font-medium transition-colors hover:text-primary" href="/">Property</a>
                    <a className="text-sm font-medium transition-colors hover:text-primary" href="/">Blog</a>
                </nav>
                <Button type="submit" variant="destructive">Sign In</Button>
            </header>
            <div className="banner">
                <Image className="absolute inset-0 w-full h-full object-cover" width={2000} height={2000} alt="Banner" src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
            <div className="bg-black">
                <div className="bg-white rounded-t-[48px]">
                    <div className="mx-auto py-10 px-16">
                        <div className="mb-8 space-y-1">
                            <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-12 mb-6">
                            {properties.map((property, key) => {
                                return (
                                    <div key={key} className="relative">
                                        <Badge variant="secondary" className="absolute top-4 left-4 uppercase rounded z-10 bg-white/80">For sale</Badge>
                                        <div className="overflow-hidden rounded-lg">
                                            <Image className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-video rounded-lg" width={500} height={500} alt="Real estate" src={property.image} />
                                        </div>
                                        <div className="space-y-1 pt-4 pb-2 text-sm">
                                            <h3 className="text-base font-bold leading-none mb-2">{property.price}</h3>
                                            <p className="text-base text-muted-foreground">{property.address}</p>
                                            <ul className="flex items-center">
                                                {property.amenities.map((amenity, key) => {
                                                    return (
                                                        <li key={key} className="text-base text-muted-foreground">{amenity}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
}
