function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

var countNodes = function (root) {
  if (root == null) {
    return 0;
  }

  const getMaxNodes = (node, isLeft) => {
    if (node == null) return 0;
    return getMaxNodes(isLeft ? node.left : node.right) + 1;
  };

  const depthLeft = getMaxNodes(root, true);
  const depthRight = getMaxNodes(root);

  if (depthLeft === depthRight) {
    return 2 ** depthRight - 1;
  }

  return countNodes(root.left) + countNodes(root.right) + 1;
};
