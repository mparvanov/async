let flag = false;
async function waitFor(){
   while (true){
        if (flag) { console.log("Flag is true"); return };
        await new Promise(resolve => setTimeout(resolve, 10));
   }
}
waitFor();
setTimeout(()=>flag=true,3000)