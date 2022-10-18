let A = "/a/./b/../../c/"

if (A[A.length - 1] === "/")
    A = A.substring(0, A.length - 1)
let stack = [A[0]]

let i = 1
while (i < A.length) {

    if (A[i] === "." && A[i + 1] === ".") {

        stack.pop()
        stack.pop()
        stack.pop()
        i += 2
        continue
    }
    else if (A[i] === "/" && stack[stack.length - 1] === "/") {

        // stack.pop()
        // stack.pop()
        // stack.pop()
        // i += 2
        // continue
    }
    else if (A[i] === ".") {
        //i++
        //continue
    }
    else if (A[i] === "/") {
        //i++
        stack.push("/")
    }
    else {
        stack.push(A[i])
    }
    i++
    console.log(stack)
}

console.log(stack.join(""))

