/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/

import React, { useState } from 'react';

function Filter(props) {
  
  const [clicked, setClicked] = React.useState('全て')
  const items = [
    '全て',
    '未完了',
    '完了済み'
  ]
  
  const tabLinkStyle = {
    marginRight: "10px", 
    marginLeft: "10px",
    color: "blue"
  }
  
  const handleOnClick = (item) => {
    setClicked(item)
    props.setFilterBy(item)
  }
  
  return (
    <div className="panel-tabs">
      <div className="tabs is-centered">
        <ul>
        
          {items.map(item => (
            <li className={clicked === item ? 'is-active' : ''} onClick={()=>handleOnClick(item)}><a>{item}</a></li>
          ))}
        
        </ul>
      </div>
      
      
    </div>
  );
}

export default Filter