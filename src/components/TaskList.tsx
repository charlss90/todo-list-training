import { H2, ListItem, View } from "native-base";
import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Todo } from "../models";


interface Props {
  items: Todo[];
  onPress(item: Todo): void;
}

export class TaskList extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.items}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtrator}
        />
      </View>
    )
  }

  renderItem = (info: ListRenderItemInfo<Todo>) => {
    const { item } = info;
    return (
      <ListItem onPress={() => this.props.onPress(item)}>
        <H2>{item.title}</H2>
      </ListItem>
    )
  }

  keyExtrator = (item: Todo) => item.title
}