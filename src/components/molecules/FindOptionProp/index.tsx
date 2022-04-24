/* eslint-disable no-eval */

import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import TextField, { Input } from "@material/react-text-field";
import Select, { OptionType } from "react-auto-scroll-time-select";

const FindOptionProp = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [findOption, setFindOption] =
    useState<string>(`(({ value }, inputValue) => {
  if (inputValue) {
    if (inputValue.indexOf(":") < 0) {
      if (inputValue.length <= 2) {
        return value.indexOf(inputValue + ":") > -1;
      } else {
        return value.replace(":", "").indexOf(inputValue) > -1;
      }
    } else {
      return value.indexOf(inputValue) > -1;
    }
  } else {
    return false;
  }
})`);
  const [inputValid, setInputValid] = useState<boolean>(true);

  const selectFindOption = inputValid
    ? { findOption: eval(findOption) }
    : { findOption: undefined };

  return (
    <Row data-testid="find-option-prop">
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Find Option</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>
              Set a function to find an option that matches the input character
            </Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <TextField
              label="Find Option Func"
              textarea
              style={{ width: "100%" }}
            >
              <Input
                data-testid="input"
                isValid={inputValid}
                rows={15}
                value={findOption}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.currentTarget.value;
                  if (value) {
                    try {
                      eval(value)({ value: "00:00", label: "00:00" }, "00:00");
                      setInputValid(true);
                    } catch {
                      setInputValid(false);
                    } finally {
                      setFindOption(value);
                    }
                  } else {
                    setInputValid(true);
                    setFindOption("");
                  }
                }}
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
          <Cell columns={6}>
            <Select
              data-testid="select"
              onChange={setOption}
              value={option}
              {...selectFindOption}
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

export default FindOptionProp;
