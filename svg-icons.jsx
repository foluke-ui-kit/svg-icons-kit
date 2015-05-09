/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
var React = require('react');
var Inject = require('svg-injector');
var $ = require('jquery');




/**
 * Briefly describe your Element here
 */

var SVGIcons = React.createClass({

    displayName: "SvgIcon",

    propTypes: {
        size: React.PropTypes.string
    },
    getDefaultProps: function (){

        return {
            size: '48px',
            fill: 'blue'

        }

    },

    componentDidMount: function() {

        // Elements to inject
        //var mySVGsToInject = document.querySelectorAll('img.inject-me');
        var mySVGsToInject = React.findDOMNode(this.refs.inject);
        // Do the injection
        Inject(mySVGsToInject);

    },

    render: function () {

        return (


            <div>
                <div ref=""  className="description"> Svg Icons</div>
                <img ref="inject" className="inject-me" src="flashlight.svg" />
            </div>
        );
    }

});


/**
 * export the element
 */
module.exports = SVGIcons;

