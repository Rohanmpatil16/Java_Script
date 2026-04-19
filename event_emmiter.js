function createEventEmitter() {
    let events = {};

    return {
        on: function (eventName, callback) {
            if (!events[eventName]) {
                events[eventName] = [];
            }
            events[eventName].push(callback);
        },

        emit: function (eventName, data) {
            if (events[eventName]) {
                events[eventName].forEach((cb) => cb(data));
            }
        }
    };
}

const emitter = createEventEmitter();

emitter.on("greet", (name) => {
    console.log("Hello", name);
});

emitter.emit("greet", "Rohan");