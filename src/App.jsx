import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { useState } from "react";
import React, { useEffect } from "react";
import { getDatas } from "./feactures/services/dataService";
import { RecordListingTable } from './components/table/RecordListingTable'

function App() {
  return (
    <>
      <div>
        <Header 
        titulo='Listado de registros'
        />
      </div>

      <section>
        <RecordListingTable />
      </section>

      <footer>
        <p>&copy; 2024 Finanzauto. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
