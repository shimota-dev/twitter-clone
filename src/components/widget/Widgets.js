import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='キーワード検索' type='text' />
      </div>

      <div className='widgets__Container'>
        <h2>いまどうしてる？</h2>
        {/* ライブラリ追加 */}
      </div>
    </div>
  )
}

export default Widgets
