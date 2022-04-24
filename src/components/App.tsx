import React from "react";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import GlobalHeader from "../components/molecules/GlobalHeader";
import { Grid } from "@material/react-layout-grid";
import UsageTitle from "./molecules/UsageTitle";
import DefaultProp from "./molecules/DefaultProp";
import SpanProp from "./molecules/SpanProp";
import HourLimitProp from "./molecules/HourLimitProp";
import FindOptionProp from "./molecules/FindOptionProp";
import IsClearableProp from "./molecules/IsClearableProp";
import DefaultScrollOptionValueProp from "./molecules/DefaultScrollOptionValueProp";
import HideOptionsProps from "./molecules/HideOptionsProps";
import DisabledOptionsProps from "./molecules/DisabledOptionsProps";
import StartTimeProps from "./molecules/StartTimeProps";

const App = () => {
  return (
    <div>
      <GlobalHeader />

      <TopAppBarFixedAdjust />

      <div className="container">
        <Grid>
          <UsageTitle />
          <DefaultProp />
          <SpanProp />
          <HourLimitProp />
          <FindOptionProp />
          <IsClearableProp />
          <DefaultScrollOptionValueProp />
          <HideOptionsProps />
          <DisabledOptionsProps />
          <StartTimeProps />
        </Grid>
      </div>
    </div>
  );
};

export default App;
