'use client';

import {
    Pagination as PaginationComponent,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <PaginationComponent>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href={createPageURL(1)} isActive={currentPage === 1 ? true : false}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href={createPageURL(2)} isActive={currentPage === 2 ? true : false}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href={createPageURL(3)} isActive={currentPage === 3 ? true : false}>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href={createPageURL(4)} isActive={currentPage === 4 ? true : false}>4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href={createPageURL(5)} isActive={currentPage === 5 ? true : false}>5</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        </PaginationComponent>
    )
}
