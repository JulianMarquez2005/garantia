import React from "react"

export interface TableCellProps
  extends React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {}

export const TableCell: React.FC<TableCellProps> = ({ children, ...restOfProps }) => {
  return (
    <th {...restOfProps} className={`font-normal p-3  bg-secondary-300 ${restOfProps.className}`}>
      {children}
    </th>
  )
}