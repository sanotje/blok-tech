const express = require("express");
const app = express();
const port = 3000;

/*****************************************************
 * Middleware
 ****************************************************/
app.use(express.static("public"));
// const profiles = require("./data")

const profiles = [
    {
      name: "Peter",
      foto: "",
      age: "32",
      plaats: "Utrecht"
    },
    {
      name: "Sanae",
      foto: "",
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

/*****************************************************
 * If no routes give response, show 404 Page
 ****************************************************/

/*****************************************************
 * Start webserver
 ****************************************************/
app.listen(port, () => {
  console.log(`Webserver running on port localhost:${port}`);
});
