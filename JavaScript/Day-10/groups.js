/*
The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a
set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which
values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its
constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member),
delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating
whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine whether two values are the
same.
Give the class a static from method that takes an iterable object as its argument and creates a group that
contains all the values produced by iterating over it.
*/

class Group {
    constructor() {
      // Initializes an empty array to store the group's values
      this.values = [];
    }
  
    // Method to add a value to the group
    add(value) {
      // Only add the value if it is not already in the group
      if (!this.has(value)) {
        this.values.push(value);
      }
    }
  
    // Method to delete a value from the group
    delete(value) {
      // Only proceed if the value is in the group
      if (this.has(value)) {
        // Find the index of the value in the array
        const index = this.values.indexOf(value);
        // Remove the value from the array at the found index
        this.values.splice(index, 1);
      }
    }
  
    // Method to check if a value is in the group
    has(value) {
      // Return true if the value is in the array, otherwise false
      return this.values.includes(value);
    }
  
    // Static method to create a Group from an iterable (e.g., array, set)
    static from(iterable) {
      // Create a new instance of Group
      let group = new Group();
      // Add each value from the iterable to the new group
      for (let value of iterable) {
        group.add(value);
      }
      // Return the newly created group
      return group;
    }
  }


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
// console.log(group)
console.log(group.has(30));
// → false

group.add(10);
// console.log(group)
group.delete(10);
// console.log(group)
console.log(group.has(10));
// → false
