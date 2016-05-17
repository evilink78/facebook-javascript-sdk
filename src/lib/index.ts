import http = require("http");
import vm = require("vm");
import concat = require('concat-stream');

export default {
	FB() {
		return http.get('//connect.facebook.net/en_US/sdk.js#xfbml=1',
			function(res) {
				res.setEncoding('utf8');
				res.pipe(concat({ encoding: 'string' }, function(remoteSrc) {
					vm.runInThisContext(remoteSrc, 'remote_modules/facebook-sdk.js');
				}));
			});
	}
}