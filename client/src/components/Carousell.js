import React from 'react'
　　　import Carousel from 'react-bootstrap/Carousel';


function Carousell() {
  return (
    <div>

　　　        <Carousel>
　　　      <Carousel.Item className='slide'>
　　　        <img style={{height:"500px", width:"1350px"}}
　　　          className="d-block w-100"
　　　          src= " https://images.pexels.com/photos/9424943/pexels-photo-9424943.jpeg?auto=compress&cs=tinysrgb&w=600"
　　　         
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img style={{height:"500px", width:"1350px"}}
　　　          className="d-block w-100"
　　　          src="https://images.pexels.com/photos/14337768/pexels-photo-14337768.jpeg?auto=compress&cs=tinysrgb&w=600"
　　　         
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img style={{height:"500px", width:"1350px"}}
　　　          className="d-block w-100"
　　　          src=" https://images.pexels.com/photos/13296835/pexels-photo-13296835.jpeg?auto=compress&cs=tinysrgb&w=600 "
　　　         
　　　        />
　　　      </Carousel.Item>
　　　    </Carousel>
    </div>
  )
}

export default Carousell