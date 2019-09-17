/* eslint-disable no-undef */
require('zone.js');
const uuidv1 = require('uuid/v1');

// コンテキストを保持するRequst middleware
function handleRequest(req, res, next) {
  Zone.current
    .fork({
      name: 'requestInfoZone',
      properties: {
        requestId: uuidv1(),
      },
    })
    .run(next);
}
exports.handleRequest = handleRequest;

// 保持したコンテキストからIDを取得してロギングする関数
function info(mes) {
  const zone = Zone.current;
  const requestId = zone.get('requestId');
  console.info(`[${requestId}]:${mes}`);
}
exports.info = info;
