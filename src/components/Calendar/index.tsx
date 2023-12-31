import { FC, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Grid } from "@mui/material";

import "./Calendar.css";

const Calendar: FC = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid
        container
        direction="column"
        alignItems="center"
        marginBottom="32px"
      >
        <DateCalendar
          showDaysOutsideCurrentMonth
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Grid>
    </LocalizationProvider>
  );
};

export default Calendar;
