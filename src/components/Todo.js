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
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  
  const [filterBy, setFilterBy] = React.useState('全て')
  
  const addItem = (newItem) => {
    let newList = [...items]
    newList.push(newItem)
    putItems(newList);
    console.log(newList)
  }
  
  const toggleItem = (itemKey) => {
    let tempList = [...items];
    tempList.forEach(itm => {
      if (itm.key === itemKey) {
        itm.done = !itm.done
      }
    })
    putItems(tempList)
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
    </div>
  );
}

export default Todo;