// NonNullable<T> 它能够过滤掉 T 中的 null 和 undefined 类型
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InorderTraversal<
  T extends TreeNode | null,
  U extends TreeNode = NonNullable<T>
> = T extends U
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];
