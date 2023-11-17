import { FC } from "react";
import { formatCardNumber, formatNumberToCurrency } from "../helpers";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import { ExpensesIcon } from "../shared/SVGs";

import styles from "./BalanceCard.module.css";

interface BalanceCardProp {
  variant: "primary" | "secondary";
  balance: number;
  credit_number: string;
}

const BalanceCard: FC<BalanceCardProp> = ({
  variant,
  credit_number,
  balance,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        background: variant === "primary" ? "#8234F8" : "#FF643B",
        borderRadius: 0,
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
        color: "#FAFAFA",
        border: "none",
      }}
    >
      <Box padding="23px 23px 0">
        <Typography
          variant="h6"
          fontSize={16}
          fontWeight={500}
          marginBottom={1.75}
        >
          Total Balance
        </Typography>
        <Typography
          variant="h4"
          fontSize={27}
          fontWeight={700}
          marginBottom={3.4}
        >
          ${formatNumberToCurrency(balance)}
        </Typography>
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        gap="8px"
        sx={{
          background: "#FAFAFA",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding: "12px 12px 13px",
        }}
      >
        <IconButton
          className={
            variant === "primary" ? styles.primaryIcon : styles.secondaryIcon
          }
          sx={{ color: "rgba(122, 77, 190, 0.5)" }}
        >
          <ExpensesIcon />
        </IconButton>
        <Box>
          <Typography variant="body2" marginBottom={0.75} color="#000">
            Bank Account
          </Typography>
          <Typography
            variant="body1"
            fontSize={12}
            fontWeight={300}
            color="#A3A3A3"
          >
            {formatCardNumber(credit_number)}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default BalanceCard;
