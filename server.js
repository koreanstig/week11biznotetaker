const express = require('express');
const fs = require('fs');
const db = require('./db/db.json');
const path = require('path');
const {response} = require('express');

const PORT = process.env.PORT || 8080;

const app = express();