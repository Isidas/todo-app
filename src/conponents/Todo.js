import { Typography, Stack, Button } from "@mui/material";
// import { red } from "@mui/material/colors";
const color = "#A9A9A9";

const Todo = () => {
  return (
    <Stack
      sx={{ width: "100%", mt: 1, p: 2, borderRadius: "10px" }}
      bgcolor={color}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography align="start" variant="h4">
        ToDo
      </Typography>
      <Stack direction="row" sx={{ gap: "10px" }}>
        <Button color="info" variant="contained">
          Редактировать
        </Button>
        <Button color="error" variant="contained">
          Удалить
        </Button>
      </Stack>
    </Stack>
  );
};

export default Todo;
