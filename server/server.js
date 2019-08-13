'use strict'

// inject env file vars ..
const dotenv = require('dotenv');
const envs = dotenv.config({ path: './vars.env' });

// envs 
const env_name = process.env.npm_package_name;
const env_version = process.env.npm_package_version;
const env_mode = (process.env.NODE_ENV).toLowerCase();

var server = require('pushstate-server');

server.start({ port: process.env.PORT, directory: './public' });




