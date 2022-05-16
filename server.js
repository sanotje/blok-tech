const express = require("express");
const app = express();
/*const port = 3000;*/

/*****************************************************
 * Middleware
 ****************************************************/
app.use(express.static("public"));
// const profiles = require("./data")



const profiles = [
    {
      foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.geertvandeven.com%2Fprofielfoto%2F&psig=AOvVaw3a1qiqZwGA9Pri06kh2ZAG&ust=1652699284033000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIis3uCu4fcCFQAAAAAdAAAAABAD",
      name: "Petra",
      quote: "A nanny is a little bit parent, a little bit teacher and a little bit best friend!",
      age: "32",
      plaats: "Utrecht"
    },
    {
      name: "Sanae",
      foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.profielfotoshop.nl%2F&psig=AOvVaw3a1qiqZwGA9Pri06kh2ZAG&ust=1652699284033000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIis3uCu4fcCFQAAAAAdAAAAABAf",
      age: "20",
      plaats: "Haarlem"
    },
    {
        name: "Robert",
        foto: "",
        age: "29",
        plaats: "Amsterdam"
      },
];

  console.log(profiles[0].name)
/*****************************************************
 * Set template engine
 ****************************************************/
// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

/*****************************************************
 * Routes
 *
 * GET /
 *   home - show movielist
 ****************************************************/

// index page
app.get("/", (req, res) => {
  res.render("pages/index", {
      profiles: profiles
  });
});

app.get("/index", (req, res) => {
    res.render("pages/index.ejs", {
        profiles: profiles
    });
  });

app.get("/myfavorites", (req, res) => {
    res.render("pages/myfavorites.ejs", {
        profiles: profiles
    });
  });

/*****************************************************
 * If no routes give response, show 404 Page
 ****************************************************/

/*****************************************************
 * Start webserver
 ****************************************************/
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
