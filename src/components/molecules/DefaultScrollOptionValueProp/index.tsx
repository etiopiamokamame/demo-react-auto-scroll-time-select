import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import Select, { OptionType } from "react-auto-scroll-time-select";

const DefaultScrollOptionValueProp = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [defaultOption, setDefaultOption] = useState<OptionType | null>();

  return (
    <Row data-testid="default-scroll-option-value-prop">
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Default Scroll Option Value</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>Set focus options by default</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <Body1>Default option</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <Select
              data-testid="default-select"
              onChange={setDefaultOption}
              value={defaultOption}
            />
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Row>
              <Cell columns={6}>
                <Subtitle2>Form</Subtitle2>
              </Cell>
              <Cell columns={6}>
                <Subtitle2>Value</Subtitle2>
              </Cell>
            </Row>
          </Cell>
        </Row>
        <Row>
          <Cell columns={6} data-testid="select">
            <Select
              data-testid="select"
              onChange={setOption}
              value={option}
              defaultScrollOptionValue={defaultOption?.value}
            />
          </Cell>
          <Cell columns={6} align="middle" data-testid="value">
            {option?.value}
          </Cell>
        </Row>
      </Cell>
    </Row>
  );
};

export default DefaultScrollOptionValueProp;
