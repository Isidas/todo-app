import { useState } from "react";
import { Button, Stack, Input } from "@mui/material";
import { observer } from "mobx-react-lite";

import todoStore from "../store/todo-store";

const ChangeMenu = observer(() => {
  const [task, setTask] = useState("");
  const handleAddTodo = () => {
    if (task.trim() !== "") {
      todoStore.addTodo(task);
      setTask("");
    }
  };
  return (
    <Stack
      alignItems="center"
      direction="column"
      justifyContent="center"
      sx={{ mt: 2 }}
    >
      <Input fullWidth value={task} onChange={(e) => setTask(e.target.value)} />
      <Stack direction="row">
        <Button
          sx={{ m: 2 }}
          color="primary"
          size="large"
          variant="contained"
          onClick={handleAddTodo}
        >
          Добавить задачу
        </Button>
      </Stack>
    </Stack>
  );
});
export default ChangeMenu;
