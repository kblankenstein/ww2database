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
          height: "430px",
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
            headerHeight={headerHeight}
          />
        </div>
      </div>

      <div className="resources">
        <Typography variant="body2">
          Resources:
          <br />
          <br />
          Hawkins, I. (2005). B-17s over Berlin: personal stories from the 95th
          Bomb Group (H). Washington: Potomac Books, Inc.
          <br />
          Conley, H. M. (2002). No foxholes in the sky. Trumball, CT.: FNP
          Military Division.
          <br />
          <br />
          <a href="http://www.303rdbg.com/crew-duties.html" target="_blank">
            "Duties and Responsibilities of the B-17 Crewmen"
          </a>
          <br />
          <a href="https://95thbgdb.com/" target="_blank">
            The 95th Bomb Group (H) Searchable Database
          </a>
          <br />
          <a href="https://www.8thafhs.org/" target="_blank">
            The 8th Air Force Historical Society
          </a>
          <br />
          <a href="https://b17flyingfortress.de/" target="_blank">
            The B-17 Bomber Flying Fortress Database
          </a>
          <br />
          <a href="https://www.americanairmuseum.com/" target="_blank">
            The American Air Museum in Britain
          </a>
        </Typography>
      </div>
    </>
  );
};

export default Table;
