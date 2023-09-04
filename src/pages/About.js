import React from 'react'
import BannerImage from "../assets/1beef.jpg"


function About() {
  return (
    <div className='about'>
      <div className='aboutLeft' style={{ backgroundImage: `url(${BannerImage})` }}>

      </div>
      <div className='aboutRight'>
        <h2>About Us</h2>
        <p>Curabitur tincidunt nunc a hendrerit aliquet. Nunc aliquam tristique magna in placerat. Suspendisse dictum suscipit ligula, ut facilisis ipsum fringilla sed. Vestibulum lectus arcu, rhoncus eget enim ut, tincidunt congue augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ultrices ligula et dolor pulvinar sodales. Nulla quis porta turpis, finibus faucibus arcu. Aenean nec blandit tellus. Suspendisse dictum sit amet augue at posuere. Maecenas a orci sollicitudin turpis placerat placerat. Aliquam varius leo sed arcu scelerisque, vel sodales neque consequat. Donec ultricies lorem ut velit efficitur, vel sodales nulla rutrum. Vestibulum bibendum, leo quis.</p>
      </div>
    </div>
  )
}

export default About