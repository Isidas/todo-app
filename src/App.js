import { Typography, Stack } from "@mui/material";

// import Todo from "./components/Todo";
import Todo from "./components/Todo";
import ChangeMenu from "./components/ChangeMenu";

const App = () => {
  return (
    <div className="App" style={{ width: "50%", margin: "0 auto" }}>
      <Typography variant="h2" align="center">
        ToDo App
      </Typography>
      <ChangeMenu />
      <Stack alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
        <Todo />
      </Stack>
    </div>
  );
};

export default App;
