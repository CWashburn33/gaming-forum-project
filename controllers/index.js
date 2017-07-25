module.exports = (app) => {
	require('./users')(app);
	require('./home')(app);
};