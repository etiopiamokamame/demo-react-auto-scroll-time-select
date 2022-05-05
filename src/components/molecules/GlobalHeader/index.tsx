import React from "react";
import TopAppBar, {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@material/react-top-app-bar";

const GlobalHeader = () => {
  return (
    <TopAppBar fixed>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarTitle>React Auto Scroll Time Select</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};

export default GlobalHeader;
