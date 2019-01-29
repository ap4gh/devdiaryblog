---
title: 'Creating DevDiary Blog with Gatsby'
date: '2019-01-26'
author: 'Amrit Pandey'
author_website: 'https://amritpandey.xyz'
---

I started using Gatsby just a month ago. It is a *really fast* static website generator that can work with CMS, text data, databases, APIs, CSVs etc. to create static websites and  webapps. At the core of Gatsby are Webpack, React and GraphQL.

Static sites needs to be built and deployed everytime the code or content is changed. With static web hosting providers, it can be accomplished pretty easily. I have used [Netlify](https://www.netlify.com/) to host this blog, it triggers a deploy whenever new code is pushed to the master branch of my project. It is an amazing service, I definitely recommend it. 

### How I created DevDiary Blog

- <u>**Starter Files**</u>: Gatsby provides [starter blog project](https://github.com/gatsbyjs/gatsby-starter-blog), to get started. This blog is also made using the starter files provided by gatsby. So you could either fork the repo or just run following command.

```
npx gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
```

- <u>**Basic Setup**</u>: Test run this project with `npm start` via terminal, and head to `https://localhost:8000` in your web browser, you will see that a blog looking similar to DevDiary is already setup. But there are few things that needs to be changed.

​	 1. *App icon*: Favicon and Profile picture in bio can be changed by swaping the files inside `./content/assets` folder with your own.<br />
    2. *Site name and description*: Name, Description and other metadata can changed from the`./gatsby-config.js` file.<br />
    3. *Bio*: Bio can be edited in `./src/components/Bio.js` file.

- <u>**Creating Posts**</u>: Post are written in [markdown](https://www.markdowntutorial.com/) format. Posts can be added by creating a directory inside `./content/blogs` folder. You'll see that few sample posts already exist. Each post contains an `index.md` file and other resources like images. After adding a new post, run the site again with npm start. Gatsby automatically creates a blog entry on home page. Clicking on the blog entry will take you to the blog post.

- <u>**Producing the site**</u>: Once you are happy with all the settings and want to create a production build run the following commands to test the build project:
```
npm run build
serve -s public
```
If the site runs without any errors, you are ready to deploy it.

- <u>**Hosting the site**</u>: Netlify is a free service for hosting static websites and webapps, and it works flawlessly with React and Gatsby projects. To host your project first upload your project to the github/gitlab. Then register a free account on [Netlify](https://app.netlify.com/signup). After login, associate your github/gitlab account with Netlify. On the dashboard you will an option `DEPLOY WITH GIT` or something similar, just click it, select the project from your github/gitlab account and let Netlify do rest of the job for you. After a successful build and deployment, netlify will assign a domain name to the website which you can change later in the settings. And thats it! You blog is now live and served over HTTP.

> At this point you already have a working MVP blog, in the steps below we are going to perform few extra changes and additions.

- <u>**Custom CSS/Styles**</u>: By default, the starter project uses WordPress2016 theme, which is well and good but there are aspects we want to change. In my blog, I have added custom CSS on the top of Wordpress theme. Right now all the styles are inline and are handled with *rhythm* and *scale* modules from the installed theme, however we will use a CSS file to store styles. To import CSS, first create a CSS file in a directory of your choice, like `./src/styles` and then, import it in `./gatsby-browser.js`:
```js
import './src/styles/styles.css'
```
We are almost done here. Now, just update the `className` tag on elements, and subsequently add styles for them in the CSS file. There are few styles that are binded inline to the elements and cannot be cascaded. These can be changed from `./src/utils/typography.js` inside `overrideThemeStyle` function.
```js
Wordpress2016.overrideThemeStyles = () => {
        return {
            'a.gatsby-resp-image-link': {
                boxShadow: `none`,
            },
            'a': {
                color: `#3b9f56`
            }
        }
}
```
In the above code, I have added styles for anchor tag to have a color of green(*#3b9f56*) instead of blue.

- <u>**Dark Theme Toggle**</u>: The coolest thing about DevDiary blog(*other than the content*) is the dark theme toggler on the top right. It is cool for two reasons, first, it helps reader read comfortably in dark environments. Second, it is custom made in React. As gatsby runs over the React, it is possible to incorporate any functionality that can be devloped and coded in React. To create a feature like this and many more like it, you just have to know react. 

For creating the toggler I have used [react-toggle](https://github.com/aaronshaf/react-toggle), [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [persistant state](https://blog.mgechev.com/2015/03/05/persistent-state-reactjs/) in React.Component. I am not going to explain step by step how you can code this feature. The concept behind this toggler is best explained with following pseudo code.
```
    • User tap the toggler
        • Handle onChange
            • if checked == true
                • set localStorage.app_theme to dark
                • update the state of blog_app
            • else
                • set localStorage.app_theme to light
                • update the state of blog_app
```
This code is a very basic(*and incomplete*) explanation of how toggler works. Since I knew just basic React, the challenge for me was to save the state of the app, so that the user will not lose theme preference on browser refresh or route change. First I used `localStorage` to save the theme preference. But just saving a value does not update the state of the app, you also have to update the state everytime a component renders. For this, I had to learn a very essential *hack* for `React.Component` called persistent state. 

The basic idea of persistent state is that, on each `componentDidMount` lifecycle event in react, the state of the app should be set to the old value of state saved in localStorage. Hence it becomes easy to save and update theme of the app to user's liking. You can read code on my [gitlab](https://gitlab.com/amritpandey/devdiary-blog).

### Applause 👏 for Gatsby
*Making websites/apps is ultra-easy with Gatsby*. Gatsby provide us with everything that helps just to focus on our code and not on setting up other's code. Another great thing that I have not discussed are `gatsby plugins`. With plugins you don't have to code extra to handle special functionality like compiling scss to css. Things like reading and writing files, modifying images etc. are all handled by gatsby plugins. Routing on Gatsby is blazing fast, I have not seen pages route and render this fast anywhere. *I believe Gatsby is the best thing that ever came out of React and I really want to dive deep into this framework*.

### Future plans for the Blog
I will be investing my time more on this project to add more features. I have also planned to schedule time for learning Gatsby and GraphQL. You can discuss more about this project with me on my [discord](https://discord.gg/6RYUs42) or [twitter](https://twitter.com/ap4tt). Thanks for reading. 😃