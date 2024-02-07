import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableHeader } from "./TableHeader";
import { TableHeaderCell } from "./TableHeaderCell";
import { TableRow } from "./TableRow";
import { TablePagination } from "./TablePagination";
import React from "react";

export interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  wrapperProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}


const TableRoot: React.FC<TableProps> = ({ children, wrapperProps, ...restOfProps }) => {
    return (
      <div
        {...wrapperProps}
        className={`relative overflow-x-auto  rounded-lg ${wrapperProps?.className}`}
      >
        <table
          {...restOfProps}
          className={`justify-center text-sm lg:text-base text-center w-full border-separate space-y-4 border-spacing-0 border-spacing-y-4 table-auto ${restOfProps.className}`}
        >
          {children}
        </table>
      </div>
    )
  }


  export const Table = Object.assign(TableRoot, {
    Header: TableHeader,
    HeaderCell: TableHeaderCell,
    Body: TableBody,
    Cell: TableCell,
    Row: TableRow,
    Pagination: TablePagination
  })