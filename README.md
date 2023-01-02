# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- Flexbox
- Vanilla JS
- SASS/SCSS

### What I learned
- Fetch
- async/await
- SetTimeout/SetInterval

```js
async function getData(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch(err) {
        console.log(err);
    }
}
```

### Continued development

Adaptive layout

### Useful resources

- [Learn JS](https://learn.javascript.ru/) 
- [Stackoverflow](https://stackoverflow.com/)

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@shuvalovrus](https://www.frontendmentor.io/profile/shuvalovrus)

## Acknowledgments

[Advice Slip JSON API](https://api.adviceslip.com/)

