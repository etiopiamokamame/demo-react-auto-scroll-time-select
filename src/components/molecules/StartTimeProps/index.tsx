import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import Select, { OptionType } from "react-auto-scroll-time-select";

const StartTimeProps = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [startTimeOption, setStartTimeOption] = useState<OptionType | null>();

  return (
    <Row>
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
            <Select onChange={setStartTimeOption} value={startTimeOption} />
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
          <Cell columns={6}>
            <Select
              onChange={setOption}
              value={option}
              startTime={startTimeOption?.value}
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

export default StartTimeProps;
