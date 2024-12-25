import React from 'react'
import './Resume.css'
import profile_resume from '../../assets/profile_resume.pdf'
const Resume = () => {
  return (
    <div>
      <div className='Resume'>
        <h1>My Resume</h1>
        <div class="pdf-container">
          <iframe src={profile_resume} width="100%" height="400px" frameborder="0" title='My Resume PDF'></iframe>
        </div>
        <div className="Download">
        <a href={profile_resume} download="profile_resume.pdf">
        <button>Download Resume</button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Resume
