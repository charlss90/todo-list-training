import React from "react";
import { View, Input, Item, Label } from "native-base";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
}

export class InputSearch extends React.Component<Props> {
  render() {

    return (
      <View style={{ padding: 10 }}>
        <Item floatingLabel>
          <Label>{this.props.placeholder}</Label>
          <Input
            {...this.props}
            placeholder="" />
        </Item>
      </View>
    )
  }
}