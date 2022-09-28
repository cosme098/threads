import {
    threadId,
    parentPort
  } from 'node:worker_threads'

  
  parentPort.once('message', ({ from, to}) => {
    console.timeEnd(`benchamark-${threadId}`)
    let count = 0;
    for(let i =from; i< to; i++) { count++ }
    console.timeEnd(`benchamark-${threadId}`)
    parentPort.postMessage(`I'm ${threadId} done! with ${count} items`)
  })