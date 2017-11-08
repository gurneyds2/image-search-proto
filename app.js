/**
 * Module dependencies
 */
var snow = require('snow');
var shared = require('hf');

var experiments = [
  { name:'featureOne', default: false }
];

/**
 * Expose the app
 */
var app = module.exports = snow(__dirname, shared, { experiments: experiments });

/* Optionally include this to use an alternative template when wanting to create your own header and footer

app.locals._layoutFile = 'layout/layout-skills.ejs';

*/
