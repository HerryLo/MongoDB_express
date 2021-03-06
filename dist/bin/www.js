#!/usr/bin/env node
'use strict';

var app = require('../app');
var debug = require('debug')('mongodb-express:server');
var http = require('http');
var dbConnect = require('../mongoose/dbConnect');
var server = http.createServer(app);
var port = normalizePort(process.env.PORT || '3222');

dbConnect.connect();

app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vd3d3LmpzIl0sIm5hbWVzIjpbImFwcCIsInJlcXVpcmUiLCJkZWJ1ZyIsImh0dHAiLCJkYkNvbm5lY3QiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJwb3J0Iiwibm9ybWFsaXplUG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiY29ubmVjdCIsInNldCIsImxpc3RlbiIsIm9uIiwib25FcnJvciIsIm9uTGlzdGVuaW5nIiwidmFsIiwicGFyc2VJbnQiLCJpc05hTiIsImVycm9yIiwic3lzY2FsbCIsImJpbmQiLCJjb2RlIiwiY29uc29sZSIsImV4aXQiLCJhZGRyIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLFFBQVIsQ0FBWjtBQUNBLElBQU1DLFFBQVFELFFBQVEsT0FBUixFQUFpQix3QkFBakIsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUcsWUFBWUgsUUFBUSx1QkFBUixDQUFsQjtBQUNBLElBQU1JLFNBQVNGLEtBQUtHLFlBQUwsQ0FBa0JOLEdBQWxCLENBQWY7QUFDQSxJQUFNTyxPQUFPQyxjQUFjQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsTUFBbEMsQ0FBYjs7QUFFQVAsVUFBVVEsT0FBVjs7QUFFQVosSUFBSWEsR0FBSixDQUFRLE1BQVIsRUFBZ0JOLElBQWhCO0FBQ0FGLE9BQU9TLE1BQVAsQ0FBY1AsSUFBZDtBQUNBRixPQUFPVSxFQUFQLENBQVUsT0FBVixFQUFtQkMsT0FBbkI7QUFDQVgsT0FBT1UsRUFBUCxDQUFVLFdBQVYsRUFBdUJFLFdBQXZCOztBQUVBLFNBQVNULGFBQVQsQ0FBdUJVLEdBQXZCLEVBQTRCO0FBQzFCLE1BQUlYLE9BQU9ZLFNBQVNELEdBQVQsRUFBYyxFQUFkLENBQVg7O0FBRUEsTUFBSUUsTUFBTWIsSUFBTixDQUFKLEVBQWlCO0FBQ2YsV0FBT1csR0FBUDtBQUNEO0FBQ0QsTUFBSVgsUUFBUSxDQUFaLEVBQWU7QUFDYixXQUFPQSxJQUFQO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBU1MsT0FBVCxDQUFpQkssS0FBakIsRUFBd0I7QUFDdEIsTUFBSUEsTUFBTUMsT0FBTixLQUFrQixRQUF0QixFQUFnQztBQUM5QixVQUFNRCxLQUFOO0FBQ0Q7O0FBRUQsTUFBSUUsT0FBTyxPQUFPaEIsSUFBUCxLQUFnQixRQUFoQixHQUNQLFVBQVVBLElBREgsR0FFUCxVQUFVQSxJQUZkO0FBR0E7QUFDQSxVQUFRYyxNQUFNRyxJQUFkO0FBQ0UsU0FBSyxRQUFMO0FBQ0VDLGNBQVFKLEtBQVIsQ0FBY0UsT0FBTywrQkFBckI7QUFDQWQsY0FBUWlCLElBQVIsQ0FBYSxDQUFiO0FBQ0E7QUFDRixTQUFLLFlBQUw7QUFDRUQsY0FBUUosS0FBUixDQUFjRSxPQUFPLG9CQUFyQjtBQUNBZCxjQUFRaUIsSUFBUixDQUFhLENBQWI7QUFDQTtBQUNGO0FBQ0UsWUFBTUwsS0FBTjtBQVZKO0FBWUQ7O0FBRUQsU0FBU0osV0FBVCxHQUF1QjtBQUNyQixNQUFJVSxPQUFPdEIsT0FBT3VCLE9BQVAsRUFBWDtBQUNBLE1BQUlMLE9BQU8sT0FBT0ksSUFBUCxLQUFnQixRQUFoQixHQUNULFVBQVVBLElBREQsR0FFVCxVQUFVQSxLQUFLcEIsSUFGakI7QUFHQUwsUUFBTSxrQkFBa0JxQixJQUF4QjtBQUNEIiwiZmlsZSI6Ind3dy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBhcHAgPSByZXF1aXJlKCcuLi9hcHAnKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnbW9uZ29kYi1leHByZXNzOnNlcnZlcicpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IGRiQ29ubmVjdCA9IHJlcXVpcmUoJy4uL21vbmdvb3NlL2RiQ29ubmVjdCcpXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAnMzIyMicpO1xuXG5kYkNvbm5lY3QuY29ubmVjdCgpO1xuXG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5zZXJ2ZXIubGlzdGVuKHBvcnQpO1xuc2VydmVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuc2VydmVyLm9uKCdsaXN0ZW5pbmcnLCBvbkxpc3RlbmluZyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsKSB7XG4gIHZhciBwb3J0ID0gcGFyc2VJbnQodmFsLCAxMCk7XG5cbiAgaWYgKGlzTmFOKHBvcnQpKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICBpZiAocG9ydCA+PSAwKSB7XG4gICAgcmV0dXJuIHBvcnQ7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgaWYgKGVycm9yLnN5c2NhbGwgIT09ICdsaXN0ZW4nKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICB2YXIgYmluZCA9IHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJ1xuICAgID8gJ1BpcGUgJyArIHBvcnRcbiAgICA6ICdQb3J0ICcgKyBwb3J0O1xuICAvLyBoYW5kbGUgc3BlY2lmaWMgbGlzdGVuIGVycm9ycyB3aXRoIGZyaWVuZGx5IG1lc3NhZ2VzXG4gIHN3aXRjaCAoZXJyb3IuY29kZSkge1xuICAgIGNhc2UgJ0VBQ0NFUyc6XG4gICAgICBjb25zb2xlLmVycm9yKGJpbmQgKyAnIHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXMnKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VBRERSSU5VU0UnOlxuICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyBpcyBhbHJlYWR5IGluIHVzZScpO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uTGlzdGVuaW5nKCkge1xuICB2YXIgYWRkciA9IHNlcnZlci5hZGRyZXNzKCk7XG4gIHZhciBiaW5kID0gdHlwZW9mIGFkZHIgPT09ICdzdHJpbmcnID9cbiAgICAncGlwZSAnICsgYWRkciA6XG4gICAgJ3BvcnQgJyArIGFkZHIucG9ydDtcbiAgZGVidWcoJ0xpc3RlbmluZyBvbiAnICsgYmluZCk7XG59Il19