import React from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Headline2 } from "@material/react-typography";

const UsageTitle = () => {
  return (
    <Row data-testid="usage-title">
      <Cell columns={12}>
        <Headline2>Usage</Headline2>
      </Cell>
    </Row>
  );
};

export default UsageTitle;
