# imgnary
Resize images with javascript - Easiest way in the whole wide friggn world.

Link to the imgnry.js file in the usual way:
$.getScript('imgnry.js');
or
<script src='imgnry.js'></script>

var file=$('#my-file-box').prop('files')[0];

// Example 1 : Resize image to max width 800.

imgnry.file(file);
imgnry.max(true); 
imgnry.width(800);
imgnry.quality(1);
imgnry.type('png');
imgnry.resize().then((img)=>{console.log(img)}) //base64

// Example 2 : Resize image to width at least 800.

imgnry.file(file);
imgnry.min(true); 
imgnry.width(800);
imgnry.quality(1);
imgnry.type('png');
imgnry.resize().then((img)=>{console.log(img)}) //base64

// Example 3 : Resize image to width 800.

imgnry.file(file);
imgnry.min(false);
imgnry.max(false);
imgnry.width(800);
imgnry.quality(1);
imgnry.type('png');
imgnry.resize().then((img)=>{console.log(img)}) //base64

// Example 4 : Resize image to max height 600.

imgnry.file(file);
imgnry.max(true); 
imgnry.height(600);
imgnry.quality(1);
imgnry.type('png');
imgnry.resize().then((img)=>{console.log(img)}) //base64

// Example 5 : Resize image to max width 800 and max height 600.

imgnry.file(file); imgnry.max(true); 
imgnry.width(800); 
imgnry.height(600); 
imgnry.quality(1); 
imgnry.type('png'); 
imgnry.resize().then((img)=>{console.log(img)}) //base64
