import "./Unresolved.scss";
import UnresolvedData from "./UnresolvedData";

export const Unresolved = () => {
  return (
    <div className="topper">
      <div className="wrapper">
        <div className="inner__wrapper">
          <h2 className="wrapper__title">Unresolved tickets</h2>
          <p className="wrapper__text">Group:</p>
          <span>Support</span>
        </div>
        <a className="wrapper__link" href="./index.jsx">
          View details
        </a>
      </div>

      {
        UnresolvedData.map((resolved) =>  
        <li className="ResolveList__Item">
            <p>{resolved.text}</p>
          <p className="ResolveList__Amount">{resolved.amount}</p>
        </li>
      )
     }
    </div>
  );
};
