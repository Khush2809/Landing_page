import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Clear from "@material-ui/icons/Clear";

const Table = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "Keywords",
      field: "keyword",
    },
    {
      title: "Goal",
      field: "goal  ",
    },
  ];
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
    )
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);
  return (
    <div>
      <MaterialTable title="data" data={data} columns={columns} />
    </div>
  );
};

export default Table;
