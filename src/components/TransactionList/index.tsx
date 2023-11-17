import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import TransactionCard from "./TransactionCard";
import { transactions } from "../constants";

const TransactionList: FC = () => {
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
          Transactions
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

      {transactions.map((transaction) => (
        <TransactionCard transaction={transaction} key={transaction.id} />
      ))}
    </>
  );
};

export default TransactionList;
