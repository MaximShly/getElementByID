function getWidth(id) {
    // Get the element with the specified ID
    var element = document.getElementById(id);
    
    // If the element exists, get its width in pixels and return it
    if (element) {
        return element.offsetWidth + ' px';
    }
    // If the element doesn't exist, return a message saying so
    else {
        return 'Element not found';
    }
}

// No need to change below this point.
// Note how we're using DOM elements here to display the result of the getWidth() function inside the "areaWidth" element
window.onload = () => {
  document.getElementById('areaWidth').innerHTML = getWidth('mainDiv');
};

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { getWidth };
}
