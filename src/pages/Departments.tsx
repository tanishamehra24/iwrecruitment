import React from 'react'

function Departments() {
  return (
    <div className='flex-col justify-center content-evenly'>
        <h1 className='text-center text-[4rem] font-mono font-extrabold text-[#a663cc]'>DEPARTMENTS</h1>
        <div className='flex flex-wrap justify-evenly w-[100%] h-[100%]'>

            <div className='flex-col justify-center content-between rounded-xl  p-4 w-1/4 bg-[#ccf0f6] m-3'>
                <h2 className='text-center text-[1.5rem] text-[#5d10dd] font-bold mb-2 '>Business Development Department</h2>
                <p className='text-[1.2rem]'>
                 • responsible for securing partnerships, sponsorships, and funding from external organizations to support the society’s events, activities, and growth.
                 <br/>
                 • The department focuses on building and promoting the society’s brand by enhancing the visibility and credibility of the society.
                </p>
            </div>
            <div className='flex-col justify-center content-between rounded-xl  p-4 w-1/4 bg-[#ccf0f6] m-3'>
            <h2 className='text-center text-[1.5rem] text-[#5d10dd] font-bold mb-2 '>Technical Department</h2>
            <p className='text-[1.2rem]'>• The technical department is responsible for creating and maintaining event websites, registration portals, and dashboards.  <br/>
           • Ensures that the website’s graphics, logos, banners, and overall layout are visually appealing and align with the event's branding.</p>
            </div>
            <div className='flex-col justify-center content-between rounded-xl  p-4 w-1/4 bg-[#ccf0f6] m-3'>
                <h2  className='text-center text-[1.5rem] text-[#5d10dd] font-bold mb-2 '>Management Department</h2>
           <p className='text-[1.2rem]'>
           • The management department in a college society oversees organizing events, coordinating activities, and ensuring smooth operations.
           <br/><br/>• It handles budgeting, planning, and communication, ensuring alignment with the society's goals and college regulations.
           </p>
            </div>
            <div className='flex-col justify-center content-between rounded-xl  p-4 w-1/4 bg-[#ccf0f6] m-3'>
                <h2 className='text-center text-[1.5rem] text-[#5d10dd] font-bold mb-3 '>Qontent Media Department</h2>
                <p className='text-[1.2rem]'>
                • Manages content creation and media strategy for the society, including social media, and event promotions.
                <br/><br/>• Ensures effective communication with the audience through engaging and creative content across platforms.
                </p>
            </div>
            <div className='flex-col justify-center content-between rounded-xl  p-4 w-1/4 bg-[#ccf0f6] m-3'>
                <h2 className='text-center text-[1.5rem] text-[#5d10dd] font-bold mb-2 '>Corporate Relations Department</h2>
                <p className='text-[1.2rem]'>
                • The society serves as a bridge between the institution and the corporate world, fostering relationships with companies for internships, placements, and collaborations.
                <br/>• It may organize seminars, and networking events that provide students with direct exposure to industry professionals.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Departments
