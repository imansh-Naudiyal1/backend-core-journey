function getUser(callback){
setTimeout(() => {
    const user = {name: "Himanshu Naudiyal"};
    callback(user);
}, 2000);
};
getUser(function(user){
    console.log(user)
})