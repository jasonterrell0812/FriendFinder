var friends = require('../data/friends.js');

module.exports = function(app) {
  // define the get api/friends route
  // app.get('/api/friends', function(req, res) {
  //     res.json(friends);
  // });




app.post("/api/friends", function(req, res) {

console.log(req.body);
console.log(friends);
res.json({name: "Jason"});

  });



  
};