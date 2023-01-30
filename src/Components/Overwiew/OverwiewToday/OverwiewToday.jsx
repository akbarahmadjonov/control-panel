import "./OverwiewToday.scss";
import OverwiewTodayData from "./OverwiewTodayData";
import TodayImg from "../../../assets/images/todays-img.png";
import Line1 from "../../../assets/images/divider.svg";
import Line2 from "../../../assets/images/divider2.svg";
export const OverwiewToday = () => {
  return (
    <div className=" bg OverwiewTop  d-flex  mt-4 ">
      <div className="OverwiewTodayImg  ">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h5 className="h5 today_title">Today’s trends</h5>
            <span className="TodaySpan">as of 25 May 2019, 09:41 PM</span>
          </div>
          <div className="week">
            <span className="week_today">
              <img src={Line1} alt="line" />
              Today
            </span>
            <span className="week_yesterday">
              <img src={Line2} alt="line2" />
              Yesterday
            </span>
          </div>
        </div>
        <img src={TodayImg} alt="today_img" />
      </div>
      <ul className="TodayList">
        <li className="list-group-item  ">
          {OverwiewTodayData.map((item) => (
            <div className="TodayCard  text-center">
              <p className="TodayCard_text">{item.text}</p>
              <span className="TodayCard_number fw-bold">{item.number}</span>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};
