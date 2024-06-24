import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

interface Transaction {
  id: string;
  date: string;
  time: string;
  amount: number;
  status: string;
}

const Wallet: React.FC = () => {
  const [balance, setBalance] = useState<number>(150);
  const [amount, setAmount] = useState<string>("");
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      date: "2023-06-01",
      time: "10:30 AM",
      amount: 50,
      status: "Completed",
    },
    {
      id: "2",
      date: "2023-06-02",
      time: "12:45 PM",
      amount: 100,
      status: "Completed",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isBalanceVisible, setIsBalanceVisible] = useState<boolean>(true);

  const handleAddFunds = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const amountNumber = parseFloat(amount);
    if (amountNumber <= 0) {
      setError("Amount must be greater than zero");
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      const newTransaction: Transaction = {
        id: `${transactions.length + 1}`,
        date: new Date().toISOString().split("T")[0],
        time: new Date().toLocaleTimeString(),
        amount: amountNumber,
        status: "Completed",
      };
      setBalance(balance + amountNumber);
      setTransactions([newTransaction, ...transactions]);
      setAmount("");
      setIsLoading(false);
    }, 1000);
  };

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div className="min-h-screen bg-[#151519] ">
      <div className="flex items-center justify-center ">
        <div
          id="wallet"
          className="mx-auto max-w-lg rounded-lg p-6 bg-[#1e1e23]  miniLaptop:mt-12"
          style={{
            backgroundImage: "url('https://yourimageurl.com')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#333",
          }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-green-700">My Wallet</h2>
            <button
              onClick={toggleBalanceVisibility}
              className="text-green-700"
            >
              {isBalanceVisible ? (
                <EyeSlashIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <span className="text-xl text-white font-semibold">
                Current Balance:{" "}
                {isBalanceVisible ? `₦${balance.toFixed(2)}` : "****"}
              </span>
            </div>
          </div>
          <form onSubmit={handleAddFunds} className="mb-6">
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="amount"
                className="mb-2 font-semibold text-green-700"
              >
                Add Funds
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="rounded-md border border-gray-300 p-2 hover:border-[#32cd32] focus:outline-[#32cd32]"
                placeholder="Enter amount"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-600"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Add Funds"}
            </button>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </form>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-green-700">
              Transaction History
            </h3>
            <ul className="divide-y divide-gray-200 rounded-lg text-white shadow-inner">
              {transactions.map((tx) => (
                <li
                  key={tx.id}
                  className="flex items-center justify-between px-4 py-2"
                >
                  <span>
                    {tx.date} {tx.time}
                  </span>
                  <span>₦{tx.amount.toFixed(2)}</span>
                  <span
                    className={`status ${tx.status === "Completed" ? "text-green-500" : "text-red-500"}`}
                  >
                    {tx.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
