IncomingMessage {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: BufferList { head: null, tail: null, length: 0 },
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: null,
     ended: false,
     endEmitted: false,
     reading: false,
     sync: true,
     needReadable: false,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: true,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 442,
        _externalStream: [External],
        fd: 13,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::9091',
        [Symbol(asyncId)]: 4 },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::9091',
        [Symbol(asyncId)]: 4 },
     _idleTimeout: 120000,
     _idleNext:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idleStart: 5710,
     _destroyed: false,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular],
        locals: {},
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 6,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 8,
     [Symbol(triggerId)]: 4 },
  connection:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 442,
        _externalStream: [External],
        fd: 13,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::9091',
        [Symbol(asyncId)]: 4 },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::9091',
        [Symbol(asyncId)]: 4 },
     _idleTimeout: 120000,
     _idleNext:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idleStart: 5710,
     _destroyed: false,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular],
        locals: {},
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 6,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 8,
     [Symbol(triggerId)]: 4 },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: false,
  headers:
   { host: 'localhost:9091',
     connection: 'keep-alive',
     pragma: 'no-cache',
     'cache-control': 'no-cache',
     accept: 'application/json, text/plain, */*',
     origin: 'http://localhost:9090',
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
     referer: 'http://localhost:9090/',
     'accept-encoding': 'gzip, deflate, br',
     'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6,nl;q=0.4' },
  rawHeaders:
   [ 'Host',
     'localhost:9091',
     'Connection',
     'keep-alive',
     'Pragma',
     'no-cache',
     'Cache-Control',
     'no-cache',
     'Accept',
     'application/json, text/plain, */*',
     'Origin',
     'http://localhost:9090',
     'User-Agent',
     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
     'Referer',
     'http://localhost:9090/',
     'Accept-Encoding',
     'gzip, deflate, br',
     'Accept-Language',
     'zh-CN,zh;q=0.8,en;q=0.6,nl;q=0.4' ],
  trailers: {},
  rawTrailers: [],
  upgrade: false,
  url: '/signup',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 442,
        _externalStream: [External],
        fd: 13,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::9091',
        [Symbol(asyncId)]: 4 },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::9091',
        [Symbol(asyncId)]: 4 },
     _idleTimeout: 120000,
     _idleNext:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idleStart: 5710,
     _destroyed: false,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular],
        locals: {},
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 6,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 8,
     [Symbol(triggerId)]: 4 },
  _consuming: false,
  _dumped: false,
  next: [Function: next],
  baseUrl: '',
  originalUrl: '/signup',
  _parsedUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/signup',
     path: '/signup',
     href: '/signup',
     _raw: '/signup' },
  params: {},
  query: {},
  res:
   ServerResponse {
     domain: null,
     _events: { finish: [Function: bound resOnFinish] },
     _eventsCount: 1,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 5710,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 6,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 8,
        [Symbol(triggerId)]: 4 },
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 5710,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 6,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 8,
        [Symbol(triggerId)]: 4 },
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: {},
     [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
  route: Route { path: '/signup', stack: [ [Object] ], methods: { get: true } } }