import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import TextField, { Input } from "@material/react-text-field";
import Select, { OptionType } from "react-auto-scroll-time-select";

const HourLimitProp = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [hourLimit, setHourLimit] = useState<number>(24);

  return (
    <Row data-testid="hour-limit-prop">
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Hour Limit</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>Set a time limit</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <TextField label="Hour Limit">
              <Input
                data-testid="input"
                type="number"
                min={1}
                value={hourLimit || 1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setHourLimit(parseInt(e.currentTarget.value))
                }
              />
            </TextField>
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
              onChange={setOption}
              value={option}
              hourLimit={hourLimit || 1}
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

export default HourLimitProp;
