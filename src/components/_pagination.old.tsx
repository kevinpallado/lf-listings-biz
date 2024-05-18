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

export default function Pagination({ meta }: { meta: any }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const itemsPerPage = 9;

    const totalPages = Array.from({ length: meta?.totalPages }, (_, i) => i + 1);
    const pageSize = Math.ceil(totalPages.length / itemsPerPage);
    const pageCount = Array.from({ length: pageSize }, (_, i) => i + 1);

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

                {pageCount.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink href={createPageURL(page)} isActive={currentPage === page ? true : false}>{page}</PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        </PaginationComponent>
    )
}
