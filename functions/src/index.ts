// import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

import * as agg from './aggregation';

// Aggregation Functions
export const updateFollowerCount = agg.updateFollowerCounts;
export const updatePostCount     = agg.updatePostCount;
