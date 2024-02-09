import { Table } from '../../feactures/common/components/ui/Table/Index'
import { TablePaginationProps } from '../../feactures/common/components/ui/Table/TablePagination'
import { getDatas } from "../../feactures/services/dataService"
import React from 'react'

interface GetDataTableProps {
  pagination: TablePaginationProps
}

export const RecordListingTable: React.FC<GetDataTableProps> = ({ pagination }) => {
  
  const data = getDatas();

  
  const columns = [
    { header: 'Crédito Número Pagare', accessor: 'Credito_Num_Pagare' },
    { header: 'Consecutivo', accessor: 'Consecutivo' },
    { header: 'Identificación', accessor: 'Identificacion' },
    { header: 'Cliente', accessor: 'Cliente' },
    { header: 'Placa', accessor: 'Placa' },
    { header: 'Valor Pagare', accessor: 'Valor_Pagare' },
    { header: 'Fecha Desembolso', accessor: 'Fecha_Desembolso' },
    { header: 'Identificación Codeudor', accessor: 'Identificacion_Codeudor' },
    { header: 'Codeudor', accessor: 'Codeudor' },
    { header: 'Ubicación', accessor: 'Ubicacion' },
    { header: 'Estado', accessor: 'Estado' }
  ];

  return (
    <div>
      <Table className='border-b border-gray-300 text-gray-600 bg-gray-100'>
        <Table.Header>
          <Table.Row>
            {columns.map((column, index) => (
              <Table.HeaderCell key={index}>{column.header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          {data.map((dataItem, index) => (
            <Table.Row key={index}>
              {columns.map((column, colIndex) => (
                <Table.Cell key={colIndex}>{dataItem[column.accessor]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
          
          {data.length === 0 && (
            <Table.Row>
              <Table.Cell className='italic text-center text-gray-500' colSpan={100}>
                No hay Registros
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      
      <Table.Pagination {...pagination} />
    </div>
  );
};