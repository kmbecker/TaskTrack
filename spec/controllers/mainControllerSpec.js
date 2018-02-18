var request = require('request');
var server = require('../../server.js');
var baseUrl = 'http://localhost:3000';

describe('Main controller', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('returns correct body', function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(body.indexOf('Final Project') !== -1).toBe(true);
        done();
      });
    });
  });
});
