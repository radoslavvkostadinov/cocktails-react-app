import { useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function Paginated({ totalPages, currentPage, onPageChange }) {
    const [current, setCurrent] = useState(currentPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrent(page);
            onPageChange(page);
        }
    };

    const renderPaginationItems = () => {
        const items = [];
        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <PaginationItem key={i} active={i === current}>
                    <PaginationLink href="#" onClick={() => handlePageChange(i)}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
        return items;
    };

    return (
        <div>
            <Pagination className="bg-indigo-950 text-white">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                if (current === 1) {
                                    e.preventDefault();
                                } else {
                                    handlePageChange(current - 1);
                                }
                            }}
                            disabled={current === 1}
                            className={current === 1 ? '' : ''}
                        />
                    </PaginationItem>
                    {renderPaginationItems()}
                    {current < totalPages && (
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    if (current === totalPages) {
                                        e.preventDefault();
                                    } else {
                                        handlePageChange(current + 1);
                                    }
                                }}
                                disabled={current === totalPages}
                                className={current === totalPages ? 'cursor-not-allowed opacity-50' : ''}
                            />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    );
}