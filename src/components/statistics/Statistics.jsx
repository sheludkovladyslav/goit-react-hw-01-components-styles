import css from "./Statistics.module.css";

export const Statistics = ({ statistics }) => (
  <>
    <section className={css.statistics}>
      <h2 className={css.title}>Upload Stats</h2>

      <ul className={css.list}>
        {statistics.map((statistic, index) => {
          return (
            <li className={css.item} key={statistic.id}>
              <span className={css.label}>{statistic.label}</span>
              <span className={css.percentage}>{statistic.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  </>
);
