import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./FileTypeTabs.css";

const FileTypeTabs = (props) => {
  return (
    <div className="gbon_tool">
      <Tabs className={"ftype_tabs"}>
        <TabList>
          {/* <span className="gbon_tool_txt">GBON Compliance progress tool</span> */}
          <Tab>Surface</Tab>
          <Tab>Upper-Air</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default FileTypeTabs;
