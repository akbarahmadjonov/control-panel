import "./OverwiewHeader.scss"
import SearchLogo from "../../../assets/images/search-icon.svg"
import Reporter from "../../../assets/images/notification-icon.svg"
import User from "../../../assets/images/account__user.png"
export const OverwiewHeader=()=>{
    return(
       <div className="OverwiewTop d-flex align-items-center ">
        <h2 className="Overwiew_title">Overview</h2>
        <div className="Overwiew_navbar ms-auto">
        <button className="btn  " >
        <img className="Overwiew_img" src={SearchLogo} alt="Search_logo" />
        </button>
        <button className="btn me-5 ">
            <img className="Reporter_logo " src={Reporter} alt="Reporter_logo" />
        </button>
        <span className="path d-inline "></span>
        </div>
        <div className="d-flex align-items-center ">
        <h5 className="title h5 ms-auto mt-2">Jones Ferdinand</h5>
        <button className="btn">
        <img className="User_foto ms-2" src={User} alt="user_foto" />
        </button>
        </div>
       </div>
    )

}