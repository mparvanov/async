
// https://stackoverflow.com/questions/49054748/wait-until-condition-is-met-or-timeout-is-passed-in-javascript




const sleepUntil = async (f, timeoutMs) => {
    return new Promise((resolve, reject) => {
        const timeWas = new Date();
        const wait = setInterval(function() {
            if (f()) {
                console.log("resolved after", new Date() - timeWas, "ms");
                clearInterval(wait);
                resolve();
            } else if (new Date() - timeWas > timeoutMs) { // Timeout
                console.log("rejected after", new Date() - timeWas, "ms");
                clearInterval(wait);
                reject();
            }
        }, 20);
    });
}


// const a = 1;
// const b = 2;

const myArgs = process.argv.slice(2);
const a = process.argv[2];
const b = process.argv[3];
console.log('myArgs: ', myArgs);

try {

    console.log("start");
    await sleepUntil(() => a > b, 5000);
    console.log("end");

    // ready
} catch {
    // timeout
    console.log("catch");
}