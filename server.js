// ===============================
// MODULES
// ===============================
var express         = require('express');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var logger          = require('morgan');
var methodOverride  = require('method-override');
var passport        = require('passport');
var localStrategy   = require('passport-local').Strategy;
