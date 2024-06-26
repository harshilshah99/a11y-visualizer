export const isHidden = (el: Element): boolean => {
  // 親要素
  const parent = el.parentElement;
  // 親要素が存在しない場合は非表示である
  if (!parent) return true;
  const d = el.ownerDocument;
  const w = d.defaultView;
  if (!w) return true;
  // elementのCSSスタイル
  const style = w.getComputedStyle(el);
  // 自身の表示状態が非表示である
  if (style.display === "none" || style.visibility === "hidden") return true;
  // 親要素がbodyならば表示状態である
  if (parent === d.body) return false;
  // 親要素がdetails要素であり、かつ自身がsummary要素でない場合、かつdetails要素が閉じている場合は非表示である
  if (
    parent.tagName === "DETAILS" &&
    el.tagName !== "SUMMARY" &&
    !parent.hasAttribute("open")
  )
    return true;
  // 先祖要素が非表示である場合は非表示である
  return isHidden(parent);
};
