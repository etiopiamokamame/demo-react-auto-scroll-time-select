import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import Button from "@material/react-button";
import List, { ListItem } from "@material/react-list";
import Select, { OptionType } from "react-auto-scroll-time-select";

const DisabledOptionsProps = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [disabledOptions, setDisabledOptions] = useState<string[]>(["00:30"]);
  const [disabledOption, setDisabledOption] = useState<OptionType | null>();

  const addHideOption = () => {
    if (disabledOption) {
      setDisabledOptions([...disabledOptions, disabledOption.value]);
      setDisabledOption(null);
    }
  };

  const delHideOption = (index: number) => {
    setDisabledOptions(disabledOptions.filter((_, i) => i !== index));
  };

  return (
    <Row data-testid="disabled-options-prop">
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Disabled Options</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>Specify options to disabled</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <Body1>Disabled Option List</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={9} align="middle">
            <Select
              data-testid="disable-select"
              disabledOptions={disabledOptions}
              onChange={setDisabledOption}
              value={disabledOption}
            />
          </Cell>
          <Cell columns={3} align="middle">
            <Button
              data-testid="add-disable-option-btn"
              raised
              onClick={() => addHideOption()}
              disabled={!disabledOption}
            >
              Add
            </Button>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <List nonInteractive>
              {disabledOptions.map((value, i) => {
                return (
                  <ListItem key={i}>
                    {value}

                    {i !== 0 && (
                      <Button raised onClick={() => delHideOption(i)}>
                        Del
                      </Button>
                    )}
                  </ListItem>
                );
              })}
            </List>
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
              disabledOptions={disabledOptions}
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

export default DisabledOptionsProps;
