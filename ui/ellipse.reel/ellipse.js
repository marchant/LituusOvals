/**
 * @module ui/ellipse.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Ellipse
 * @extends Component
 */
var Ellipse = exports.Ellipse = Component.specialize(/** @lends Ellipse# */ {
    constructor: {
        value: function Ellipse() {
            this.super();
        }
    }
});

Ellipse.addAttributes({
    cx: {dataType: 'number', value: '100'},
    cy: {dataType: 'number', value: '100'},
    rx: {dataType: 'number', value: '100'},
    ry: {dataType: 'number', value: '100'},
    style: null
});
