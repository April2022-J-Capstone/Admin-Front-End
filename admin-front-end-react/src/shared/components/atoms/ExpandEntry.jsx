import React from "react";

const ExpandEntry = (props) => {
  let entity = props.entity;
  const entries = [];
  for (let i = 0; i < entity.expandedName.length; i++) 
    entries.push(<p className="p-2"><b>entity.expandedName[i]</b> {entity[entity.expandedProperty[i]]}</p>);
  
  
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {entries}
    </div>
  )
}

export default ExpandEntry;