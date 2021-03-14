require('express-async-errors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//const responseHandler = require('./middlewares/responseMiddleware');

const config = require('config');
var app = express();

var i18n = require("i18n");
i18n.configure({
  locales:['en', 'de'],
  directory: __dirname + '/locales'
});
//i18n.setLocale('de');
app.use(i18n.init);

console.log(i18n.__('Hello 2'));

// LOAD ENV
//require('dotenv').config();
//console.log(process.env.DB_HOST);

const customConfig = require('./config');
console.log(customConfig);

var loggerD = require('./utilities/loggerUtility');

loggerD.logError("teserror");
loggerD.logInfo("testinfo");
loggerD.logWarning("teswarning");
loggerD.logMessage("tesmessage", "debug");

console.log(customConfig.jwtPrivateKeyCustom);
if (!customConfig.jwtPrivateKeyCustom) {
  console.log("env_not_set");
  loggerD.logError("env_not_set");
  // @todo move it also handle it gracefully i.e restart
  process.exit(1);
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const {prepareResponse} = require('./utilities/responseParserUtility');

app.use('/', indexRouter);
app.use('/users', usersRouter);

//calling the swagger from here 
if (process.env.NODE_ENV !== 'production') {

  const swaggerJsdoc = require('swagger-jsdoc');

  const options = {
    swaggerDefinition: {
      // Like the one described here: https://swagger.io/specification/#infoObject
      info: {
        title: 'Test API',
        version: '1.0.0',
        description: 'Test Express API with autogenerated swagger doc',
      },
      host: customConfig.SWAGGER_BASE_URL,
      basePath: "/",
      tags: [
        {
          "name": "API",
          "description": "API for user in the system"
        }
      ],
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'x-auth-token',
          scheme: 'bearer',
          in: 'header',
        },
      },
      schemes: [
        "http",
        "https"
      ],
      consumes: [
        "application/json"
      ],
      produces: [
        "application/json"
      ],
    },
    // List of files to be processes. You can also set globs './routes/*.js'
    // for swagger docs https://github.com/Surnet/swagger-jsdoc/tree/master/example/v2 in controller
    apis: ['./controllers/*.js'],
  };

  const specs = swaggerJsdoc(options);

  var swaggerUi = require('swagger-ui-express');
  var swaggerDocument = require('./swagger.json');
  //app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
}

//app.use(responseHandler.responseHandler);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  console.log(err.message);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  loggerD.logError(err.message);
  // render the error page
  //res.status(err.status || 500);
  //res.send('error');
  let message = (err.status && err.status == 404) ? "Ohh snap!!! There is nothing here yet :)" : "Something went wrong.";
  let obj = {
      message: message,
      data: {},
      statusCode: err.status || 500
  };
  prepareResponse(res, obj)
});

process.on('unhandledRejection', (reason, promise, res) => {
  console.log('Unhandled Rejection logged at:', reason.stack || reason);
  loggerD.logError(reason.stack || reason);
  /*let obj = {
    message:"Something went wronng",
    status:false,
    data:{}
  }
 prepareResponse(res, obj);*/
  process.exit(1);
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
})

//@todo check db connection on setup how to handle that thing

module.exports = app;