import React, { useState } from "react";
import { Cell, Row } from "@material/react-layout-grid";
import { Subtitle2, Headline5, Body1 } from "@material/react-typography";
import Button from "@material/react-button";
import List, { ListItem } from "@material/react-list";
import Select, { OptionType } from "react-auto-scroll-time-select";

const HideOptionsProps = () => {
  const [option, setOption] = useState<OptionType | null>();
  const [hideOptions, setHideOptions] = useState<string[]>(["00:30"]);
  const [hideOption, setHideOption] = useState<OptionType | null>();

  const addHideOption = () => {
    if (hideOption) {
      setHideOptions([...hideOptions, hideOption.value]);
      setHideOption(null);
    }
  };

  const delHideOption = (index: number) => {
    setHideOptions(hideOptions.filter((_, i) => i !== index));
  };

  return (
    <Row data-testid="hide-options-prop">
      <Cell columns={12}>
        <Row>
          <Cell columns={12}>
            <Headline5>Hide Options</Headline5>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>Specify options to hide</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <Body1>Hide Option List</Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={9} align="middle" data-testid="hide-select">
            <Select
              hideOptions={hideOptions}
              onChange={setHideOption}
              value={hideOption}
            />
          </Cell>
          <Cell columns={3} align="middle">
            <Button
              data-testid="add-hide-option-btn"
              raised
              onClick={() => addHideOption()}
              disabled={!hideOption}
            >
              Add
            </Button>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12} align="middle">
            <List nonInteractive>
              {hideOptions.map((value, i) => {
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
          <Cell columns={6} data-testid="select">
            <Select
              onChange={setOption}
              value={option}
              hideOptions={hideOptions}
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

export default HideOptionsProps;
