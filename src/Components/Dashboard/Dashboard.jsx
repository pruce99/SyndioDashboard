import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import DataViewer from "../DataViewer/DataViewer";

export default function Dashboard() {
  // eslint-disable-next-line
  const [headerdata, setHeaderData] = useState([]);
  const [dropdownHeader, setDropdownHeader] = useState();
  const [pageContentData, setPageContentData] = useState({});
  const [switchState, setSwitchState] = useState("Gender");

  //fetches data for the header dropdown, initially after the component completes rendering
  //useEffect with an empty array is more like component did mount
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

  //Gets page content based on the value of the drop down selector
  //Two available options as of now
  //Group by function and Group by role
  useEffect(() => {
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
      {/* 
      headerdata = array of object[{},{}], dropDown values
      dropdownheader = string, to choose between two groups
      setDropdownHeader = function, to change value of dropdownheader
      */}
      <Navbar
        headerdata={headerdata}
        dropdownHeader={dropdownHeader}
        setDropdownHeader={setDropdownHeader}
      />
      {/* setSwitchState = takes in string, to change between gender and race */}
      <ToggleSwitch setSwitchState={setSwitchState} />

      <div>
        {/* Calling Data viewer if the fetched data by group is not empty */}
        {JSON.stringify(pageContentData) !== "{}" ? (
          <>
            {/* pageContentData = object of object, data fetched based on group 
                switchState = Gender or Race
            */}
            <DataViewer
              pageContentData={pageContentData}
              switchState={switchState}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
