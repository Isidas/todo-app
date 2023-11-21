import { Button, Typography, Stack, Input } from "@mui/material";

import Todo from "./conponents/Todo";

const App = () => {
  return (
    <div className="App" style={{ width: "50%", margin: "0 auto" }}>
      <Typography variant="h2" align="center">
        ToDo App
      </Typography>
      <Stack
        alignItems="center"
        direction="column"
        justifyContent="center"
        sx={{ mt: 2 }}
      >
        <Input fullWidth />
        <Stack direction="row">
          <Button
            sx={{ m: 2 }}
            color="primary"
            size="large"
            variant="contained"
          >
            Добавить задачу
          </Button>
          <Button
            sx={{ m: 2 }}
            color="secondary"
            size="large"
            variant="contained"
          >
            Удалить задачу
          </Button>
        </Stack>
      </Stack>
      <Stack alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
        <Todo />
        <Todo />
        <Todo />
      </Stack>
    </div>
  );
};

export default App;
