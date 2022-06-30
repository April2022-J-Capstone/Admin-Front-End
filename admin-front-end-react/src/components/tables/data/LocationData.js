class LocationData {
    id = 0;
    locationName = "Location Name";
    address = "Address";
    city = "City";
    state = "State";
    zipCode = 12345;

    static locationReferenceTable = [
        //Formatted Name    //Property Name     //JSON Name
        ["ID",              "id"                ],
        ["Location Name",   "locationName"      ]
    ];

    constructor() {
        this.id = 1;
    }

}

export default LocationData;