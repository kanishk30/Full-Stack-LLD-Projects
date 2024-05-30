const task1 = function() {
    console.log('task1')
}

const heavyTask = function() {
    console.log('Heavy task has started in sync manner');
    const start = Date.now(); // current epoch

    // to wait for 3s.
    while((Date.now() - start) < 3000) {
        // do nothing
    }
    console.log('heavy task done')

}

const heavyTaskNonBlocking = function() {
    console.log('Heavy task - non blocking starts');
    setTimeout(function() {
        console.log('Async task done')
    }, 3000)
}

const task2 = function() {
    console.log('task2');
}

let data = []
const fetchResponseBlocking = function() {
    console.log('makising sync api call');
    const start = Date.now();
     // to wait for 3s.
     while((Date.now() - start) < 3000) {
        // do nothing
    }
    console.log('api call done');
    data.push({id: 1, name: 'John Doe'})
}

const fetchResponseNonBlocking = function() {
    console.log('making async api call');
  
    setTimeout(function() {
        console.log('api call is done (settimeout complete)')
        data.push({id: 1, name: 'John Doe'})
    }, 2000)
    
}
const fetchResponseNonBlockingWithCallback = function(renderFn) {
    console.log('1');
  
    setTimeout(function() {
        console.log('2')
        data.push({id: 1, name: 'John Doe'})
        renderFn()
    }, 2000)
    
}

const renderResponse = function() {
    console.log('3');
    console.log(data[0].name) // john doe
}

// fetchResponseBlocking();
// fetchResponseNonBlocking();
fetchResponseNonBlockingWithCallback(renderResponse)
task2(); // task2
// renderResponse();

// task1();
// heavyTask();
// heavyTaskNonBlocking();