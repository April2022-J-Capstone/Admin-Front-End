import React, { useState, useEffect } from "react";
import {GetEntryData} from "../../hooks/GetEntryData";
import DataManager from "./data/DataManager";
import Entry from "./Entry";

const Table = (props) => {
    const [data, loading] = GetEntryData("users");
    const [tableInfo, setTableInfo] = useState(null);
    const [tableEntries, setTableEntries] = useState(null);

    useEffect(() => {
        if(data) {
            const formattedInfo = data;

            //console.log(formattedInfo["_embedded"]);
            //console.log(formattedInfo["_links"]);
            //console.log(formattedInfo["page"]);

            setTableEntries(DataManager.parseData(data["_embedded"]));

            setTableInfo(formattedInfo);
        }
    }, [data]);

    if (tableEntries === null || tableEntries.length === 0)
        return (<p>no entries to display</p>);

    let toDisplay = [];

    for (let i = 0; i < tableEntries.length; i++)
        toDisplay.push(
            <Entry
                entryData={tableEntries[i]}
            />
        );

    return (
        <div className="accordion" id="accordionExample">
            {toDisplay}
        </div>
    );
}

export default Table;