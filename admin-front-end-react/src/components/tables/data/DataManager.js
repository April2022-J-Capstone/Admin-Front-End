import React, { useState, useEffect } from "react";
import UserData from "./UserData";

class DataManager {

    static decoder(type) {
        if (type == null)
            return null;

        if (type === "user")
            return UserData;
    }

    static display(data) {
        if (data == null)
            return "Invalid Entry"

        let display = [];

        try {
            let keyRing = this.decoder(data.type).keyRing;

            for (let i = 0; i < keyRing.length; i++) {
                display.push(<p>{keyRing[i].formattedName}: {data[keyRing[i].propertyName]}</p>);
            }
        } catch (error) {
            display.push(<p>Error Assessing Entry</p>);
        }

        return display;
    }

    static getName(data) {
        if (data == null)
            return "Invalid Entity";
        return data.getName();
    }

    static getStringId(data) {
        return `${data.type}-${data.id}`;
    }

    static parseData(data) {
        let dataEntries = [];

        if (data != null) {
            if (data.users != null) {
                for (let i = 0; i < data.users.length; i++) {
                    dataEntries.push(new UserData(data.users[i]));
                }
            }
        }

        return dataEntries;
    }

}

export default DataManager;