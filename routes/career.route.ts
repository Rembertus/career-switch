import express from 'express';
const service = require('../services/career.service');

const routes = express.Router();

/**
 * Route for Verify Status services.
 */
routes.get('/status', (req, res) => {
  const status = service.getStatus();
  return res.send(status);
});

/**
 * Route for Get Token.
 */
routes.get('/gettoken', async (req, res) => {  
  const token = service.getToken();
  res.send(token);
});

/**
 * Route for Get Token from email.
 */
 routes.get('/gettokenemail', async (req, res) => {  
  const token = await service.getTokenEmail();
  res.send(token);
});

/**
 * Route for Sort Block List.
 */
routes.post('/check', async (req, res) => {
  const sorted = await service.check(req.body.data, service.getToken());
  res.send(sorted);
});

/**
 * Route for Verify sorted Block List .
 */
routes.post('/verify', async (req, res) => {
  const result = await service.verify(req.body.encoded, service.getToken());
  res.send(result);
});

module.exports = routes;
