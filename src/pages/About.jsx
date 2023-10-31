import React, { useEffect, useState } from 'react'
import { Link, useNavigate ,useParams} from 'react-router-dom'
import sofa from '../assets/img/image 1.png'
import scor from '../assets/img/score.png'
import wishing from '../assets/img/wishlist-icon.png'
import yellow from '../assets/img/Rectangle 62.png'
import axios from 'axios'
export default function About() {
  const [depthState, setDepthState] = useState(true)
    const changeFav = (el) => {
        el.saved = !el.saved
        axios.put(`https://652553ed67cfb1e59ce71adc.mockapi.io/bestsellers/${el.id}`, el, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => setDepthState(!depthState))
      }
    const [data, setData]=useState({})
    const params = useParams()
    useEffect(()=>{
          axios.get(`https://652553ed67cfb1e59ce71adc.mockapi.io/bestsellers/${params.id}`, {
            headers:{
                'Content-Type': 'application/json'
            }
          }).then(res=>setData(res.data))
    },[])
    console.log(data);
  return (
   <div className='about'>
    <div className='container'>
        <div className='about-content'>
            <div className='about-menu'>
                <div className='about-right'>
                    <img src={data.img} alt="" />
                    <img src="" alt="" />
                </div>
                <div className='about-left'>
                    <img src={scor} alt="" />
                    <h1>{data.title}</h1>
                    <p>{data.name}</p>
                    <div className='title'>
                        <h1>${data.price}</h1>
                        <button className='about-btn'>Купить</button>
                        <div className='about-text'>
                        <i className={data.saved ? 'bi bi-heart active-favourite' : 'bi bi-heart'} onClick={() => changeFav(data)}></i>
                            <p>Добавить в желаемое</p>
                        </div>
                    </div>
                    <div className='about-contents'>
                        <div>
                            <p>Цвет</p>
                            <div className='box'></div>
                        </div>
                        <div>
                            <p>Количество</p>
                            <h3 className='about-btnn'>1</h3>
                        </div>
                        <div className='about-boxs'>
                            <p>Размер (Д × Ш × В)</p>
                            <div className='about-bttn'>{data.width} СМ × {data.depth} СМ × {data.height}СМ</div>
                        </div>
                    </div >
                   <div className='about-p'>
                   <p>Описание</p>
                    <p>{data.description}</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
