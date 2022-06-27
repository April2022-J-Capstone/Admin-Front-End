import React from "react";
import ExpandEntry from "../atoms/ExpandEntry";

const TableEntry = (props) => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-center align-items-center">
        <h5 className="m-0">{props.entity.cardName}</h5>
        <div className="flex-fill"></div>
        <button className="btn btn-primary me-2" onClick={() => props.edit(props.entity.id, props.entity)}>Edit</button>
        <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target={"#" + props.panelName + "-" + props.entity.id}>Expand</button>
      </div>
      <div className="card-body collapse" id={props.panelName + "-" + props.restaurant.id}>
        <ExpandEntry
          entity = {props.entity}
        />

      </div>
    </div>
  )
}

export default TableEntry;