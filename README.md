## P4--Website-Optimization

In this Repository you will find an optimized website. I made the optimization for website provided by Udacity (You can find the original repository [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)) All criteria must "meet specifications" in order to pass.

![criteria](https://github.com/fernandoawri/P4-Website-Optimization/blob/master/src/img/criteria.JPG)

### Getting started

#### Part 1: Check Optimize PageSpeed Insights score for index.html

I updated the html files from the repository to Meet specifications, I moved the scripts till the button of the file  and also I added async to the js files to eliminate render-blocking JavaScript and CSS in above-the-fold content. I also included the import for the google fonts to the perfmatters.js file.

I compressed and minified all the files to reduce the size of request submitted to the server. I compressed all images and created and resized some of them a make a better rendering.

To get started, check out the repository, inspect the code.

#### Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, I modified views/js/main.js to make the frames per second rate is 60 fps or higher.

To meet this specification I changed some method to get the elements in the javascript code. e.g. The document.getElementsByClassName() and document.getElementById() Web API call are faster than document.querySelectorAll() & document.querySelector() methods.

I updated some for loops saving the array length which is part of the condition statement, in a local variable, so the array's length property is not accessed to check its value at each iteration. (i.e. more efficiency)

I modified the changePizzaSizes() to avoid the multiple calls toa method, I changed the approach calling "var randomPizzas = document.getElementsByClassName("randomPizzaContainer");" outside of the for loop to make only one call to the DOM, and instead of call the method determineDx() multiple times, I create a switch that gives you the size in % to set the new size.

Also I replaced the "window.addEventListener('scroll', updatePositions);" for "window.addEventListener('scroll', animationCheck);" that way I call "window.requestAnimationFrame(updatePositions);", Also I added "backface-visibility: hidden;" to the center class in the CSS section and I'm using "translate3d" instead of "items[i].basicLeft + 100 * phase + 'px';" 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
