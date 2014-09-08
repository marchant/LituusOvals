/**
 * @module ui/poly-lituus-ovals.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class PolyLituusOvals
 * @extends Component
 */
var PolyLituusOvals = exports.PolyLituusOvals = Component.specialize(/** @lends PolyLituusOvals# */ {
    constructor: {
        value: function PolyLituusOvals() {
            this.super();
        }
    },
    shapes: {
        get: function() {
            
             var basePointX  = 350, basePointY = 250;
             var currentX    = 0, currentY     = 0;
             var offsetX     = 0, offsetY      = 0;
             var radius      = 0, spiralCount  = 4;
             var Constant    = 200, angle     = 0;
             var deltaAngle  = 1, maxAngle     = 721;

             var offsetX=0, offsetY=0, index=0;
             var majorAxis=40, minorAxis=60; 
             var shapes=[], color="", colors = ["#f00", "#ff0"];

             for(angle=0; angle<maxAngle; angle+=deltaAngle) {
                 radius   = Constant*Constant/angle;
                 offsetX  = radius*Math.cos(angle*Math.PI/180);
                 offsetY  = radius*Math.sin(angle*Math.PI/180);
                 currentX = basePointX+offsetX;
                 currentY = basePointY-offsetY;

                 // an index into the array of colors
                 index = Math.floor(angle/deltaAngle);

                 shapes.push({cx:currentX,  cy:currentY, 
                              rx:majorAxis, ry:minorAxis, 
                              fill:colors[index%colors.length]});
             }

             return shapes;
         },
            
        }
    }
    
});


PolyLituusOvals.addAttributes({
    width: {dataType: 'number', value: '100'},
    height: {dataType: 'number', value: '100'}
});

