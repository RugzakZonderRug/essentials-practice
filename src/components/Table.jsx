import { formatter } from "../util/investment";

export default function Table({ investmentResults }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map(
          ({ year, interest, valueEndOfYear, investedCapital }, index) => (
            <tr key={index}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(valueEndOfYear - investedCapital)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
