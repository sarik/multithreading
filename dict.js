let input = ["car", "cat", "bar"];

class Node {
  constructor(data) {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
    this.data = data;
  }
}

function setup(input) {
  for (let i = 0; i < input.length; i++) {
    insertInTrie(input[i], trie);
  }
}

function isInDict(word) {
  return search(word, trie);
}

function insertInTrie(word, trie) {
  let curr = trie;

  for (let i = 0; i < word.length; i++) {
    let index = word[i].charCodeAt() - "a".charCodeAt();
    if (curr.children[index] === null) {
      curr.children[index] = new Node(word[i]);
    }
    curr = curr.children[index];
  }
  curr.isEnd = true;
}

function search(word, trie) {
  let curr = trie;
  for (let i = 0; i < word.length; i++) {
    let index = word[i].charCodeAt() - "a".charCodeAt();

    if (curr.children[index] === null) return false;
    else {
      curr = curr.children[index];
    }
  }

  return curr.isEnd;
}

let trie = new Node();

setup(input);

console.log(isInDict("bdar"));
