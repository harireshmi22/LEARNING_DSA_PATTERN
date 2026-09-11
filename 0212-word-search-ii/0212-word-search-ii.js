/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {

    class TrieNode {
        constructor() {
            this.children = {};
            this.word = null;
        }
    }

    // Buil Trie
    const root = new TrieNode();

    for (const word of words) {


        let node = root;
        for (const char of word) {


            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.word = word;
    }

    const rows = board.length;
    const cols = board[0].length;

    const result = [];

    function dfs(row, col, node) {
        // boundary 
        if (row < 0 || row >= rows || col < 0 || col >= cols) return;

        // Already visited 
        if (board[row][col] === "#") return;

        const char = board[row][col];

        // Character doesn't exist in Trie 
        if (!node.children[char]) return;

        const nextNode = node.children[char];

        // Complete word found; 
        if (nextNode.word !== null) {
            result.push(nextNode.word)

            // Avoid duplicate 
            nextNode.word = null;
        }

        // Mark visited
        board[row][col] = "#";

        // Explore 4 directions 
        dfs(row - 1, col, nextNode);
        dfs(row + 1, col, nextNode);
        dfs(row, col - 1, nextNode);
        dfs(row, col + 1, nextNode);

        // BackTrack 
        board[row][col] = char;
    }

    // Start dfs from every cell 
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dfs(row, col, root);
        }
    }

    return result;
};