import { FC } from "react";
import HeaderTitle from "../components/HeaderTitle";
import Calendar from "../components/Calendar";

const Expenses: FC = () => {
  return (
    <main>
      <HeaderTitle title="Expenses" />
      <Calendar />
    </main>
  );
};

export default Expenses;
