import { FC } from "react";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { IExpense } from "../constants";
import { formatAmount, formatMonthYear } from "../helpers";

interface ExpencesListProp {
  expense: IExpense;
}

const ExpensesCard: FC<ExpencesListProp> = ({ expense }) => {
  const { accountName, date, storeName, totalBudget, totalSpend, img } =
    expense;

  const calculatePercentage = (
    totalSpend: number,
    totalBudget: number
  ): number => {
    if (totalBudget === 0) {
      return 0;
    }

    const percentage = (totalSpend / totalBudget) * 100;
    return parseFloat(percentage.toFixed(2));
  };

  return (
    <Card
      variant="outlined"
      sx={{
        background: "#FAFAFA",
        borderRadius: "21px",
        border: "none",
        padding: "20px 14px",
        marginBottom: "24px",
      }}
    >
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        marginBottom={3}
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

        <Typography variant="body2" fontSize={12} color="#A3A3A3">
          {formatMonthYear(date)}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
        marginBottom={2}
      >
        <Stack direction="row" gap={3}>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={400}
              color="#615C5C"
              marginBottom={3}
            >
              Total Spend
            </Typography>
            <Typography
              variant="h4"
              color="#2BB272"
              fontSize={18}
              fontWeight={500}
            >
              ${formatAmount(totalSpend)}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={400}
              color="#615C5C"
              marginBottom={3}
            >
              Total Budget
            </Typography>
            <Typography
              variant="h4"
              color="#000"
              fontSize={18}
              fontWeight={500}
            >
              ${formatAmount(totalBudget)}
            </Typography>
          </Box>
        </Stack>

        <Typography variant="h4" color="#2BB272" fontSize={18} fontWeight={500}>
          {calculatePercentage(totalSpend, totalBudget)}%
        </Typography>
      </Stack>

      <BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={calculatePercentage(totalSpend, totalBudget)}
      />
    </Card>
  );
};

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 13,
  borderRadius: 13,
  [`&.${linearProgressClasses.colorSecondary}`]: {
    backgroundColor: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 13,
  },
}));

export default ExpensesCard;
