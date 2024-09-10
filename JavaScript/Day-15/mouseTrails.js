/*
Q3. Mouse trail
In JavaScript’s early days, which was the high time of gaudy home pages with lots of animated images, people
came up with some truly inspiring ways to use the language. One of these was the mouse trail—a series of
elements that would follow the mouse pointer as you moved it across the page.
In this exercise, I want you to implement a mouse trail. Use absolutely positioned <div> elements with a fixed
size and background color (refer to the code in the “Mouse Clicks” section for an example). Create a bunch of
these elements and, when the mouse moves, display them in the wake of the mouse pointer.
There are various possible approaches here. You can make your trail as simple or as complex as you want. A
simple solution to start with is to keep a fixed number of trail elements and cycle through them, moving the
next one to the mouse’s current position every time a "mousemove" event occurs.
*/



// Number of trail elements
const TRAIL_COUNT = 10;
const trailElements = [];

// Create trail elements
for (let i = 0; i < TRAIL_COUNT; i++) {
  const trailElement = document.createElement('div');
  trailElement.className = 'trail';
  document.body.appendChild(trailElement);
  trailElements.push(trailElement);
}

let currentIndex = 0;

// Function to update the position of the trail elements
function updateTrail(x, y) {
  trailElements[currentIndex].style.left = `${x}px`;
  trailElements[currentIndex].style.top = `${y}px`;

  // Move to the next element in the array
  currentIndex = (currentIndex + 1) % TRAIL_COUNT;
}

// Add mousemove event listener
document.addEventListener('mousemove', (event) => {
  updateTrail(event.pageX, event.pageY);
});