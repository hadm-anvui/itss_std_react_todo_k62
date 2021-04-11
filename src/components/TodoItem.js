/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useState, useEffect } from 'react';

function TodoItem(props) {
  
  const [clicked, setClicked] = React.useState(false);
  
  useEffect(() => {
    setClicked(props.item.done)
  }, [props.item.done])
  
  const handleOnClick = () => {
    setClicked(!clicked);
    props.toggleItem(props.item.key)
  }
  
  return (
    <label className={clicked ? "panel-block has-text-grey-light" : "panel-block"}>
        <input type="checkbox" checked={clicked} onClick={handleOnClick} />
        {props.item.text}
    </label>
  );
}

export default TodoItem;