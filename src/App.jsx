import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { useState } from "react";
import React, { useEffect } from "react";
import { getDatas } from "./feactures/services/dataService";

function App() {
  return (
    <>
      <div>
        <Header 
        titulo='FINANZAUTO S.A BIC'
        />
      </div>

      <section>
        <Table />
      </section>

      <footer>
        <p>&copy; 2024 Finanzauto. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
