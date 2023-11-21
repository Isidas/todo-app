import { Typography, Stack } from "@mui/material";

const Todo = () => {
  return (
    <Stack sx={{ width: "100%", mt: 1, p: 1 }} bgcolor="GrayText">
      <Typography align="start" variant="h4">
        ToDo
      </Typography>
    </Stack>
  );
};

export default Todo;
