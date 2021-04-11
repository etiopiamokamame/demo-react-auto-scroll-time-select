import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import Radio, { NativeRadioControl } from "@material/react-radio";
import Select, {
  OptionType,
  StyleConfigType,
} from "react-auto-scroll-time-select";

const IsClearableProp = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [isClearable, setIsClearable] = useState<boolean>(true);

  return (
    <Row>
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Is Clearable</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>
              If true, a button to clear the input value is displayed.
            </Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <Radio label="Is Clearable" key="true">
              <NativeRadioControl
                name="isClearable"
                checked={isClearable}
                onChange={() => setIsClearable(true)}
              />
            </Radio>
            <Radio label="Is Not Clearable" key="false">
              <NativeRadioControl
                name="isClearable"
                checked={!isClearable}
                onChange={() => setIsClearable(false)}
              />
            </Radio>
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
              key={String(isClearable)}
              isClearable={isClearable}
              onChange={setOption}
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

export default IsClearableProp;
