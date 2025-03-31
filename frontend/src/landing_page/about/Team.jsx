import React from 'react'
function Team() {
    return ( 
        <div className="container">
        <div className="row p-5 mt-5  border-top">
            <h1 className=' text-center '>
              People
            </h1>
        </div>

        <div className="row fs-5">
            <div className="col-6 text-center">
              <img src="media/images/keshu.jpeg" alt="" style={{width:"50%", height:"80%", }}/>
              <h4 className='mt-3 '>Keshari Nandan</h4>
              <h6 className='text-muted'>Project Developer</h6>
            </div>
            <div className="col-6 p-5">
            <p>
              I am a B.tech Student I am in 3rd year student  I am very passionate about improving my coding skills & developing applications & websites. I build  Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack project.
              <br />
              <br />
              <span style={{color:"blue"}}>Email: </span>Keshari0011@gmail.com</p>
            </div>
        </div>
       </div>
     );
}

export default Team;