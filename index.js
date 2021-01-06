const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User");
require("./services/passport");

const app = express();
mongoose.connect(keys.mongoURI);

// Parse body of incoming put requests
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express serves up public assets
  app.use(express.static("client/build"));

  // Express will serve up index.html
  const path = require("path");
  app.get("*", () => {
    path.resolve(__dirname, "client", "build", "index.html");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
