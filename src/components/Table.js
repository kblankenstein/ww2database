import "./Table.css";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Table = () => {
  const [rowData] = useState([
    { pilot: "Conley", copilot: "Noyes", date: "05-13-1943", target: "Saint-Omer, France", aircraft: "42-29780", name: "Silver Queen" },
    { pilot: "Conley", copilot: "Noyes", date: "05-14-1943", target: "Antwerp, Belgium", aircraft: "42-5795", name: "N/A" },
    { pilot: "Conley", copilot: "Noyes", date: "06-11-1943", target: "Wilhelmshaven, Germany", aircraft: "42-3202", name: "Blondie" },
    { pilot: "Noyes", copilot: "Bockman", date: "06-25-1943", target: "Bremen, Germany", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Bockman", date: "06-29-1943", target: "Le Mans, France", aircraft: "42-30219", name: "N/A" },
    { pilot: "Noyes", copilot: "Bockman", date: "07-04-1943", target: "La Pallice, France", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Bockman", date: "07-14-1943", target: "Le Bourget, France", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Prees", date: "07-24-1943", target: "Trondheim, Norway", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Prees", date: "07-25-1943", target: "Kiel (Warnemunde), Germany", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Prees", date: "07-28-1943", target: "Oschersleben, Germany", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Prees", date: "08-12-1943", target: "Bonn, (Wesseling), Germany", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Prees", date: "08-15-1943", target: "Merville-Lille Vendeville, France", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Prees", date: "08-17-1943", target: "Regensburg, Germany", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Prees", date: "08-31-1943", target: "Lille Meulan, France", aircraft: "42-30182", name: "Blondie II" },
    { pilot: "Noyes", copilot: "Prees", date: "09-09-1943", target: "	Paris (Beaumont-sur-Oise), France", aircraft: "42-30634", name: "Liberty Belle" },
    { pilot: "Noyes", copilot: "Prees", date: "09-15-1943", target: "Paris (Billancourt), France", aircraft: "42-3266", name: "Sittin Bull" },
  ]);

  const [columnDefs] = useState([
    { field: "pilot" },
    { field: "copilot" },
    { field: "date" },
    { field: "target" },
    { field: "aircraft" },
    { field: "name" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 1000 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default Table;
