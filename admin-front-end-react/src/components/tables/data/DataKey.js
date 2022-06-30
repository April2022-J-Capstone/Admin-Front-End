class DataKey {
    constructor(propertyName, formattedName, jsonNavigator, type) {
        this.propertyName = propertyName;
        this.formattedName = formattedName;
        this.jsonNavigator = jsonNavigator;
        this.type = type;
    }
}

export default DataKey;