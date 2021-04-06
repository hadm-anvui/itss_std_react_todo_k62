/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  return (
    <label className="panel-block">
        <input type="checkbox" />
        {props.item.text}
    </label>
  );
}

export default TodoItem;