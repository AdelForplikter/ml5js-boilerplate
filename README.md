# Boilerplate for p5.js and ml5.js

## Links

P5 website: [p5js.org](https://p5js.org/)

Ml5 website: [ml5js.org](https://ml5js.org/)

## Local copy vs CDN

This repo uses a local copy of the libraries in the directory /lib/ but you could replace them with CDN-links. Replace the top 3 \<script> tags in index.html with the 3 following \<script>-tags.

```HTML
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
<script src="https://www.unpkg.com/p5@latest/lib/p5.min.js"></script>
<script src="https://www.unpkg.com/p5@latest/lib/addons/p5.sound.min.js"></script>
```

## Code

Your code lives in sketch.js.

This boilerplate comes with a basic example witch uses a webcam and MobileNet classification. It assumes you have a webcam. It assumes you are connected to internet.
