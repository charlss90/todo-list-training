import { Container, H1 } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Todo } from "../models";

interface Props extends NavigationScreenProps {
}

interface State {
  todo: Todo
}

export class TaskDetailScreen extends React.Component<Props, State> {
  state = {
    todo: {
      title: "",
      complete: false
    }
  };

  componentWillMount() {
    const todo = this.props.navigation.getParam("item", {}) as Todo;
    if (todo.title) {
      this.setState({ todo });
    }
  }

  render() {
    return (
      <Container>
        <H1>{this.state.todo.title || ""}</H1>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  content: {

  }
})