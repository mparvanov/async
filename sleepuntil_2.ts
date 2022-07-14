
// https://stackoverflow.com/questions/49054748/wait-until-condition-is-met-or-timeout-is-passed-in-javascript

const sleepUntil = async (f, timeoutMs) => {
    return new Promise<void>((resolve, reject) => {
        const timeWas = new Date();
        const wait = setInterval(function() {
            if (f()) {
                console.log("resolved after", (new Date()).getTime() - timeWas.getTime(), "ms");
                clearInterval(wait);
                resolve();
            } else if ((new Date()).getTime() - timeWas.getTime() > timeoutMs) { // Timeout
                console.log("rejected after", (new Date()).getTime() - timeWas.getTime(), "ms");
                clearInterval(wait);
                reject();
            }
        }, 20);
    });
}


const a = 1;
const b = 2;

try {
    await sleepUntil(() => false, 5000);
    // ready
} catch {
    // timeout
}

export { };
