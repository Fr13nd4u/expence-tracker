import { FC } from "react";
import HeaderTitle from "../components/HeaderTitle";
import Calendar from "../components/Calendar";
import BalanceCardList from "../components/BalanceCardList";
import ExpencesList from "../components/ExpensesList";

const Expenses: FC = () => {
  return (
    <main>
      <HeaderTitle title="Expenses" />
      <Calendar />
      <BalanceCardList />
      <ExpencesList />
    </main>
  );
};

export default Expenses;
