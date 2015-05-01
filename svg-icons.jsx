/**
 * Created by shawnsandy on 4/25/15.
 */


/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
var React = require('react');
var Inject = require('svg-injector');



/**
 * Briefly describe your Element here
 */

var SVGIcons = React.createClass({

    render: function () {
        return (
            <div>

                <div className="description"> Svg Icons</div>
            </div>
        );
    }

});


/**
 * setup your react component
 */
SVGIcons.Child = React.createClass({

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
    //propTypes: {},

    /**
     * define misins
     */
    //mixins: [],

    /**
     * Set the default values for your states
     */
    //getInitialState: function () {},

    /**
     * det the props default
     */
    getDefaultProps: function () {
        return {
            svgFile: 'John Hannock'

        }
    },

    /**
     *
     */
    //componentWillMount: function () {},

    /**
     *
     */
    //componentWillReceiveProps: function () {},

    /**
     *
     */
    componentDidMount: function () {

    },

    /**
     *
     */
    //componentWillUnmount: function () {},

    render: function () {
        return (
            <div className="hello">
                Hello { this.props.name }
            </div>
        );
    }
});


/**
 * export the element
 */
module.exports = SVGIcons;

