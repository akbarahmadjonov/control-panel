import { Header } from "../Header";
import OverviewTickets from "./Overview-changed";
import { TicketName } from "./TicketUsersData";
import Dropdown from "../../assets/images/dropdown.svg";
import ArrowLeft from "../../assets/images/arrow - left.svg";
import ArrowRight from "../../assets/images/arrow - right.svg";
import "./Overview.changed.css";
import { useNavigate } from "react-router-dom";

export const Tickets = () => {
  let navigate = useNavigate();
  return (
    <>
      <Header />
      <OverviewTickets />
      {/* Table */}

      <div className="container table-user">
        <button onClick={() => navigate(-1)} className="button mb-4">
          <img src={ArrowLeft} />
          Back
        </button>
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h3>All tickets</h3>
          </div>
          <div>
            <button className="me-4 buttons">
              <i class="fa-solid fa-arrow-up-short-wide"></i> Sort
            </button>
            <button className="buttons">
              <i class="fa-solid fa-filter-circle-xmark"></i> Filter
            </button>
          </div>
        </div>
        <table className="table align-middle mb-0 bg-white rounded">
          <thead className="bg-light">
            <tr>
              <th>Ticket details</th>
              <th>Customer name</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Check</th>
            </tr>
          </thead>
          {TicketName.map((users) => (
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={users.img} className="rounded-circle" alt="" />
                    <div className="ms-3">
                      <p className="mb-1 userText">{users.text}</p>
                      <p className="text-muted mb-0">{users.lowerText}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-1 userText">{users.customerName}</p>
                  <p className="text-muted mb-0">{users.customerDate}</p>
                </td>
                <td>
                  <p className="mb-1 userText">{users.date}</p>
                  <p className="text-muted mb-0">{users.datetime}</p>
                </td>
                <td>
                  <span
                    className={
                      users.priorityClassHigh ||
                      users.priorityClassLow ||
                      users.priorityClassNormal
                    }
                  >
                    {users.priority}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fa-solid fa-ellipsis-vertical dots"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
          <div className="d-flex mt-3 ms-auto">
            <div className="ms-3 me-3">
              <p className="text-muted">
                Rows per page: <span className="text-dark">8</span>{" "}
                <img src={Dropdown} alt="img" />
              </p>
            </div>
            <div>
              <p className="text-muted">
                1-8 of 1240{" "}
                <a href="/" className="arrow text-decoration-none">
                  <img src={ArrowLeft} alt="img" />{" "}
                </a>
                <a href="/" className="arrow text-decoration-none">
                  <img src={ArrowRight} alt="img" />{" "}
                </a>
              </p>
            </div>
          </div>
        </table>
      </div>
    </>
  );
};
