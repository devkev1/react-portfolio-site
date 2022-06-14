import WeatherApp from "./img/weather_app.jpg";
import RecipeFinder from "./img/recipe_finder.jpg";
import AppTracker from "./img/application_tracker.jpg";

export const projects = [
    {
        id: 1,
        img: WeatherApp,
        link: "https://devkev1.github.io/Weather-App/",
        p: "This is a simple weather application I made using HTML, CSS, and JavaScript DOM manipulation that calls to an API that fetches weather information based on the user’s location (such as city name or zip code) and displays it on the interface." 
    },
    {
        id: 2,
        img: RecipeFinder,
        link: "https://romantic-kare-aca670.netlify.app/",
        p: "This is an app where the user can enter a food ingredient and the app will call an API that fetches food recipes with the ingredient they searched and displays all the recipes on the interface. "
    },
    {
        id: 3,
        img: AppTracker,
        link: "https://fancy-pastelito-31a01e.netlify.app/",
        p: "This is a CRUD (create, read, update, delete) app I made for myself to keep track of job applications sent out. The user can enter company information such as the name of the company, position, contact info, etc., and can also edit and delete each application they input. "
    }
];