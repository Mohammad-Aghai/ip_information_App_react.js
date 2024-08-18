import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
                        <div className='card__Header'>
                                                <div className="infoBox">Info</div>
                                                <img src={props.info.flag.img} alt={props.info.country} />
                                                <p className='countryName'>country: {props.info.country}</p>
                                                <p className='cityName'>city: {props.info.city} </p>
                                                <p className='isp'>isp: {props.info.connection.isp}</p>
                        </div>
                        <div className='card__footer'>
                                                <p className="footer__item ip">ip address : {props.info.ip} </p>
                                                <p className="footer__item latitude">latitude: {props.info.latitude}</p>
                                                <p className="footer__item longitude">longitude: {props.info.longitude}</p>
                        </div>
    </div>
  )
}
