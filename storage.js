function createStorage() {
    let store = {}; // private object

    return {
        setItem: function (key, value) {
            store[key] = value;
        },
        getItem: function (key) {
            return store.hasOwnProperty(key) ? store[key] : null;
        },
        removeItem: function (key) {
            delete store[key];
        },
        clear: function () {
            store = {};
        }
    };
}


const myStorage = createStorage();


myStorage.setItem("name", "Rohan");
console.log(myStorage.getItem("name")); 

myStorage.removeItem("name");
console.log(myStorage.getItem("name")); 

myStorage.setItem("age", 22);
myStorage.clear();
console.log(myStorage.getItem("age")); 