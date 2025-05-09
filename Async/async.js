//(synchronous) and (asynchoronous) are terms used in programming, especially in context handling tasks and operations.and
// 1.Sync (Synchronous): In this tasks are executed one by one. Each task must complete before the next one starts.
// 2.Async (Asynchronous): in this tasks are excuted independently of the program flow. Means program can continue to execute
// other tasks while waiting for an asynchoronous operation to complete. It tale little time to fetch data.
// IMP = JS supports async and sync both but JS is a synchronous language. *******************************************

// 1.Sync (Synchronous):
function syncFunction(){ 
console.log("task1");
console.log("task2");
console.log("task3");
}
console.log("Before Sync Synchronous");
syncFunction();
console.log("after Sync Synchronous");
// o/p:Before Sync Synchronous
// task1
// task2
// task3
// after Sync Synchronous

// 2.Async/await (Asynchronous):

 //SetTimeout
 console.log("Thie is one");

 setTimeout(()=>{
    console.log("This is second");
 },3000)

 console.log("this is third");

// 3. Callback () --> Callback functions are like intructions you give to someone else to do when 
// particular task completed. MEans Js to handle actions that take time to finish, like 
// fetching data from server or reading a file. 
