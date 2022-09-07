let A = [1, 2, 3]

function permuation(A, n, i) {

    if (i === n) {
        console.log([...A])
        return
    }

    for (let j = i; j < n; j++) {
        let temp = A[i]
        A[i] = A[j]
        A[j] = temp
        permuation(A, n, i + 1)
        temp = A[i]
        A[i] = A[j]
        A[j] = temp
    }
}

permuation(A, A.length, 0)