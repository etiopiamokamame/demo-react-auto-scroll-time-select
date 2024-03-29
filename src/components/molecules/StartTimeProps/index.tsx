import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import Select, { OptionType } from "react-auto-scroll-time-select";

const StartTimeProps = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [startTimeOption, setStartTimeOption] = useState<OptionType | null>();

  return (
    <Row data-testid="start-time-prop">
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Start Time</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>Specify the start time</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={9} align="middle">
            <Select
              data-testid="start-time-select"
              onChange={setStartTimeOption}
              value={startTimeOption}
            />
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Row>
              <Cell desktopColumns={6} phoneColumns={2}>
                <Subtitle2>Form</Subtitle2>
              </Cell>
              <Cell desktopColumns={6} phoneColumns={2}>
                <Subtitle2>Value</Subtitle2>
              </Cell>
            </Row>
          </Cell>
        </Row>
        <Row>
          <Cell desktopColumns={6} phoneColumns={2} data-testid="select">
            <Select
              data-testid="select"
              onChange={setOption}
              value={option}
              startTime={startTimeOption?.value}
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

export default StartTimeProps;
