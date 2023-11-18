import { FC } from "react";
import HeaderTitle from "../components/HeaderTitle";
import CreditCard from "../components/CreditCard";
import TransactionList from "../components/TransactionList";
import Analytics from "../components/Analytics";

const Home: FC = () => {
  return (
    <main style={{ marginBottom: "120px" }}>
      <HeaderTitle title="Home" />
      <CreditCard credit_number="2544 7545 3785 1023" balance={7622.0} />
      <Analytics />
      <TransactionList />
    </main>
  );
};

export default Home;
