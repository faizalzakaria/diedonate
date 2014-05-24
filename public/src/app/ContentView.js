define(function(require, exports, module) {
  var Surface                 = require('famous/core/Surface');
  var Modifier                = require('famous/core/Modifier');
  var Transform               = require('famous/core/Transform');
  var TouchSync               = require('famous/inputs/TouchSync');
  var GenericSync             = require('famous/inputs/GenericSync');
  var View                    = require('famous/core/View');
  var Transitionable          = require('famous/transitions/Transitionable');
  var TransitionableTransform = require('famous/transitions/TransitionableTransform');

  function ContentView() {
    View.apply(this, arguments);
    _createPages.call(this);
  }

  ContentView.prototype = Object.create(View.prototype);
  ContentView.prototype.constructor = ContentView;

  ContentView.DEFAULT_OPTIONS = {};

  function _createPages() {
    this.titleSurface = new Surface({
       size: [undefined, this.options.headerHeight],
       content: 'Hello World',
       classes: ['headerTitle'],
         properties: {
           webkitUserSelect: 'none',
           userSelect: 'none'
         }
       });

       this.titleModifier = new Modifier({
         origin: [0, 0]
       });

      this.titleSurface.pipe(this._eventOutput);
      this._add(this.titleModifier).add(this.titleSurface);
  }

  module.exports = ContentView;

});
