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
        size: React.PropTypes.string.isRequired,
        iconSrc: React.PropTypes.string.isRequired,
        classs: React.PropTypes.string
    },
    getDefaultProps: function (){

        return {
            size: '48px',
            fill: 'blue',
            iconSrc: 'flashlight.svg',
            png: 'default.png',
            classname: 'svg'

        }

    },

    componentDidMount: function() {

        // Elements to inject
        var mySVGsToInject = React.findDOMNode(this.refs.inject);
        //options
        var options = {
            evalScripts: 'never'
        }
        // Do the injection
        Inject(mySVGsToInject, options);

    },

    render: function () {


        return (
        <img ref="inject" className={this.props.classname} src={this.props.iconSrc} data-fallback={this.props.png} />
        );
    }

});


/**
 * export the element
 */
module.exports = SVGIcons;

