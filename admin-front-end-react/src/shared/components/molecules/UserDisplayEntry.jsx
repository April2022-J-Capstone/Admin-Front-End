import React from "react";
import UserLabels from "../../../Labels/UserLabels";


const UserDisplayEntry = (props) => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-center align-items-center">
        <h5 className="m-0">{props.user.first_name + " " + props.user.last_name}</h5>
        <div className="flex-fill"></div>
        <button className="btn btn-primary me-2" onClick={() => props.editUser(props.user.id, props.user)}>Edit</button>
        <button className="btn btn-primary me-2" onClick={() => props.deactivatingUser(props.user.id, props.user)}>{props.activeState}</button>
        <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target={"#user-" + props.user.id}>Expand</button>
      </div>
      <div className="card-body collapse" id={"user-" + props.user.id}>
        <UserLabels
          user = {props.user}
        />
      </div>
    </div>
  )
}

export default UserDisplayEntry;