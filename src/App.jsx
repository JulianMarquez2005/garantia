import Header from "./components/header/Header";

import { useState } from "react";
import React, { useEffect } from "react";
import { getDatas } from "./feactures/services/dataService";
import { RecordListingTable } from './components/table/RecordListingTable'
import Table from '../src/components/table/Table'

function App() {
  return (
    <>
      <div>
        <Header 
        titulo='Listado de registros'
        />
      </div>

      <section>
        < Table/>
      </section>

      <footer>
        <p>&copy; 2024 Finanzauto. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;