import React, { useState, useEffect } from "react";

class user extends React.Component {
  id = 0;
  enabled = false;
  username = "default";
  firstName = "Jane";
  lastName = "doe";
  email = "janeDoe@example.com";
  phoneNumber = "";
  birthdate = "";
  veteran_status = "";
  confirmed = false;

  cardName = "Default title";

  expandedName = [
    "ID",
    "Enabled",
    "Username",
    "First Name",
    "Last Name",
    "Email",
    "Phone Number",
    "Birthdate",
    "Veteran Status",
    "Confirmed"
  ];

  expandedProperty = [
    "id",
    "enabled",
    "username",
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "birthdate",
    "veteran_status",
    "confirmed"
  ];
};