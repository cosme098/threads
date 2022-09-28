import {
    threadId,
    parentPort
  } from 'node:worker_threads'
  
/**
 * @param {string}  data - A string param.
 * @return {string} This is the result
 */

  parentPort.once('message', (data) => {
    // console.time(`benchamark-${threadId}`)
    // console.log("execting my thread")
    // console.timeEnd(`benchamark-${threadId}`)
    parentPort.postMessage(`I'm thread: ${threadId}`)
  })