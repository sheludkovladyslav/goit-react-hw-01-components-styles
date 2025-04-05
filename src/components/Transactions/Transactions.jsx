import css from "./Transactions.module.css";

export const Transactions = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.header}>
        <tr className={css.row}>
          <th className={css.row_title}>Type</th>
          <th className={css.row_title}>Amount</th>
          <th className={css.row_title}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map((item) => {
          return (
            <tr className={css.row} key={item.id}>
              <td className={css.row_item}>{item.type}</td>
              <td className={css.row_item}>{item.amount}</td>
              <td className={css.row_item}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
