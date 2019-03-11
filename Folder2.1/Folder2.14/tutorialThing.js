Last login: Wed Jun 20 14:20:58 on ttys000
/Users/paromitadatta/Desktop/node ; exit;
Paromitas-MacBook-Air:~ paromitadatta$ /Users/paromitadatta/Desktop/node ; exit;
> var http = require('http');
undefined
> 
> http.createServer(function (req, res) {
...     res.writeHead(200, {'Content-Type': 'text/html'});
...     res.end('Hello World!');
... }).listen(8080);
Server {
  domain:
   Domain {
     domain: null,
     _events:
      { removeListener: [Function: updateExceptionCapture],
        newListener: [Function: updateExceptionCapture],
        error: [Function: debugDomainError] },
     _eventsCount: 3,
     _maxListeners: undefined,
     members: [] },
  _events:
   { request: [Function],
     connection: [Function: connectionListener] },
  _eventsCount: 2,
  _maxListeners: undefined,
  _connections: 0,
  _handle:
   TCP {
     reading: false,
     owner: [Circular],
     onread: null,
     onconnection: [Function: onconnection],
     domain:
      Domain {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        members: [] } },
  _usingWorkers: false,
  _workers: [],
  _unref: false,
  allowHalfOpen: true,
  pauseOnConnect: false,
  httpAllowHalfOpen: false,
  timeout: 120000,
  keepAliveTimeout: 5000,
  _pendingResponseData: 0,
  maxHeadersCount: null,
  _connectionKey: '6::::8080',
  [Symbol(IncomingMessage)]:
   { [Function: IncomingMessage]
     super_:
      { [Function: Readable]
        ReadableState: [Function: ReadableState],
        super_: [Function],
        _fromList: [Function: fromList] } },
  [Symbol(ServerResponse)]:
   { [Function: ServerResponse] super_: { [Function: OutgoingMessage] super_: [Function] } },
  [Symbol(asyncId)]: 226 }
> 
