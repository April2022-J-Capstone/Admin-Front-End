import React from "react";

const UserLabels = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <p className="p-2"><b>ID:</b> {props.user.id}</p>
      <p className="p-2"><b>Enabled:</b> {props.user.enabled}</p>
      <p className="p-2"><b>Username:</b> {props.user.userName}</p>
      <p className="p-2"><b>First Name:</b> {props.user.first_name}</p>
      <p className="p-2"><b>Last Name:</b> {props.user.last_name}</p>
      <p className="p-2"><b>Email:</b> {props.user.email}</p>
      <p className="p-2"><b>Phone Number:</b> {props.user.phone_number}</p>
      <p className="p-2"><b>Birth Date:</b> {props.user.birthdate}</p>
      <p className="p-2"><b>Veteran Status:</b> {props.user.veteran_status}</p>
      <p className="p-2"><b>Email Confirmed:</b> {props.user.email_confirmed}</p>
      <p className="p-2"><b>Account Active:</b> {props.user.account_active}</p>
    </div>
  )
}

export default UserLabels;