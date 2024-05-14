import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card
} from "@/components/ui/card"
import Image from 'next/image';
import { Input } from "@/components/ui/input"

export default function Home() {
    return (
        <div>
            <header className="flex justify-between items-center h-16 px-4">
                <div>Logo</div>
                <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                    <a className="text-sm font-medium transition-colors hover:text-primary" href="/">Home</a>
                    <a className="text-sm font-medium transition-colors hover:text-primary" href="/">About Us</a>
                    <a className="text-sm font-medium transition-colors hover:text-primary" href="/">Property</a>
                    <a className="text-sm font-medium transition-colors hover:text-primary" href="/">Blog</a>
                </nav>
                <Button type="submit" variant="destructive">Sign In</Button>
            </header>
            <div className="flex flex-col items-center text-center h-96 py-20 bg-[#F9FAFB] m-4 rounded-xl">
                <div className="max-w-3xl m-auto">
                    <div className="mb-12">
                        <h1 className="text-5xl text-[#101828] font-bold mb-6">Premier Real Estate Solutions</h1>
                        <p className="text-[#475467]">Explore luxury homes, family-friendly neighborhoods, and investment properties. Our expert team offers personalized service and deep market knowledge to help you find the perfect property. Start your journey with us today!</p>
                    </div>
                    <div className="flex max-w-lg w-full mx-auto items-center space-x-2">
                        <Input type="text" className="bg-white" placeholder="Search address, city, ZIP..." />
                        <Button type="submit">Save search</Button>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl w-full mx-auto py-10'>
                <div className="mb-6 space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">Search result/s</h2>
                    <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
                </div>
                <div className="grid grid-cols-4">
                    <Card className="relative">
                        <Badge variant="destructive" className="absolute top-2 left-2 rounded-full z-10">2 available units</Badge>
                        <div className="overflow-hidden rounded-t-xl">
                            <Image className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square rounded-t-xl" width={500} height={500} alt="Real estate" src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                        <div className="space-y-1 px-2 pt-3 pb-2 text-sm">
                            <h3 className="font-medium leading-none">60743.40 PHP</h3>
                            <p className="text-xs text-muted-foreground">Campus Apartments 700-727 University SE | 700 University Ave SE, Minneapolis, MN</p>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
}
