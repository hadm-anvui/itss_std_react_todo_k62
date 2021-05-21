import { useState, useEffect } from 'react';

import { ADD_ITEM, UPDATE_ITEM, GET_ITEMS, DELETE_ITEM } from "../lib/firebase";

function useFirestoreStorage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    firebaseGetItems();
  }, [items]);

  const firebaseGetItems = async () => {
    const _items = await GET_ITEMS();
    setItems(_items);
  };

  const firebaseAddItem = async item => {
    const newItem = { text: item.text, done: item.done };
    await ADD_ITEM(newItem);
    setItems([...items, newItem]);
  };

  const firebaseUpdateItem = async checked => {
    const changes = { done: !checked.done };
    await UPDATE_ITEM(changes, checked.id);
    const newItems = items.map((item) => {
      if (item.id === checked.id) {
        item = { ...item, changes}
      }
      return item;
    })
    setItems(newItems);
  }

  const firebaseClearItems = () => {
    items.map(item => {
      DELETE_ITEM(item);
    })
    setItems([]);
  };

  return [items, firebaseAddItem, firebaseUpdateItem, firebaseClearItems];
}

export default useFirestoreStorage;