import React, { useState } from "react";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import { Cell, Row } from "@material/react-layout-grid";
import TextField, { Input } from "@material/react-text-field";
import Select, { OptionType } from "react-auto-scroll-time-select";

const SpanProp = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [span, setSpan] = useState<number | undefined>(30);

  return (
    <Row data-testid="span-prop">
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Span</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>Set the minute interval</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <TextField label="Minutes Span">
              <Input
                data-testid="input"
                type="number"
                value={span}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSpan(
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
                  data-testid="select"
                  onChange={setOption}
                  value={option}
                  span={span}
                />
              </Cell>
              <Cell columns={6} align="middle" data-testid="value">
                {option?.value}
              </Cell>
            </Row>
          </Cell>
        </Row>
      </Cell>
    </Row>
  );
};

export default SpanProp;
