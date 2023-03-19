// const os=require('os');
// //info about current user
// const user=os.userInfo();
// console.log(user);
// //system uptime
// console.log(`System utime is ${os.uptime()}`);


//  const current={
//     name:os.type(),
//     release:os.release(),
//     total:os.totalmem(),
//     free:os.freemem()
//  } 
//  console.log(current);

// const path=require('path');
// // console.log(path.sep);
// const pathm=path.join('/ppp','subfolder','m.txt');
// // console.log(pathm);

// const base=path.basename(pathm);
// console.log(base);
// const dir=path.dirname(pathm);
// console.log(dir);


// const {readFileSync,writeFileSync}=require('fs');
// const first=readFileSync('./ppp.js/k.js/j.txt','utf8');
// const second=readFileSync('./ppp.js/k.js/m.txt','utf8');
// // console.log(first,second);
// writeFileSync('./ppp.js/ii.txt',`The results is ${first+second}`);
// const third=readFileSync('./ppp.js/ii.txt','utf8');
// console.log(third);

// const {readFile,writeFile}=require('fs');
// readFile('./ppp.js/m.txt','utf8',(err,result)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })
// writeFile('./ppp.js/ii.txt',`The results is I am mad i am beautiful`,(err,result)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })
// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url=='/')
//     {
//         res.end('Welcome to our home page'); 
//     }
//     if(req.url=='/about')
//     {
//         res.end('This is our short history'); 
//     }
//     res.end(`<h1>Oops!!</h1>`)
// })
// server.listen(5000);
  
const _ =require('lodash');
const items=[1,[2,[3,[4]]]]
const news = _.flattenDeep(items);
console.log(news);


