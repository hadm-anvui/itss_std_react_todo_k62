import { useState, useEffect } from 'react';

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = 'itss-todo';

function useStorage() {
  
  let initialItems = localStorage.getItem(STORAGE_KEY) === null ? [] : JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  const [items, setItems] = useState(initialItems);
　
　/* 副作用を使う */
  useEffect(() => {
    
  }, []);

  const putItems = items => {
    setItems(items)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  };

  const clearItems = () => {
    setItems([])
    localStorage.setItem(STORAGE_KEY, '[]')
  };

  return [items, putItems, clearItems];
}

export default useStorage;