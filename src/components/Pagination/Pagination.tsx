import { useState, MouseEvent } from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';

interface PaginatedProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function Paginated({ totalPages, currentPage, onPageChange }: PaginatedProps) {

    const [current, setCurrent] = useState<number>(currentPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrent(page);
            onPageChange(page);
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    };

    const renderPaginationItems = () => {
        const items = [];
        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        href="#"
                        onClick={(e: MouseEvent) => { e.preventDefault(); handlePageChange(i); }}
                        className={i === current ? 'active text-orange-300' : ''}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
        return items;
    };

    return (
        <div>
            <Pagination className="bg-indigo-950 text-white pb-4">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e: MouseEvent) => {
                                e.preventDefault();
                                if (current > 1) {
                                    handlePageChange(current - 1);
                                }
                            }}
                            className={current === 1 ? 'disabled' : ''}
                        />
                    </PaginationItem>
                    {renderPaginationItems()}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e: MouseEvent) => {
                                e.preventDefault();
                                if (current < totalPages) {
                                    handlePageChange(current + 1);
                                }
                            }}
                            className={current === totalPages ? 'disabled' : ''}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
