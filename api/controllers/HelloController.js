/**
 * Created by voyager on 8/4/16.
 */


module.exports = {
  hi: function (req, res) {
    return res.send('Hi there!');
  },
  bye: function (req, res) {
    return res.redirect('http://www.sayonara.com');
  },

  index: function ( req, res ){

   // return res.send('index!');
    return res.view();
  }
};
