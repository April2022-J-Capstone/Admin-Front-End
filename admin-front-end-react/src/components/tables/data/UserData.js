import DataKey from "./DataKey";

class UserData {

    type = "user";

    static keyRing = [
        new DataKey("id", "ID", ["_links", "self", "href"], "url"),
        new DataKey("username", "Username", ["userName"], "static")
    ];

    constructor(userData) {
        if (userData != null) {
            this.id = new URL(userData["_links"]["self"]["href"]).pathname;
            this.username = userData.userName;
        }
    }

    getName() {
        return this.username;
    }
}

export default UserData;
