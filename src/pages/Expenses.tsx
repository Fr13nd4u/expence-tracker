import { FC } from "react";
import HeaderTitle from "../components/HeaderTitle";
import Calendar from "../components/Calendar";
import BalanceCardList from "../components/BalanceCardList";

const Expenses: FC = () => {
  return (
    <main>
      <HeaderTitle title="Expenses" />
      <Calendar />
      <BalanceCardList />
    </main>
  );
};

export default Expenses;
