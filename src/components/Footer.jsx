import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-content'>
                    <div className='footer-left'>
                        <h3 className='footer-title'>НАВИГАЦИЯ</h3>
                        <div className='footer-row'>
                            <ul className='footer-col'>
                                <li>Кухни</li>
                                <li>Спальни</li>
                                <li>Кухни</li>
                            </ul>
                            <ul className='footer-col'>
                                <li>Прихожие</li>
                                <li>Офисная мебель</li>
                                <li>Детская</li>
                            </ul>
                            <ul className='footer-col'>
                                <li>Шкафы</li>
                                <li>Матрасы</li>
                                <li>Мягкая мебель</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <h3 className='footer-largetitle'>LM</h3>
                        <div className='footer-row'>
                            <p className='footer-location'>г. Анапа, Анапское шоссе,
                                30 Ж/К Черное море
                            </p>
                        </div>
                    </div>
                </div>
                <div className='footer-sup'>
                    <ul>
                        <li>Акция</li>
                        <li>Новинки</li>
                    </ul>
                    <ul>
                        <li>
                            <a href="tel:89648999119">
                            8 (964) 89 99 119
                            </a>
                            <a href="#">
                            INSTAGRAM
                            </a>
                            <a href="#">
                            mebel_loft_anapa@mail.ru
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
