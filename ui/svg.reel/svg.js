/**
 * @module ui/svg.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Svg
 * @extends Component
 */
var Svg = exports.Svg = Component.specialize(/** @lends Svg# */ {
    constructor: {
        value: function Svg() {
            this.super();
        }
    }

});
Svg.addAttributes({
    width: {dataType: 'number', value: '100'},
    height: {dataType: 'number', value: '100'}
});
