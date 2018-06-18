import { Container, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableHighlightComponent } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { InputSearch } from "../components/InputSearch";
import { TaskList } from "../components/TaskList";
import { Todo, AppState } from "../models";
import { connect, DispatchProp } from "react-redux";
import TodoActions from "../actions/TodoActions";
import { Dispatch } from "redux";

interface Props extends NavigationScreenProps, DispatchProp {
  todos: Todo[],
  createTodo: (newTodo: Todo) => any;
}

interface State {
  title: string;
  todos: Todo[];
}

class HomeScreenImpl extends React.Component<Props, State> {

  state = {
    title: "",
    todos: [
      { title: "Hello", complete: false }
    ]
  };

  render() {
    const { navigation, todos } = this.props;

    return (
      <Container>
        <View style={{ flex: 1 }}>
          <InputSearch
            value={this.state.title}
            onChangeText={this.setTitle}
            onSubmitEditing={this.createTodo}
            autoCorrect={false}
            autoCapitalize={"none"}
            placeholder={"Añade tu tarea"} />
          <TaskList
            onPress={(item) => {
              navigation.navigate("Detail", { item });
            }}
            items={todos} />
        </View>

      </Container>
    )
  }

  setTitle = (title: string) =>
    this.setState({ title });

  createTodo = () => {
    const newTodo = {
      title: this.state.title,
      complete: false
    };
    // this.props.dispatch(TodoActions.create(newTodo))
    this.props.createTodo(newTodo);
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todoState.items
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createTodo: (newTodo: Todo) =>
      dispatch(TodoActions.create(newTodo))
  }
}

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreenImpl);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  }
})