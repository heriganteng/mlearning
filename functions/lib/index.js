"use strict";
// import * as functions from 'firebase-functions';
Object.defineProperty(exports, "__esModule", { value: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const agg = require("./aggregation");
// Aggregation Functions
exports.updateFollowerCount = agg.updateFollowerCounts;
exports.updatePostCount = agg.updatePostCount;
//# sourceMappingURL=index.js.map