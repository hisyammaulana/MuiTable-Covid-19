import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import MUIDataTable from "mui-datatables";
import { Toolbar, Typography } from "@material-ui/core";

const Home = () => {
  const columns = ["Country", "Province", "Confirmed", "Deaths", "Recovered"];

  const [covids, setCovids] = useState([]);

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "scrollMaxHeight",
    print: false,
    selectableRows: "none"
  };

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/confirmed")
      .then(response => response.json())
      .then(data => {
        setCovids(data);
      });
  }, []);

  return (
    <Container fixed>
      <Toolbar />
      <MUIDataTable
        title={"Covid-19 Case Data"}
        data={covids.map(item => {
          return [
            item.countryRegion,
            item.provinceState == null ? " - " : item.provinceState,
            item.confirmed,
            item.deaths,
            item.recovered
          ];
        })}
        columns={columns}
        options={options}
      />
      <Toolbar>
        <Typography>
          COVID-19 global data as-a-service :{" "}
          <a href="https://covid19.mathdro.id/api">
            https://covid19.mathdro.id/api
          </a>
        </Typography>
      </Toolbar>
    </Container>
  );
};

export default Home;
