import expences_avatar from '../assets/expences_avatar.png'
import expences_avatar_2 from '../assets/expences_avatar-2.png'

export interface ITransaction {
  id: string;
  storeName: string;
  amount: number;
  accountName: string;
  date: number;
  img: string;
}

export interface IExpense {
  id: string;
  storeName: string;
  date: number;
  accountName: string;
  totalSpend: number;
  totalBudget: number;
  img: string;
}

export const transactions: ITransaction[] = [
  {
    id: "1",
    storeName: "Nike Super Store",
    amount: 475,
    accountName: "Bank Account",
    date: 1659696000000,
    img: expences_avatar
  },
  {
    id: "2",
    storeName: "Puma Store",
    amount: 952,
    accountName: "Bank Account",
    date: 1659696000000,
    img: expences_avatar_2
  }
]

export const expenses: IExpense[] = [
  {
    id: "1",
    storeName: "Nike Super Store",
    date: 1659696000000,
    accountName: "Bank Account",
    totalSpend: 2486,
    totalBudget: 3000,
    img: expences_avatar
  }
]