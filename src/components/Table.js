import "./Table.css";
import React, { useState, useRef, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Table = () => {
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const headerHeight = 50;

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "date",
      headerTooltip: "Month, Day, Year",
      width: 200,
      minWidth: 200,
      maxWidth: 220,
    },
    {
      field: "target",
      headerTooltip: "Target",
      width: 200,
      minWidth: 200,
      maxWidth: 220,
    },
    {
      field: "pilot",
      headerTooltip: "Aircraft Commander",
      width: 200,
      minWidth: 200,
      maxWidth: 220,
    },
    {
      field: "copilot",
      headerTooltip: "Co-Pilot",
      width: 200,
      minWidth: 200,
      maxWidth: 220,
    },
    {
      field: "aircraft",
      headerTooltip: "B-17 Serial Number",
      width: 200,
      minWidth: 200,
      maxWidth: 220,
    },
    {
      field: "name",
      headerTooltip: "Nose Art / Name",
      width: 200,
      minWidth: 200,
      maxWidth: 220,
    },
    {
      field: "squadron",
      headerTooltip: "Bomb Squadron",
      width: 200,
      minWidth: 200,
      maxWidth: 220,
    },
    {
      field: "coordinates",
      headerTooltip: "Map Coordinates",
      width: 200,
      minWidth: 200,
      maxWidth: 220,
    },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    flex: 1,
  }));

  const onGridReady = useCallback((params) => {
    fetch("https://apilotnamedjoe.com/data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const onSelectionChanged = useCallback(() => {
    const targetName = gridRef.current.api.getSelectedRows();
    document.querySelector("#targetName").innerHTML =
      targetName.length === 1 ? targetName[0].target : "";
  }, []);

  return (
    <>
      <div style={containerStyle}>
        <div className="ag-theme-alpine" style={gridStyle}>
          <div className="targetName">
            <span id="targetName"></span>
          </div>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
            animateRows={true}
            headerHeight={headerHeight}
            onFirstDataRendered={onFirstDataRendered}
            domLayout="autoHeight"
            rowSelection={"single"}
            onSelectionChanged={onSelectionChanged}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
