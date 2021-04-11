import React, { useState } from "react";
import { Subtitle2, Headline5 } from "@material/react-typography";
import { Cell, Row } from "@material/react-layout-grid";
import Select, {
  OptionType,
  StyleConfigType,
} from "react-auto-scroll-time-select";

const DefaultProp = () => {
  const [option, setOption] = useState<OptionType | null>();

  return (
    <Row>
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Default</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={6}>
            <Subtitle2>Form</Subtitle2>
          </Cell>
          <Cell columns={6}>
            <Subtitle2>Value</Subtitle2>
          </Cell>
        </Row>
        <Row>
          <Cell columns={6}>
            <Select
              onChange={setOption}
              value={option}
              styles={{
                inputForm: (config: StyleConfigType) => ({
                  ...config,
                  minWidth: "100%",
                }),
              }}
            />
          </Cell>
          <Cell columns={6} align="middle">
            {option?.value}
          </Cell>
        </Row>
      </Cell>
    </Row>
  );
};

export default DefaultProp;
