class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null; // Base case: Return null for an empty array.
    }

    const midIndex = Math.floor(nums.length / 2); // Find the middle index.

    // Create the root node with the middle element.
    const root = new TreeNode(nums[midIndex]);

    // Recursively build the left subtree with elements to the left of the middle.
    root.left = sortedArrayToBST(nums.slice(0, midIndex));

    // Recursively build the right subtree with elements to the right of the middle.
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));

    return root; // Return the root of the constructed BST.
}




// Example usage:
const nums = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(nums);
console.log(root); // Display the root of the constructed BST.
