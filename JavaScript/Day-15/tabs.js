/*
Q4. Tabs
Tabbed panels are common in user interfaces. They allow you to select an interface panel by choosing from a
number of tabs “sticking out” above an element.
Implement a simple tabbed interface. Write a function, asTabs, that takes a DOM node and creates a tabbed
interface showing the child elements of that node. It should insert a list of <button> elements at the top of the
node, one for each child element, containing text retrieved from the data-tabname attribute of the child. All
but one of the original children should be hidden (given a display style of none). The currently visible node can
be selected by clicking the buttons.
When that works, extend it to style the button for the currently selected tab differently so that it is obvious
which tab is selected.
*/


function asTabs(node) {
    const tabButtons = document.createElement('ul');
    tabButtons.className = 'tab-buttons';
    
    const children = Array.from(node.children);
  
    // Create a button for each child element
    children.forEach((child, index) => {
      const button = document.createElement('button');
      button.textContent = child.getAttribute('data-tabname');
      button.addEventListener('click', () => {
        // Hide all tabs and remove active class from all buttons
        children.forEach((child) => {
          child.classList.remove('active');
        });
        tabButtons.querySelectorAll('button').forEach((btn) => {
          btn.classList.remove('active');
        });
  
        // Show the clicked tab and mark the button as active
        child.classList.add('active');
        button.classList.add('active');
      });
  
      tabButtons.appendChild(button);
    });
  
    // Show the first tab by default
    if (children.length > 0) {
      children[0].classList.add('active');
      tabButtons.querySelector('button').classList.add('active');
    }
  
    // Insert the buttons above the content
    node.insertBefore(tabButtons, node.firstChild);
  }
  
  // Initialize the tabs when the page loads
  asTabs(document.querySelector('tab-panel'));
  