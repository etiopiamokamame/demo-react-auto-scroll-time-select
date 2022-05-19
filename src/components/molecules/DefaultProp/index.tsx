import React, { useState } from "react";
import { Subtitle2, Headline5 } from "@material/react-typography";
import { Cell, Row } from "@material/react-layout-grid";
import Select, { OptionType } from "react-auto-scroll-time-select";

const DefaultProp = () => {
  const [option, setOption] = useState<OptionType | null>();

  return (
    <Row data-testid="default-prop">
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Default</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell desktopColumns={6} phoneColumns={2}>
            <Subtitle2>Form</Subtitle2>
          </Cell>
          <Cell desktopColumns={6} phoneColumns={2}>
            <Subtitle2>Value</Subtitle2>
          </Cell>
        </Row>
        <Row>
          <Cell desktopColumns={6} phoneColumns={2}>
            <Select
              data-testid="select"
              onChange={setOption}
              value={option}
              menuPortalTarget={document.body}
            />
          </Cell>
          <Cell
            desktopColumns={6}
            phoneColumns={2}
            align="middle"
            data-testid="value"
          >
            {option?.value}
          </Cell>
        </Row>
      </Cell>
    </Row>
  );
};

export default DefaultProp;
