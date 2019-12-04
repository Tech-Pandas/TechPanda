// Server file

require("dotenv").config();

const express = require("express");
const massive = require("massive");
const session = require("express-session");

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

const {
  SERVER_PORT,
  SESSION_SECRET,
  CONNECTION_STRING,
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET
} = process.env;
const cartCtrl = require("./cartController");
const stripeCtrl = require("./stripeController");

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

// There will be stuff for auth0 here

const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB connected");
});
app.use(passport.initialize());

app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
      clientSecret: AUTH0_CLIENT_SECRET,
      callbackURL: "/api/login"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get("db")
        .get_user_by_auth_id([profile.id])
        .then(res => {
          // console.log("res", res)
          // console.log("profiile", profile)

          if (!res[0]) {
            app
              .get("db")
              .create_user_by_auth_id([
                profile.id,
                profile.emails,
                profile.name.givenName,
                profile.picture
              ])
              .then(created => {
                return done(null, created[0]);
              });
          } else {
            return done(null, res[0]);
          }
        });
    }
  )
);
// console.log('session', session)
// console.log('passport', passport)
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
app.get("/api/getUser", (req, res, next) => {
  // console.log(req.session.passport.user)
  if (req.session.passport.user) {
    res.status(200).send(req.session.passport.user);
  } else res.sendStatus(500);
});
app.get(
  "/api/login",
  passport.authenticate("auth0", {
    failureRedirect: "http://localhost:3000/#/"
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/#/");
  }
);
app.get("/api/logout", (req, res) => {
  req.logout();
  let returnTo = "http://localhost:3000/";
  res.redirect(
    `https://${AUTH0_DOMAIN}/v2/logout?returnTo=${returnTo}&client_id=${AUTH0_CLIENT_ID}`
  );
});
app.post("/api/redirect", (req, res, next) => {
  returnStr = req.body.place;
  res.status(200).send(returnStr);
});

// ---------- AUTH0

// ----------cart ---------//
// no longer in use

app.post("/api/productid", cartCtrl.getProductID);
app.post("/api/cart", cartCtrl.addCart);
app.get("/api/cart", cartCtrl.getCart);

//------ Stripe Endpoints -------//

app.post("/charge/create", stripeCtrl.charge);
app.post("/customer/create", stripeCtrl.createCustomer);

//---- This is the Server Port Running Section ----//
const port = SERVER_PORT;

app.listen(port, () => console.log(`Take us to warp ${port}!`));
