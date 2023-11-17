import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import ExpencesCard from "./ExpensesCard";
import { expenses } from "../constants";

interface ExpensesListProp {}

const ExpensesList: FC<ExpensesListProp> = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        marginBottom={3}
      >
        <Typography variant="h2" fontSize={24} fontWeight={500}>
          Expenses
        </Typography>
        <Button
          variant="text"
          sx={{
            color: "#A3A3A3",
            fontSize: "12px",
            fontWeight: 400,
            textTransform: "capitalize",
          }}
        >
          View All
        </Button>
      </Stack>

      {expenses.map((expense) => (
        <ExpencesCard expense={expense} key={expense.id} />
      ))}
    </>
  );
};

export default ExpensesList;
