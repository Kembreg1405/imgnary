imgnary
The easiest way to resize images in JavaScript — simple, fast, and promise-based.

Why imgnary?
Tired of complicated image resizing libraries?
Want to resize and convert images in the browser with just a few lines of code?
imgnary makes it effortless.

Features
Resize images to any width or height

Control image quality

Convert image formats (PNG, JPEG, etc.)

Promise-based API for easy async handling

Lightweight and dependency-free

Installation
Just include the script in your HTML:

html
Copy
Edit
<script src="imgnry.js"></script>
Usage
javascript
Copy
Edit
// Select your file input
var file = document.getElementById('my-file-box').files[0];

// Configure imgnary
imgnry.file(file);
imgnry.max(true);         // Maintain aspect ratio
imgnry.width(800);        // Resize width to 800px
imgnry.quality(1);        // Max quality (0 to 1)
imgnry.type('png');       // Convert to PNG

// Resize and get base64 image result
imgnry.resize().then((img) => {
  console.log(img); // base64 encoded image string
});
Why use imgnary?
Because it’s the easiest way to resize images right in your browser with zero hassle.
