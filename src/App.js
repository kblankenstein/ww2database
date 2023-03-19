import "./App.css";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
} from "react-leaflet";
import React, { useState, useRef, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

function App() {

  const [latlong, setCoordinates] = useState({ coordinates: "52.3113295, 1.2122331" });
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
      headerTooltip: "Coordinates",
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

  const getCoordinates = useCallback(() => {
    const coords = gridRef.current.api.getSelectedRows();
    let newLatLong = coords.length === 1 ? coords[0].coordinates : "";
    setCoordinates({
      ...latlong,
      coordinates: newLatLong,
    });
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>The Joe Noyes Crew</h1>
          <h4>May we never forget these ten airmen.</h4>
        </header>
        <MapContainer
          center={[52.3113295, 1.2122331]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[52.3113295, 1.2122331]}>
            <Popup>
              The 95th Bomb Group (H) was <br /> based at Horham, England.
            </Popup>
          </Marker>
          <LayerGroup>
            <Circle
              center={[52.3113295, 1.2122331]}
              pathOptions={{ color: "green", fillColor: "green" }}
              radius={200}
            />
          </LayerGroup>
        </MapContainer>
      </div>
      <div style={containerStyle}>
        <div className="ag-theme-alpine" style={gridStyle}>
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
            onSelectionChanged={getCoordinates}
          />
        </div>
      </div>
    </>
  );
}

export default App;
