import { FC } from "react";
import BalanceCard from "./BalanceCard";
import { Stack } from "@mui/material";

const BalanceCardList: FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      gap="20px"
      marginBottom="32px"
    >
      <BalanceCard
        variant="primary"
        credit_number="2544 7545 3785 1965"
        balance={7622.0}
      />
      <BalanceCard
        variant="secondary"
        credit_number="2544 7545 3785 1965"
        balance={7622.0}
      />
    </Stack>
  );
};

export default BalanceCardList;
