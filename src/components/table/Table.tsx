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


    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = datas.slice(firstIndex, lastIndex);
    const npage = Math.ceil(datas.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)



    return (
        <div className="bg-emerald-50 p-4 text-center border border-secondary-200 rounded-2x1 mt-8 rounded-2xl">
            <div className="mt-1">
                <div className="relative overscroll-x-auto rounded-lg undefined">
                    <table className="justify-center text-sm lg:text-base text-center w-full  space-y-4 border-spacing-0 border-spacing-y-4 table-auto undefined border-separate border border-slate-400 ">
                        <tr className="border-b last-of-type:border-none bg-secondary-400">
                            <th className="p-2 py-4 text-secondary  border-inline:10px border border-slate-300 bg-emerald-300">Credito Num Pagare
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Consecutivo
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Identificacion
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Cliente
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Placa
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Valor Pagare
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Fecha Dsbso
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Identificacion Codeudor
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Codeudor
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Ubicacion
                            </th>
                            <th className="p-2 py-4 text-secondary border-inline:10px border border-slate-300 bg-emerald-300">Estado
                            </th>
                        </tr>
                        <tbody>
                            {records.map((data, index) => (
                                <tr key={index}>
                                    <td className="border border-slate-300">{data.Credito_Num_Pagare}</td>
                                    <td className="border border-slate-300">{data.Consecutivo}</td>
                                    <td className="border border-slate-300">{data.Identificacion}</td>
                                    <td className="border border-slate-300">{data.Cliente}</td>
                                    <td className="border border-slate-300">{data.Placa}</td>
                                    <td className="border border-slate-300">{data.Valor_Pagare}</td>
                                    <td className="border border-slate-300">{data.Fecha_Desembolso}</td>
                                    <td className="border border-slate-300">{data.Identificacion_Codeudor}</td>
                                    <td className="border border-slate-300">{data.Codeudor}</td>
                                    <td className="border border-slate-300">{data.Ubicacion}</td>
                                    <td className="border border-slate-300">{data.Estado}</td>
                                </tr>


                            ))}
                        </tbody>


                    </table>


                    <nav>
                        <ul className="pagination flex justify-center space-x-2">
                            <li className="page-item">
                                <a href="#" className="page-link"
                                    onClick={prePage}>Previa</a>
                            </li>

                            {
                                numbers.map((n, i) => (
                                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                        <a href="#" className="page-link"
                                            onClick={()=> changeCPage(n)} >{n}</a>

                                    </li>

                                ))

                            }

                            <li className="page-item">
                                <a href="#" className="page-link"
                                    onClick={nextPage}>Siguiente</a>
                            </li>
                        </ul>
                    </nav>

                </div>

            </div>

        </div>

    );

    function prePage(){
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }

    }

    function changeCPage(id) {
        setCurrentPage(id)

    
    
    }

    function nextPage() {
        if(currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }

    }

}

export default Table;