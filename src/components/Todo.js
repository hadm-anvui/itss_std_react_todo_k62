import React, { useState } from 'react';

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useFirestoreStorage from '../hooks/firestoreStorage';

/* ライブラリ */

function Todo() {
  const [items, firebaseAddItem, firebaseUpdateItem, firebaseClearItems] = useFirestoreStorage();
  
  const [filter, setFilter] = useState('ALL');

  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });
  
  const handleCheck = checked => {
    firebaseUpdateItem(checked);
  };
  
  const handleAdd = text => {
    firebaseAddItem({ text, done: false });
  };
  
  const handleFilterChange = value => setFilter(value);

  return (
    <article className="panel is-danger">
      <div className="panel-heading">
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-calendar-check"></i>
          </span>
          <span> ITSS Todoアプリ</span>
        </span>
      </div>
      <Input onAdd={handleAdd} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayItems.map((item, index) => (
        <TodoItem 
          key={index}
          item={item}
          onCheck={handleCheck}
        />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={firebaseClearItems}>
          全てのToDoを削除
        </button>
      </div>
    </article>
  );
}

export default Todo;