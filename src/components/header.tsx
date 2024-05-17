import { Button } from "@/components/ui/button"

export default function Header() {
    return (
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
    )
}
