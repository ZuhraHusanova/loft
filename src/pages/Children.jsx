import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Children() {
  const [data, setData] = useState([])
  const [depthState, setDepthState] = useState(true)
  const navigate = useNavigate()

  const changeFav = (el) => {
    el.saved = !el.saved
    axios.put(`https://652553ed67cfb1e59ce71adc.mockapi.io/Children/${el.id}`, el, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => setDepthState(!depthState))
  }
  useEffect(() => {
    axios.get("https://652553ed67cfb1e59ce71adc.mockapi.io/Children", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => setData(res.data))
  }, [depthState])

  function setAbout(id){
    navigate("/"+id)
  }

  return (
    <div className='best'>
      <div className='container'>
        <div className='best-row'>
          {
            data.map(item => {
              return (
                <div className='card' key={item.id}>
                  <div className="card-favourite">
                    <i className={item.saved ? 'bi bi-heart active-favourite' : 'bi bi-heart'} onClick={() => changeFav(item)}></i>
                  </div>
                  <div className='card-header' onClick={()=>setAbout(item.id)}>
                    <img src={item.img} alt="" />
                  </div>
                  <div className='card-body'>
                    <h4 className='card-title'>{item.title}</h4>
                    <p className='card-name'>{item.name}</p>
                    <h3 className='card-price'>${item.price}</h3>
                    <div className='card-size'>Размеры</div>
                    <div className='card-details'>
                      <div className='card-details-item'>
                        <h5 className='card-details-title'>ШИРИНА</h5>
                        <p className='card-details-size'>{item.width} СМ</p>
                      </div>
                      <div className='card-details-item'>
                        <h5 className='card-details-title'>ШИРИНА</h5>
                        <p className='card-details-size'>{item.depth} СМ</p>
                      </div>
                      <div className='card-details-item'>
                        <h5 className='card-details-title'>ШИРИНА</h5>
                        <p className='card-details-size'>{item.height} СМ</p>
                      </div>
                    </div>
                    <button className='card-btn'>Добавить в корзину</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


