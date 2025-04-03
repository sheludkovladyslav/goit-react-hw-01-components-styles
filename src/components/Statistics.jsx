export const Statistics = ({ statistics }) => (
  <>
    <section className="statistics">
      <h2 className="title">Upload Stats</h2>

      <ul className="stat-list">
        {statistics.map((statistic, index) => {
          return (
            <li className="" key={statistic.id}>
              <span className="statistics-label">{statistic.label}</span>
              <span className="percentage">{statistic.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  </>
);
