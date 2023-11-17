import { FC } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { ITransaction } from "../constants";
import { formatAmount, formatDate } from "../helpers";

interface TransactionCardProp {
  transaction: ITransaction;
}

const TransactionCard: FC<TransactionCardProp> = ({ transaction }) => {
  const { accountName, amount, date, storeName, img } = transaction;
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      justifyContent="space-between"
      marginBottom={2}
      sx={{
        background: "#FAFAFA",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Stack direction="row" alignItems="center" gap="16px">
        <Avatar
          alt="Avatar"
          src={img}
          variant="circular"
          sx={{ width: "39px", height: "39px" }}
        />
        <Box>
          <Typography
            variant="h5"
            fontSize={16}
            fontWeight={500}
            marginBottom={0.5}
            color="#000"
          >
            {storeName}
          </Typography>
          <Typography variant="body2" fontSize={12} color="#A3A3A3">
            {accountName}
          </Typography>
        </Box>
      </Stack>

      <Box textAlign="right">
        <Typography
          variant="h4"
          color="#2BB272"
          fontSize={18}
          fontWeight={500}
          marginBottom={1}
        >
          ${formatAmount(amount)}
        </Typography>
        <Typography variant="body2" fontSize={12} color="#A3A3A3">
          {formatDate(date)}
        </Typography>
      </Box>
    </Stack>
  );
};

export default TransactionCard;
