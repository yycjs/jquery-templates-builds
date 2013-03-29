# jQuery, Templating, and Build Tools. Oh My!

---

## Today we are covering...

* [Bower](http://twitter.github.com/bower/)
* [Bootstrap](http://twitter.github.com/bootstrap/)
* [jQuery](http://jquery.com/)
* [Grunt](http://gruntjs.com/)

---

## Get your JavaScript

### Direct Downloads?
### CDNs ([Google](https://developers.google.com/speed/libraries/devguide), [Microsoft](http://www.asp.net/ajaxlibrary/cdn.ashx))?
### [Twitter Bower](http://twitter.github.com/bower/)

* Client side dependency management
* No more manual downloading
* Versioning and manifest support

<img src="images/bower_logo.png" alt="Twitter Bower" />

---

## Twitter Bootstrap

* CSS Framework
* Grid, responsive + other goodies
* Nice jQuery plugins

<img src="images/bootstrap_logo.jpg" alt="Twitter Bootstrap" />

---

## Templating

* Templates:
    - [Mustache](http://mustache.github.com/)/[Handlebars](http://handlebarsjs.com)
    - [EJS](http://embeddedjs.com/)/[HAML](http://haml.info/)
    - jQuery/[Underscore](http://underscorejs.org/#template)
    - [Jade](http://jade-lang.com/)
    - And more!
* [LinkedIn Performance Test](http://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more)
* [JSPerf Test](http://jsperf.com/dom-vs-innerhtml-based-templating/669)
* It's Demo Time!

---

## jQuery plugin

It's as simple as:

    (function($, undefined) {
       $.fn.myButton = function() {
        var text = this.text();
        this.click(function() {
          alert(text);
        });
       }

    })(jQuery);

And can be used like this:

    $('button').myButton();

---

## Grunt

* Badass JavaScript build tool
* Alternative to Ant, Maven, Scons and good old Makefiles
* Pluggable architecture (lots 'o plugins)

<img src="images/grunt_logo.jpg" alt="GruntJS" />