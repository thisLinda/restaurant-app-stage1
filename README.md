# Udacity Front-End Nanodegree Project

## /_TODO: hyperlinks for download, clone, Udacity_/

#### Restaurant Reviews

In addition to Udacity lessons I supplemented my learning with the following. Please note that I used the code written by Alexandro Perez for service workers in my project (credited within the code as well):

https://matthewcranford.com/restaurant-reviews-app-walkthrough

https://www.youtube.com/watch?v=ksXwaWHCW6k&t=11s service worker

https://www.youtube.com/user/TechGuyWeb/search?query=service+worker

https://www.youtube.com/results?search_query=service+worker+fun+fun+function

https://www.youtube.com/watch?v=wx4lQNGTf1s service workers

https://itnext.io/service-workers-your-first-step-towards-progressive-web-apps-pwa-e4e11d1a2e85

https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/ assist with skip link code

https://alexandroperez.github.io/mws-walkthrough

https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/ referenced by Alexandro Perez https://alexandroperez.github.io/mws-walkthrough/?1.23.registering-service-worker-and-caching-static-assets

##FYI

An HTTP server is required to open this file...may I suggest using Visual Studio Code? It makes coding life much more simple. Download or clone the repository.

## Project Overview: Stage 1 (Information below is instruction to the Udacity student for completing the project)

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
