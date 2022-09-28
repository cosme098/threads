
import {
    execSync
  } from 'node:child_process'
  import {
    Worker
  } from 'node:worker_threads'
  
  function getCurrentThreadCount() {

    // get all process
    return parseInt(execSync(`ps -M ${process.pid} | wc -l`).toString())
  }
  
  function createThread(data) {
    const worker = new Worker('./thread.mjs')
    const p = new Promise((resolve, reject) => {
      worker.once('message', (message) => {
        return resolve(message)
      })
      worker.once('error', reject)
    })
  
    worker.postMessage(data)
    return p;
  }
  
  
  const nodejsDefaultThreadNumber = getCurrentThreadCount() - 1 // This 1 is relative an one process
  
  console.log(
    `Running threads `,
    `pid: ${process.pid}`,
    `default threads: ${nodejsDefaultThreadNumber}`
  )
  

  const allThreads = await Promise.all(
    [
        createThread({
            from:0,
            from:1e5,
          }),
          
          createThread({
            from:0,
            from:1e6,
          }),
        
          createThread({
            from:0,
            from:1e7,
          })
      ]
  )

  console.log("data", allThreads)