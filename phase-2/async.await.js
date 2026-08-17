async function getUser(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve({id: 1, name: "Himanshu" , role: "Developer"});
        } , 5000);
    });
}
async function main(){
    console.log("User data Fetch ho raha hai....")
    const user = await getUser();
    console.log("User mila:" , user);
}
main();