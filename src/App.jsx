import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Populares from "./components/Populares";
import MisRutas from "./router/MisRutas";

function App() {
  return (
    <div className=" bg-slate-200 dark:bg-slate-600 flex-col">
      
      <MisRutas />
     
    </div>
  );
}

export default App;
