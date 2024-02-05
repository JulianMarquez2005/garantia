import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { useState } from "react";
import React, { useEffect } from "react";
import { getDatas } from "./feactures/services/dataService";

function App() {
  const [datas, setDatas] = useState([]);

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

  return (
    <>
      <div>
        <Header />
      </div>

      <section>
        <Table />
      </section>

      <footer>
        <p>&copy; 2024 Tu Página Dinámica. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
