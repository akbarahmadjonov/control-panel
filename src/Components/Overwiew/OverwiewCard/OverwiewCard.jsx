import "./OverwiewCard.scss"
import OverwiewCardData from "./OverwiewCardData";
export const OverwiewCard=()=>{
    return(
        <div className="OverwiewTop">
                    <ul className="cardlist list">
            <li className="list-unstyled text-center d-flex align-items-center justify-content-between ">
                {
                   OverwiewCardData.map((item) => (
                    <div className="cards ">
                        <p className="text fw-bold ">{item.title}</p>
                        <m className="card_number fw-bold text-center ">{item.number}</m>
                    </div>
                   )) 
                }
            </li>
        </ul>
        </div>

    )
}
