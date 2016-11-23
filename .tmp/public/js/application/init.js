var $ = require("jquery");
var angular = require("angular");
var react = require("react");
var ReactDOM = require('react-dom')

/** JQuery Instance */
window.$ = $;


/** React Instance */
window.React = react;
window.ReactDOM = ReactDOM;

/** Angular Instance */
window.angular = angular;



/** Jquery */
$( document ).ready( function(){

    var firstName = "Edward";
    var lastName = "Ballesteros";
    var template = "<span>Name " +  firstName  + "</span> <br> <span>Last Name" +  lastName + "</span> ";

   $("#jquery-mount").html( template );
});


/** Angular */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "Edward";
    $scope.lastName = "Ballesteros";
});



/** React*/
class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
}

ReactDOM.render( React.createElement(HelloMessage, { name: "Edward" }), document.getElementById('react-mount'));




