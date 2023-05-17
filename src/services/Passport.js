const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('../config/keys')
const User = require('../models/User')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    })
})


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/api/v1/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOneAndUpdate({ googleId: profile.id }, {
        accessToken,
        refreshToken,
        name: profile.displayName,
        avatarUrl: profile.picture,
        isVerified: profile.emails[0].verified,
    })

    if (existingUser) {
        return done(null, existingUser)
    }

    const user = await new User({
        accessToken,
        refreshToken,
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
        avatarUrl: profile.picture,
        isVerified: profile.emails[0].verified,
    }).save()

    done(null, user)
}));
