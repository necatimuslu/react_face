import React from 'react'
import { FiSave } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';
import {FaRegWindowClose } from 'react-icons/fa';
import { AiOutlineClockCircle }from 'react-icons/ai';
import { VscCloseAll }from 'react-icons/vsc';
import { GoReport } from 'react-icons/go';
export default function CommentMenu() {
  return (
    <ul className='comment_menu_wrap'>
        <li className='hover1'>
            <FiSave className='comment_icon_size' />
            <div className='comment_menu_col'>
                <span>Gönderiyi kaydet</span>
                <span>Bunu kaydedilen içeriklerine ekle.</span>
            </div>
        </li>
        <div className='comment_splitter'></div>
        <li className='hover1'>
            <BsBell className='comment_icon_size ' />
            <span className='comment_span'>Bu gönderi için bildirimleri aç</span>
        </li>
        <div className='comment_splitter'></div>
        <li className='hover1'>
            <FaRegWindowClose className='comment_icon_size' />
            <div className='comment_menu_col'>
                <span>Gönderiyi gizle</span>
                <span>Bunun gibi gönderileri daha az gör.</span>
            </div>
        </li>
        <li className='hover1'>
            <AiOutlineClockCircle className='comment_icon_size' />
            <div className='comment_menu_col'>
                <span>Şükrü'i 30 günlüğüne geçici gizle</span>
                <span>Gönderi almayı geçici olarak durdur.</span>
            </div>
        </li>
        
        <li className='hover1 comment_li'>
            <VscCloseAll className='comment_icon_size' />
            <div className='comment_menu_col'>
                <span>Şükrü'yü takibi bırak</span>
                <span>Gönderi almayı durdur ama arkadaş kal.</span>
            </div>
        </li>
        <li className='hover1'>
            <GoReport className='comment_icon_size' />
            <div className='comment_menu_col'>
                <span>Gönderiyi şikayet et</span>
                <span>Bu gönderiyle ilgili endişelerim var.</span>
            </div>
        </li>
    </ul>
  )
}
