import { useState } from "react";
import React, { useEffect } from "react";
import { getDatas } from "../../feactures/services/dataService";

const Table = (props) => {
    const [datas, setDatas] = useState<any>([]);

  const dataDatas = async () => {
    try {
      const response = await getDatas();
      setDatas(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataDatas();
  }, []);

    const { Credito_Num_Pagare, Consecutivo, Identificacion, Cliente, Placa, Valor_Pagare, Fecha_Desembolso, Identificacion_Codeudor, Codeudor, Ubicacion, Estado } = props;
    return (
        <div className="bg-red-800 p-4 text-center border border-secondary-200 rounded-2x1 mt-8 rounded-2xl">
            <div className="mt-1">
                <div className="relative overscroll-x-auto rounded-lg undefined">
                    <table className="justify-center text-sm lg:text-base text-center w-full border-separate space-y-4 border-spacing-0 border-spacing-y-4 table-auto undefined">
                        <tr className="border-b last-of-type:border-none bg-secondary-400">
                            <th className="p-2 py-4 text-secondary border-inline:10px">Credito Num Pagare
                                </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Consecutivo
                                {`${Consecutivo}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Identificacion
                                {`${Identificacion}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Cliente
                                {`${Cliente}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Placa
                                {`${Placa}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Valor Pagare
                                {`${Valor_Pagare}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Fecha Dsbso
                                {`${Fecha_Desembolso}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Identificacion Codeudor
                                {`${Identificacion_Codeudor}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Codeudor
                                {`${Codeudor}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Ubicacion
                                {`${Ubicacion}`}</th>
                            <th className="p-2 py-4 text-secondary border-inline:10px">Estado
                                {`${Estado}`}</th>
                        </tr>
                        <tbody>
                            {datas.map((data) => (
                        <tr>
                            {data.Credito_Num_Pagare}
                        </tr>
                                
                            ))}
                        </tbody>


                    </table>

                </div>

            </div>

        </div>

    );

}

export default Table;