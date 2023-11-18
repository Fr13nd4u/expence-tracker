import { FC, useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import TinyBarChart from "./TinyBarChart";

const data = [
  { month: "Jan", amount: 5234 },
  { month: "Feb", amount: 3900 },
  { month: "Mar", amount: 2234 },
  { month: "Apr", amount: 2234 },
  { month: "May", amount: 2900 },
  { month: "Jun", amount: 1234 },
  { month: "Jul", amount: 1000 },
];
const Analytics: FC = () => {
  const [year, setYear] = useState("2022");

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        marginBottom={3.75}
      >
        <Typography variant="h2" fontSize={24} fontWeight={500}>
          Analytics
        </Typography>

        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            sx={{
              background: "#FF643B",
              color: "#fff",
              borderRadius: "12px",
            }}
            value={year}
            label="Year"
            onChange={handleChange}
          >
            <MenuItem value={2022}>Year - 2022</MenuItem>
            <MenuItem value={2021}>Year - 2021</MenuItem>
            <MenuItem value={2020}>Year - 2020</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <TinyBarChart data={data} />
    </>
  );
};

export default Analytics;
