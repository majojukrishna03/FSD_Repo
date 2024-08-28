/*
Q1. RETRY
Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other
80 percent of cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this
clunky function and just keeps trying until a call succeeds, after which it returns the result.
Make sure you handle only the exceptions you are trying to handle.

*/
class MultiplicatorUnitFailure extends Error {}
function primitiveMultiply(a, b) {
    value = Math.random()
    console.log(value)
    if (value < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}
function reliableMultiply(a, b) {
// Your code here.
    while(true) {
        try {
            return primitiveMultiply(a,b)
        }
        catch (e) {
            if(!(e instanceof MultiplicatorUnitFailure)) {
                throw e;
            }
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64


/*
[Running] node "c:\Users\majoj\Desktop\New folder\msit ss\FSD_Specialization\FSD_Repo\JavaScript\Day-11\Retry.js"
0.20725114827522462
0.3352083308674325
0.36879101335848796
0.5316910164651896
0.19693599833408126
64

[Done] exited with code=0 in 0.139 seconds

[Running] node "c:\Users\majoj\Desktop\New folder\msit ss\FSD_Specialization\FSD_Repo\JavaScript\Day-11\Retry.js"
0.6649290062279845
0.28131298196133137
0.48566277251118395
0.8278188592443059
0.45594285197050977
0.12888664364732527
64

[Done] exited with code=0 in 0.184 seconds

[Running] node "c:\Users\majoj\Desktop\New folder\msit ss\FSD_Specialization\FSD_Repo\JavaScript\Day-11\Retry.js"
0.6331298171527748
0.18996502550037153
64

[Done] exited with code=0 in 0.131 seconds
*/