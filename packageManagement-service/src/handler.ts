
import serverlessExpress from 'serverless-http'
const { app } = require('./index')
exports.api = serverlessExpress(app)