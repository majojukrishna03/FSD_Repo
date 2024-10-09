/*
Q2. THE LOCKED BOX
Consider the following (rather contrived) object:
const box = new class {
    locked = true;
    #content = [];
    unlock() { this.locked = false; }
    lock() { this.locked = true; }
    get content() {
        if (this.locked) throw new Error("Locked!");
            return this.#content;
    }
};
It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.
Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the
function, and then ensures that the box is locked again before returning, regardless of whether the argument
function returned normally or threw an exception.
*/

const box = new class {
    locked = true;
    #content = [];
    
    unlock() { this.locked = false; }
    lock() { this.locked = true; }
    
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this.#content;
    }
};

function withBoxUnlocked(body) {
    const isLocked = box.locked;

    if (isLocked) {
        box.unlock();
    }

    try {
        return body();
    } finally {
        if (isLocked) {
            box.lock();
        }
    }
}

withBoxUnlocked(() => {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(() => {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}

console.log(box.locked);
// → true
