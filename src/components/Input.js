import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
import {getKey} from "../lib/util";
function Input(props) {
  
  const [item, putItem] = React.useState({ 
      key: '', 
      text: '', 
      done: false
  });
  
  const handleOnChange = (event) => {
    
    putItem({
      ...item,
      text: event.target.value
    })
  }
  
  const handleKeyDown = (event) => {
    if (event.nativeEvent.keyCode === 13) {
      props.addItem({...item, key: getKey()})
      putItem({
        ...item,
        text: ''
        })
    }
  }

  return (
    <div className="panel-block">
    <input value={item.text} onKeyDown={handleKeyDown} onChange={handleOnChange} type="text" autocomplete="off" style={{width: "100%"}} />
    </div>
  );
}

export default Input;
