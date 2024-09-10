/*
Q2. Elements by tag name
The document.getElementsByTagName method returns all child elements with a given tag name. Implement
your own version of this as a function that takes a node and a string (the tag name) as arguments and returns
an array containing all descendant element nodes with the given tag name. Your function should go through
the document itself. It may not use a method like querySelectorAll to do the work.
To find the tag name of an element, use its nodeName property. But note that this will return the tag name in
all uppercase. Use the toLowerCase or toUpperCase string methods to compensate for this.
<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
spans.</p>
<script>
function byTagName(node, tagName) {
// Your code here.
}
console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2
</script>
*/

function byTagName(node, tagName) {
  // Create an empty array to store the matching elements
  let result = [];

  // Get all child nodes of the given node
  let children = node.childNodes;

  // Loop through each child node
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    
    // Check if the child is an element node and matches the tag name
    if (child.nodeType === Node.ELEMENT_NODE) {
      if (child.nodeName.toLowerCase() === tagName.toLowerCase()) {
        // If it matches, add it to the result array
        result.push(child);
      }

      // Recursively call byTagName for this child node
      result = result.concat(byTagName(child, tagName));
    }
  }

  return result;
}

// Test the function
console.log(byTagName(document.body, "h1").length); // Should print 1
console.log(byTagName(document.body, "span").length); // Should print 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length); // Should print 2
