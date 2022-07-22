// App Images
import budget from './assets/images/appImages/Budget.jpg';
import googlebooks from './assets/images/appImages/book_search.jpg';
import techblog from './assets/images/appImages/Tech_Blog.jpg';
import notetaker from './assets/images/appImages/NoteTaker.jpg';
import weatherdashboard from './assets/images/appImages/WeatherDashboard.jpg';
import dayplanner from './assets/images/appImages/DayPlanner.jpg';
import codequiz from './assets/images/appImages/CodeQuiz.jpg';

// Demo Gifs
import googleBooksGif from './assets/images/gifs/Book_Search.gif';
import techblogGif from './assets/images/gifs/Tech_Blog.gif';
import budgetGif from './assets/images/gifs/Budget.gif';
import noteTakerGif from './assets/images/gifs/NoteTaker.gif';
import weatherDashboardGif from './assets/images/gifs/WeatherDashboard.gif';
import codeQuizGif from './assets/images/gifs/CodeQuiz.gif';
import dayPlannerGif from './assets/images/gifs/DayPlanner.gif';

export const projects = [
  {
    id: "patel-rajendra/mean-book-search-engine",
    title: "Books Search Engine",
    description:
      "Books Search MERN app allow users to search for books via API and view/save books they wish to read. Also User can view/delete saved books.",
    imageUrl: googlebooks,
    appUrl: "https://sleepy-bastion-35277.herokuapp.com/",
    gif: googleBooksGif,
    technology: "MERN Stack, API, Bootstrap, Heroku",
    details: "book search engine application built using MERN stack, with a React front end, MondoDB database and Node.js/Express.js server and API. It allows users to search books, view their detailed information and save them.",
  },
  {
    id: "patel-rajendra/PWA-Budget-Tracker",
    title: "Budget Tracker (PWA)",
    description:
      "This is progressive web application (PWA) that gives users a fast and easy way to track their money while also plotting their data on a chart. ",
    imageUrl: budget,
    appUrl: "https://app-pwa-budget-tracker.herokuapp.com/",
    gif: budgetGif,
    technology: "Express.js, Node.js, Javascript, CSS", 
    details: "This app update an existing budget tracker application to allow for offline access and functionality.The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.",
  },
  {
    id: "patel-rajendra/Full-Stack-Tech-Blog",
    title: "Tech Blog",
    description:
      "This application is build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
    imageUrl: techblog,
    appUrl: "https://fullstack-mvc-tech-blog.herokuapp.com/",
    gif: techblogGif,
    technology: "MySQL, Node.js, Handlebars, Express",
    details: "This application is build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well."
  },
  {
    id: "patel-rajendra/Note-Taker",
    title: "Note Taker (Full Stack)",
    description:
      "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore.",
    imageUrl: notetaker,
    appUrl: "https://note-traker1.herokuapp.com/",
    gif: noteTakerGif,
    technology: "Express.js, Node.js, UUID, Javascript, HTML, CSS",
    details: "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore. This application uses an express backend and save and retrieve note data from a JSON file."
  },
  {
    id: "patel-rajendra/Weather-Dashboard",
    title: "Weather Dashboard (FrontEnd)",
    description:
      "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city.",
    imageUrl: weatherdashboard,
    appUrl: "hhttps://patel-rajendra.github.io/Weather-Dashboard/",
    gif: weatherDashboardGif,
    technology: "Javascript, JQuery, Bootstrap, HTML, CSS",
    details: "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city. This application is built using OpenWeather API to fetch weather data of searched city."
  },
  {
    id: "patel-rajendra/Code-Quiz",
    title: "Code Quiz (Front End)",
    description:
      "A timer-based quiz application that stores high scores of multiple users. Answering incorrectly results in penality of time.",
    imageUrl: codequiz,
    appUrl: "https://patel-rajendra.github.io/Code-Quiz/",
    gif: codeQuizGif,
    technology: "Javascript, Bootstrap, Browser LocalStorage, HTML, CSS",
    details: "A timer-based quiz application having multiple choice questions that stores high scores of multiple users. Answering incorrectly results in penality of time."
  },
  {
    id: "patel-rajendra/Work-Day-Scheduler",
    title: "Day Planner (Front End)",
    description:
      "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM. ",
    imageUrl: dayplanner,
    appUrl: "https://patel-rajendra.github.io/Work-Day-Scheduler/",
    gif: dayPlannerGif,
    technology: "JQuery, Javascript, Moment.js, Bootstrap, HTML, CSS",
    details: "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM. "
  },  
];