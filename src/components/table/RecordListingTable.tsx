import React, {useState} from 'react';
import { Table } from '../../feactures/common/components/ui/Table/index';
import { TablePaginationProps } from '../../feactures/common/components/ui/Table/TablePagination';
import { getDatas } from "../../feactures/services/dataService";
import {
  createColumnHelper 
} from '@tanstack/react-table';

interface GetDataTableProps {
  pagination: TablePaginationProps;
}

const ColumnHelper = createColumnHelper<any>();

export const RecordListingTable: React.FC<GetDataTableProps> = ({ pagination }) => {
  
  const data = getDatas();

  const [currentPage, setCurrentPage] =useState(1);
  const pageSize = 6;


  const getCurrentPageData =() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };
  
  const columns = [
    ColumnHelper.accessor('Credito_Num_Pagare', { header:'Credito Número Pagare',id:'Credito_Num_Pagare' }),
    ColumnHelper.accessor('consecutive', { header:'Consecutivo', id:'Consecutivo'  }),
    ColumnHelper.accessor('identification', { header:'Identificación', id:'Identificacion'  }),
    ColumnHelper.accessor('client', { header:'Cliente', id:'Cliente'   }),
    ColumnHelper.accessor('licensePlate', { header:'Placa', id:'Placa'  }),
    ColumnHelper.accessor('noteValue', { header:'Valor Pagare', id:'Valor_Pagare' }),
    ColumnHelper.accessor('disbursementDate', { header:'Fecha Desembolso', id:'Fecha_Desembolso'  }),
    ColumnHelper.accessor('guarantorIdentification', { header:'Identificación Codeudor', id:'Identificacion_Codeudor'  }),
    ColumnHelper.accessor('guarantor', { header:'Codeudor', id:'Codeudor' }),
    ColumnHelper.accessor('location', { header:'Ubicación', id:'Ubicacion' }),
    ColumnHelper.accessor('status', { header:'Estado', id:'Estado'   })
  ];


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table className='border border-gray-300'>
        <Table.Header>
          <Table.Row className="bg-slate-300">
            {columns.map((column, index) => (
              <Table.HeaderCell key={index} className="border border-gray-300 p-2">{String(column.header)}</Table.HeaderCell> 
            ))}
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          {data.map((dataItem, index) => (
            <Table.Row key={index} className="bg-white">
              {columns.map((column, colIndex) => (
                <Table.Cell key={colIndex} className="border border-gray-300 p-2">{dataItem[column.id]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
          
          {data.length === 0 && (
            <Table.Row>
              <Table.Cell className='italic text-center text-gray-500' colSpan={columns.length}>
                No hay Registros
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      
      <Table.Pagination
      isFetching={false} 
      pageIndex={currentPage}
      pageSize={pageSize}
      pageCount={Math.ceil(data.length / pageSize)} 
      count={data.length}
      goToPage={handlePageChange}
      />
    </div>
  );
};
