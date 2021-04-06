/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useState, useEffect } from 'react';

function TodoItem(props) {
  
  const [clicked, setClicked] = React.useState(false);
  
  const handleOnClick = () => {
    setClicked(!clicked);
  }
  
  return (
    <label className={clicked ? "panel-block has-text-grey-light" : "panel-block"}>
        <input onClick={() => handleOnClick()} type="checkbox" />
        {props.item.text}
    </label>
  );
}

export default TodoItem;