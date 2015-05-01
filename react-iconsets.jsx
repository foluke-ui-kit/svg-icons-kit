/**
 * Created by shawnsandy on 4/17/15.
 */


/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
var React = require('react');
var ObjectAssign = require('object-assign');
var $ = require('jquery');
var svg;
/**
 * Briefly describe your Element here
 */



/**
 * setup your react component
 */
SvgIconset = React.createClass({

    /**
     * set your prop validations
     *  // You can declare that a prop is a specific JS primitive. By default, these
     *  // are all optional.
     *  optionalArray: React.PropTypes.array,
     *  optionalBool: React.PropTypes.bool,
     *  optionalFunc: React.PropTypes.func,
     *  optionalNumber: React.PropTypes.number,
     *  optionalObject: React.PropTypes.object,
     *  optionalString: React.PropTypes.string,
     */
    displayName: "SvgIconset",

    propTypes: {
        size: React.PropTypes.string,
        name: React.PropTypes.string,
        iconID: React.PropTypes.string,
        iconsetUrl: React.PropTypes.string
    },

    /**
     * define misins
     */
    //mixins: [],

    /**
     * Set the default values for your states
     */
    //getInitialState: function () {},

    /**
     * get the props default
     */
    getDefaultProps: function () {
        return {
            iconID: 'beenhere',
            size: '48',
            style: {fill: ''},
            iconsetUrl: '',
            svgRef: 'svgbox',
            svg: ''
        }
    },


    /**
     *
     */
    componentWillMount: function () {


    },

    /**
     *
     */
    //componentWillReceiveProps: function () {},

    /**
     *
     */
    componentDidMount: function () {

        var ref = this.props.svgRef;
        var xml = this.props.iconsetUrl ;
        var icon = '#' +this.props.iconID;
        // use jquery to parse xml and find icon
        var svg;
          $.get(xml, function (data) {
               svg = $(data).find(icon).html();
               $(icon).html(svg);
               console.log(clean + '....' + svg);
           }
          )
    },

    /**
     *
     */
    //componentWillUnmount: function () {},

    render: function () {


        var styles = {
            fill: this.props.fill,
            verticalAlign: "middle",
            width: this.props.size,
            height: this.props.size

        }

        return (
            <svg id={ this.props.iconID } className={ this.props.iconID } viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                 style={ObjectAssign( this.props.style, styles )} ref="svgbox">
            </svg>
        );
    }
});


/**
 * export the element
 */
module.exports = SvgIconset;
