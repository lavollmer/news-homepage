# News-Homepage

I created a News website homepage based on an example provided to me for design that I needed to match 1:1. The design image was provided with no additional help regarding code or framworks to use. The main technical frameworks I used were ReactJS, JavaScript, TailwindCSS, and Vite. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

The project encompassed creating a News homepage using ReactJS, Tailwind CSS, JavaScript and Vite. I was given a folder of assets including design examples, images, logos, and fonts to use. The images included computer and gaming images. The fonts was Inter Regular, Inter  Bold and Inter ExtraBold. The website included a logo in the top left corner, a navigation bar on desktop, a navigation side bar that would open by hamburger style for mobile, three distinct sections, a button to read more and additional functionality features. The project included specific color combinations, styling and knowledge of grid container layouts.

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots


Website Screenshots:

Netlify Deployed Website by Me (Desktop)

![Screenshot of Desktop Image on Netlify](./src/assets/readmeimages/DesktopScreenshotLV.png)

Example Desktop Website
![File Image given to me by Frontend Mentor](./src/assets/readmeimages/desktop-design.jpg)

Mobile Screenshots:


Netlify Deployed Website by Me (Mobile)

![Screenshot of Mobile Image on Netlify](./src/assets/readmeimages/Mobile_LV.png)
![Screenshot of Mobile Image on Netlify](./src/assets/readmeimages/MobileImage2LV.png)

Example Mobile Screenshot

![File Mobile Image given to me by Frontend Mentor](./src/assets/readmeimages/mobile-design.jpg)

Navigation Bar Screenshot:

Navigation Bar in Mobile Website by Me

![Screenshot of Desktop Image on Netlify](./src/assets/readmeimages/NavbarMobileLV.png)

Example Navigation Screenshot

![File Navigation Image given to me by Frontend Mentor](./src/assets/readmeimages/mobile-menu.jpg)


### Links

- Github Repo: [Github Repo news-homepage] https://github.com/lavollmer/news-homepage
- Live Site URL: [News Homepage Netlify](https://news-homepage-lauradev.netlify.app/)

## My process

My process for building this website involved planning, building and refractoring code. This project took me about 1.5 business days to complete start to finish.

See below my steps to completing it:
1. Set up Github Repo - The first steps to my process were to set up my Github Repo publicaly. I created a Github Repo called news-homepage. After that, I synced my Github Repo with my local machine and intiatlized the Repo. 
2. Set up React/Vite/Node.js/TailwindCSS in my project - For the design aspect I chose to use Tailwind CSS. It is a utility-first CSS framework that provides a wide range of pre-defined classes to style your website or application.
3. Before continuing on any coding, I ran "run npm dev" to see the basic website and that everything was functioning properly. I also made my first few commits to check that my Github was set up properly.
4. After everything was running smoothly, I reviewed the notes and layout for the news-homepage design challenge. I thought about how to create reusable components, the best way to format the grid container, as well as any other minor details (colors, fonts, etc).
5. Next I set up my site on Netlify. This allowed me to configure my repository to publish my code to a web address. My Netlify website is avilable to view in the Links section of this README.
6. After this, I did more planning with the design using ReactJS, Tailwind CSS and JavaScript.
  a. The given images, layout and font were in a zip file. I extracted the zip file to open images and be able to move into the assets/images folder within the src of my project.
  b. In VS Studio Code, I installed "ES7+ React/Redux/React-Native snippets" extension - to be able to use short commands in ReactJS.
  c. I installed the given font required for the project on to my computer. I later realized there was a different way to import the fonts which I will go into detail later.
  d. Install in termainl react-router-dom for navigation between pages.
  e. Install prettier extension in VS Studio Code to easily format document.
7. I structured my content with HTML. I input the given text for the website which focused my attention on creating well-structured content.
8. After everything was ready to go, I started coding from the top down with the website page. I began with thinking about which pieces could be reusable such as buttons, type, etc. I started with the navigation bar and build process. 
9. After the icon and navigation bar were semi-done, I went down the page and built out the main sections to a get a resemblance of what the page should look like.
10. After all major sections were in place such as the "new section", the "countdown section" and the "splash page", then I started to go through and look very close to the details. I went through each section and updated with improvements to match the example exactly.
  a. I removed excess components that I thought I would need but didn't. I had a Countdown component to house the CountdownCards component realizing I didn't need it. Additionally I deleted the MobileMenu component care as well.
  b. Another example, was I increased the top padding of the website to 10 to align the website more with the example on the desktop version.
  c. Futhermore, I used Coolors application to find the correct colors sourced from the image to use it in my website. This is the Coolors colors I used:
  ![Coolors Colors](./src/assets/readmeimages/CoolorsColors.jpg.png)
  d. I worked on Font styling with the given Fonts. I realized I had to import the fonts through a path in the App.css file before importing tailwind CSS utilities. The files give were incompatible with VS Studio Code so I used Transfonter to change the TTF files into WOFF and WOFF2 files. A TTF file is a TrueType Font file which is binary and that is used my the operating system. VS Studio Code is a text editor and cannot open binary files there you must change it to WOFF files.  Afterwards, I had to import those fonts into the tailwind.config.js file to be able to use in the website application. 
  e. Adding an icon into the HTML of the public folder for the tab image. I found a free image online of a world icon in which I added to the public folder for use.
11. In the prompt, it was stated to add functionality with hover and focus states of user areas. I was able to add hover tailwind CSS utilities to the navbar and the button to guide users on what they were selecting.
12. After completing the build and design process, I was reuploaded to Netlify after running an npm build. Netlify was able to deploy the website.
13. Finally, I finished the project with writing the README. Throughout the project I wrote in the README notes on process, areas of improvement, etc. I added screenshots, improved the reading quality and updated information. 
14. Enjoy my website and product!

### Built with

- Semantic HTML5 markup
- ReactJS
- Next.js
- Tailwind CSS
- Vite
- Mobile-first workflow
- Coolors Application
- Git Version Control

### What I learned

There were a number of things I learned building this project which was fun and exciting. 

Things I learned as I went through the build:
1. An indvidual needs to extract the zip file on Microsoft computers to be able to access images to move into the src images folder in VS Studio Code. This was the first project I build on a Windows computer, normally I use MacOS.
2. In the beginning when I was cleaning my file for basic structure, I deleted the public index.html file. I learned to not delete your public index.html file. I had to go back to my Github previous commit save, copy that file and add it back into my project. 
3. React-router-dom --> you need to wrap your index.js file with it to get all functionality of the router dom for all components
4. Added manifest.json file due to console error "Manifest: Line: 1, column: 1, Syntax error." Realized related to index.html file in public folder - removed mention of manifest file in index.html folder and worked - removed error
5. Added button component in App.js when really needed in another component - imported with no use and ESLint errored a message. Also button HTML is <button> and not <Button>
6. Ran npm run build in terminal to rebuild the project - tailwind css was not set up correctly/being imported
7. Grid container formatting for the countdown sections - formatting the divs to make sense - switched to 6 columns instead of 3
8. Styling the button itself and not the container the button sits in - 
9. span props for the container
10. Using font presented - downloaded in font translator

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
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

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

This project was done based upon Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
