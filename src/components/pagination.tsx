'use client';

import {
    Pagination as PaginationComponent,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import ReactPaginate from 'react-paginate';

export default function Pagination({ meta } : { meta: any }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const itemsPerPage = 9;

    const totalCount = Array.from({ length: meta?.totalCount }, (_, i) => i + 1);
    const pageCount = Math.ceil(totalCount.length / itemsPerPage);

    const createPageURL = (pageNumber: { selected: number }) => {
        const selected = pageNumber.selected + 1;
        const params = new URLSearchParams(searchParams);
        params.set('page', selected.toString());
        router.push(`${pathname}?${params.toString()}`)
    };

    const previousEl = () => (
        <>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            <span>Previous</span>
        </>
    )

    const nextEl = () => (
        <>
            <span>Next</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </>
    )

    return (
        <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center">
            <ReactPaginate
                breakLabel="..."
                previousLabel={previousEl()}
                nextLabel={nextEl()}
                onPageChange={createPageURL}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                className="flex flex-row items-center gap-1"
                pageLinkClassName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                previousLinkClassName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pl-2.5"
                nextLinkClassName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pr-2.5"
            />
        </nav>
    )
}
