import React from "react"


export interface TableBodyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > { }

export const TableBody: React.FC<TableBodyProps> = ({ children, ...restOfProps }) => {
  return (
    <tbody {...restOfProps} className={`${restOfProps.className}`}>
      {children}
    </tbody>
  )
}