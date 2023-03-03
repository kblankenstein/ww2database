import "./Table.css";
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Typography from "@mui/material/Typography";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Table = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();
  const headerHeight = 50;

  const [columnDefs, setColumnDefs] = useState([
    { field: "pilot", headerTooltip: "Aircraft Commander" },
    { field: "copilot", headerTooltip: "Co-Pilot" },
    { field: "date", headerTooltip: "Month, Day, Year" },
    { field: "target", headerTooltip: "Target" },
    { field: "aircraft", headerTooltip: "B-17 Serial Number" },
    { field: "name", headerTooltip: "Nose Art / Name" },
    { field: "squadron", headerTooltip: "Bomb Squadron" },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    flex: 1,
  }));

  const onGridReady = useCallback((params) => {
    params.api.sizeColumnsToFit();
  }, []);

  useEffect(() => {
    fetch("https://apilotnamedjoe.com/data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <>
      <div
        style={{
          height: "400px",
          width: "1024px",
          display: "block",
          margin: "auto",
        }}
      >
        <div
          className="ag-theme-alpine"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
            animateRows={true}
            rowSelection="multiple"
            headerHeight={headerHeight}
          />
        </div>
      </div>
      <div class="resources">
        <Typography variant="body2">
          These resources were utilized in the development of this content:
          <br />
          <a href="https://95thbgdb.com/" target="_blank">
            The 95th Bomb Group (H) Searchable Database
          </a>
        </Typography>
      </div>
    </>
  );
};

export default Table;
