import React from "react"
export interface TableHeaderCellProps
  extends React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ children, ...restOfProps }) => {
  return (
    <th {...restOfProps} className={` p-2 py-4  ${restOfProps.className}`}>
      {children}
    </th>
  )
}
