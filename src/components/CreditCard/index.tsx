import { FC } from "react";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

import credit_icon from "../../assets/credit_icon.png";
import { SettingsDotsIcon } from "../shared/SVGs";

import styles from "./CreditCard.module.css";

interface CreditCardProps {
  credit_number: string;
  balance: number;
}

const CreditCard: FC<CreditCardProps> = ({ balance, credit_number }) => {
  const formatNumberToCurrency = (number: number): string => {
    const [whole, decimal] = number.toFixed(2).split(".");
    const formattedNumber = whole.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return `${formattedNumber}.${decimal}`;
  };

  return (
    <Card
      variant="outlined"
      className={styles.creditCard}
      sx={{
        position: "relative",
        background: "#2F3046",
        overflow: "visible",
        borderRadius: "24px",
        padding: "23px 30px 0",
        color: "#FAFAFA",
        margin: "70px 0 32px",
      }}
    >
      <div></div>
      <CardContent
        sx={{
          position: "relative",
          padding: 0,
        }}
      >
        <Typography variant="h6" fontSize={18} marginBottom={2}>
          Total Balance
        </Typography>
        <Typography
          variant="h4"
          fontSize={30}
          fontWeight={700}
          marginBottom={5}
        >
          ${formatNumberToCurrency(balance)}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Typography
            variant="body2"
            color="#A3A3A3"
            fontSize={18}
            fontWeight={500}
            sx={{ wordSpacing: "14px" }}
          >
            {credit_number}
          </Typography>
          <img src={credit_icon} alt="credit icon" />
        </Stack>

        <IconButton
          sx={{
            position: "absolute",
            top: "-16px",
            right: " -10px",
          }}
        >
          <SettingsDotsIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreditCard;
