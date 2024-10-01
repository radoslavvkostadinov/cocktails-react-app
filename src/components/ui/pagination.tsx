import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";



interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {
  className?: string;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className = "", ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props} />
  )
);
Pagination.displayName = "Pagination";


interface PaginationContentProps extends React.ComponentPropsWithoutRef<"ul"> {
  className?: string;
}

const PaginationContent = React.forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className = "", ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex flex-row items-center gap-1", className)}
      {...props} />
  )
);
PaginationContent.displayName = "PaginationContent";


interface PaginationItemProps extends React.ComponentPropsWithoutRef<"li"> {
  className?: string;
}

const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className = "", ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
  )
);
PaginationItem.displayName = "PaginationItem";


interface PaginationLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  isActive?: boolean;
  size?: "icon" | "default" | "sm" | "lg";
}

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className = "", isActive, size = "icon", ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={cn(buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }), className)}
      {...props} />
  )
);
PaginationLink.displayName = "PaginationLink";


interface PaginationPreviousProps extends PaginationLinkProps { }

const PaginationPrevious = React.forwardRef<HTMLAnchorElement, PaginationPreviousProps>(
  ({ className, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 pl-2.5", className || "")}
      {...props}>
      <ChevronLeftIcon className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  )
);
PaginationPrevious.displayName = "PaginationPrevious";


interface PaginationNextProps extends PaginationLinkProps { }

const PaginationNext = React.forwardRef<HTMLAnchorElement, PaginationNextProps>(
  ({ className = "", ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 pr-2.5", className)}
      {...props}>
      <span>Next</span>
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  )
);
PaginationNext.displayName = "PaginationNext";


interface PaginationEllipsisProps extends React.ComponentPropsWithoutRef<"span"> {
  className?: string;
}

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
  ({ className = "", ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}>
      <DotsHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
