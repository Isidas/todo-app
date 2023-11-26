import { observer } from "mobx-react-lite";
import todoStore from "../store/todo-store";

import { Typography, Stack, Button, List, Checkbox } from "@mui/material";
const color = "#A9A9A9";

const Todo = observer(() => {
  const handleDeleteTodo = (id) => {
    todoStore.deleteTodo(id);
  };
  const hendleComplitedTodo = (id) => {
    todoStore.completedTodo(id);
  };

  return (
    <Stack>
      <List subheader={<li />}>
        {todoStore.todos.map((todo) =>
          todo.completed ? (
            <li key={todo.id}>
              <Stack
                sx={{
                  width: "100%",
                  mt: 1,
                  p: 2,
                  borderRadius: "10px",
                  opacity: "0.6",
                }}
                bgcolor={color}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography align="start" variant="h4">
                  {todo.task}
                </Typography>
                <Stack direction="row" sx={{ gap: "10px" }}>
                  <Button color="info" variant="contained">
                    Редактировать
                  </Button>
                  <Button
                    onClick={() => handleDeleteTodo(todo.id)}
                    color="error"
                    variant="contained"
                  >
                    Удалить
                  </Button>
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => hendleComplitedTodo(todo.id)}
                  />
                </Stack>
              </Stack>
            </li>
          ) : (
            <li key={todo.id}>
              <Stack
                sx={{
                  width: "100%",
                  mt: 1,
                  p: 2,
                  borderRadius: "10px",
                }}
                bgcolor={color}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography align="start" variant="h4">
                  {todo.task}
                </Typography>
                <Stack direction="row" sx={{ gap: "10px" }}>
                  <Button color="info" variant="contained">
                    Редактировать
                  </Button>
                  <Button
                    onClick={() => handleDeleteTodo(todo.id)}
                    color="error"
                    variant="contained"
                  >
                    Удалить
                  </Button>
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => hendleComplitedTodo(todo.id)}
                  />
                </Stack>
              </Stack>
            </li>
          )
        )}
      </List>
    </Stack>
  );
});

export default Todo;
