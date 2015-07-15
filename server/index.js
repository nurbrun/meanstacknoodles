var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({etended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));