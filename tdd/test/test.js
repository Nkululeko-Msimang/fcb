const expect = require("chai").expect;
const request = require("request");

describe('API Test', function() {
	describe('calculate values', function(){
		let url = "http://localhost:3000/calculate"

		it('returns status 200', function(done){
			request.post(url, {
			json : {
				"values"
			:
				[1, 2, 3]
			}
		}, function(error, response, body){
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it('returns sum, average and standard deviation', function(done){
			request.post(url, {
				json: {
					"values"
					:
					[4,5,6]
				}
			}, function(error, response, body){
				expect(body.sumResult).to.equal(15);
				expect(body.averageResult).to.equal(5);
				expect(body.standardDevResult).to.equal(0.816496580927726);

				done();
			});
		});
	});
});
