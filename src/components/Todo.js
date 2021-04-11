import React, { useState, useEffect } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [storageItems, storagePutItems, storageClearItems] = useStorage();
  
  const [items, putItems] = React.useState([...storageItems]);
  
  const [filterBy, setFilterBy] = React.useState('全て')
  
  const addItem = (newItem) => {
    let newList = [...items]
    newList.push(newItem)
    putItems(newList);
    storagePutItems(newList);
  }
  
  const toggleItem = (itemKey) => {
    let tempList = [...items];
    tempList.forEach(itm => {
      if (itm.key === itemKey) {
        itm.done = !itm.done
      }
    })
    putItems(tempList)
    storagePutItems(tempList)
  }
  
  const handleClear = () => {
    storageClearItems()
    putItems([])
  }
  
  var toShowItems = [...items]
  
  if(filterBy === '未完了') {
    toShowItems = toShowItems.filter(item => item.done === false)
  } else if (filterBy === '完了済み') {
    toShowItems = toShowItems.filter(item => item.done === true)
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      
      <Input addItem={addItem}/>
      
      <Filter setFilterBy={setFilterBy} />
      
      {toShowItems.map(item => (
        <TodoItem item={item} toggleItem={toggleItem} />
      ))}
      <div className="panel-block">
        {toShowItems.length} items
      </div>
      
      <div className="button is-danger is-outlined is-fullwidth" onClick={handleClear}>全てのToDoを削除</div>

    </div>
  );
}

export default Todo;