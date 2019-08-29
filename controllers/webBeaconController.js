exports.processRequest = function(req, res) {
	const ip = req.ip || req.headers['x-real-ip'] || req.connection.remoteAddress;
	const hostname = req.hostname;
	const queryParams = req.query;
	const userAgent = req.headers['user-agent'];
}
