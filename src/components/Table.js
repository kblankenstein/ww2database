import "./Table.css";
import React, { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Table = () => {
  const setAlwaysShowVerticalScroll = true;
  const headerHeight = 50;
  const [rowData] = useState([
    {
      pilot: "Conley, Harry M.",
      copilot: "Noyes, Joseph H.",
      date: "05-13-1943",
      target: "Saint-Omer, France",
      aircraft: "42-29780",
      name: "Silver Queen",
      callsign: "P",
      squadron: "335",
    },
    {
      pilot: "Conley, Harry M.",
      copilot: "Noyes, Joseph H.",
      date: "05-14-1943",
      target: "Antwerp, Belgium",
      aircraft: "42-5795",
      name: "N/A",
      callsign: "A",
      squadron: "334",
    },
    {
      pilot: "Conley, Harry M.",
      copilot: "Noyes, Joseph H.",
      date: "06-11-1943",
      target: "Wilhelmshaven, Germany",
      aircraft: "42-3202",
      name: "Blondie",
      callsign: "A",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Bockman, Elmer E.",
      date: "06-25-1943",
      target: "Bremen, Germany",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Bockman, Elmer E.",
      date: "06-29-1943",
      target: "Le Mans, France",
      aircraft: "42-30219",
      name: "N/A",
      callsign: "J",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Bockman, Elmer E.",
      date: "07-04-1943",
      target: "La Pallice, France",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Bockman, Elmer E.",
      date: "07-14-1943",
      target: "Le Bourget, France",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "07-24-1943",
      target: "Trondheim, Norway",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "07-25-1943",
      target: "Kiel (Warnemunde), Germany",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "07-28-1943",
      target: "Oschersleben, Germany",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "08-12-1943",
      target: "Bonn, (Wesseling), Germany",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "08-15-1943",
      target: "Merville-Lille Vendeville, France",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "08-17-1943",
      target: "Regensburg, Germany",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "08-31-1943",
      target: "Lille Meulan, France",
      aircraft: "42-30182",
      name: "Blondie II",
      callsign: "E",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "09-09-1943",
      target: "	Paris (Beaumont-sur-Oise), France",
      aircraft: "42-30634",
      name: "Liberty Belle",
      callsign: "O",
      squadron: "334",
    },
    {
      pilot: "Noyes, Joseph H.",
      copilot: "Prees, David F.",
      date: "09-15-1943",
      target: "Paris (Billancourt), France",
      aircraft: "42-3266",
      name: "Sittin Bull",
      callsign: "T",
      macr: "616",
      squadron: "335",
    },
  ]);

  const [columnDefs] = useState([
    { field: "pilot", headerTooltip: "Aircraft Commander" },
    { field: "copilot", headerTooltip: "Co-Pilot" },
    { field: "date", headerTooltip: "Month, Day, Year" },
    { field: "target", headerTooltip: "Target" },
    { field: "aircraft", headerTooltip: "B-17 Serial Number" },
    { field: "name", headerTooltip: "Nose Art / Name" },
    { field: "callsign", headerTooltip: "Callsign" },
    { field: "squadron", headerTooltip: "Bomb Squadron" },
    { field: "macr", headerTooltip: "Missing Air Crew Report" },
  ]);

  //TODO setRowData, dynamically set gridStyle, table needs to be centered with the page

  return (
    <div className="ag-theme-alpine" style={{ height: "1000px", width: "1500px" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        setAlwaysShowVerticalScroll={setAlwaysShowVerticalScroll}
        headerHeight={headerHeight}
      ></AgGridReact>
    </div>
  );
};

export default Table;
