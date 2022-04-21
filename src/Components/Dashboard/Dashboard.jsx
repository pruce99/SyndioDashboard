import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import DataViewer from "../DataViewer/DataViewer";

export default function Dashboard() {
  const [headerdata, setHeaderData] = useState([]);
  const [dropdownHeader, setDropdownHeader] = useState();
  const [pageContentData, setPageContentData] = useState({});
  const [switchState, setSwitchState] = useState("Gender");

  useEffect(() => {
    const getHeaderData = async () => {
      await axios
        .get("https://run.mocky.io/v3/9e343425-c47c-4c7f-a1ac-972c099be0ed")
        .then((response) => {
          setHeaderData(response.data);
          setDropdownHeader(response.data[0].label);
        });
    };
    getHeaderData();
  }, []);

  useEffect(() => {
    // console.log(dropdownHeader)
    const getPageContent = async () => {
      if (dropdownHeader === "Group by Function") {
        await axios
          .get("https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8")
          .then((response) => {
            setPageContentData(response.data);
          });
      } else if (dropdownHeader === "Group by Role") {
        await axios
          .get("https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a")
          .then((response) => {
            setPageContentData(response.data);
          });
      }
    };
    getPageContent();
  }, [dropdownHeader]);

  return (
    <div>
      <Navbar
        headerdata={headerdata}
        dropdownHeader={dropdownHeader}
        setDropdownHeader={setDropdownHeader}
      />
      <ToggleSwitch setSwitchState={setSwitchState} />

      <div>
        {JSON.stringify(pageContentData) !== "{}" ? (
          <>
            <DataViewer pageContentData={pageContentData} switchState ={switchState} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
