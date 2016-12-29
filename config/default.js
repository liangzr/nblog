modules.exports = {
	port: 3000,
	session: {
		secret: 'myblog',
		key: 'myblog',
		maxAge: 2592000000
	},
	mongodb: 'mongodb://liangzr.tech:27017/nblog'
};