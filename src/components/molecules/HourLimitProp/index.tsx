import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import TextField, { Input } from "@material/react-text-field";
import Select, { OptionType } from "react-auto-scroll-time-select";

const HourLimitProp = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [hourLimit, setHourLimit] = useState<number | undefined>(24);

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
                value={hourLimit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setHourLimit(
                    e.currentTarget.value
                      ? parseInt(e.currentTarget.value)
                      : undefined
                  )
                }
              />
            </TextField>
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
              hourLimit={hourLimit}
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

export default HourLimitProp;
