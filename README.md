# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework

### What I learned

Arash: I learned many new aspects of using Tailwind CSS such as adding my own custom sizing (I specifically needed 22rem), making collapsible accordions, adding conditions to child based on parent's condition (i.e. group class), and so much more

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
    <details class="group border-b-2 border-gray-100" open>
      <summary class="flex cursor-pointer items-center justify-between p-4 text-gray-900">
        <h2 class="font-myFont group-open:font-bold text-sm">With Tailwind CSS, opening/closing this will make style changes to both the stem, the text below, and the arrow image (none of which will be visible in this code)</h2>
        <img src="images/icon-arrow-down.svg" alt="" class="transition duration-300 group-open:-rotate-180">
      </summary>
      <p class="mt-0 px-4 leading-5 text-gray-500 text-xs">
        Random text here that only appears if the stem is in the OPEN state
      </p>
    </details>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.



### Useful resources

- [Using state changes with Tailwind CSS](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state) - This article helped me understand how to group components so that changes to the parent state will make style changes to the child elements
- [Tailwind CSS Cheat Sheet](https://tailwindcomponents.com/cheatsheet/) - Fantastic little Tailwind CSS cheatSheet


## Author

- Website - [Arash Soltani](https://github.com/soltaniworld)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/soltaniworld)

