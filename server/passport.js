import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    // clientID: "705715764673-i62eol39l5qeeplb90vlrqdu190iafrn.apps.googleusercontent.com",
    // clientSecret: "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",
    // callbackURL: "http://localhost:4000/auth/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));
