const router = require('express').Router();
const passport = require('passport');

// auth logout
router.get('/logout', (req, res) => {
	//handle with passport
	res.send('logging out');
});

// auth with Google
router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

module.exports = router;