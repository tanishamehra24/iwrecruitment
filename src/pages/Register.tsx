import React from 'react';

function Register() {
  return (
    <div className="container">
    <h1 className='text-[3.5rem] text-center font-bold text-[#a663cc]'>APPLICATION FORM</h1>
    <form className="registration-form h-[75vh] ml-96 bg-[#ccf0f6] w-1/2 " method="post" action="">
        <div className='flex-col flex-wrap justify-center content-evenly'>
            <div className="form-group text-center text-[1.5rem] mt-6">
                <label  className='font-sans font-semibold text-[1.6rem]'htmlFor="first">First Choice</label>
                <select  className='w-full'id="select1" name="first" required>
                <option value="" disabled selected>Select Department</option> 
                    <option value="Business Development Department">Business Development Department</option>
                    <option value="Corporate Relations Department">Corporate Relations Department</option>
                    <option value="Management Department">Management Department</option>
                    <option value="Qontent Media Department">Qontent Media Department</option>
                    <option value="Technical Department (Web Development)">Technical Department (Web Development)</option>
                    <option value="Technical Department (Graphics Designing)">Technical Department (Graphics Designing)</option>
                    <option value="Technical Department (Video Editing)">Technical Department (Video Editing)</option>
                </select>
            </div> 
            <div className="form-group  text-center text-[1.5rem] mt-6">
                <label  className='font-sans font-semibold text-[1.6rem]' htmlFor="second">Second Choice</label>
                <select  className='w-full' id="select2" name="second" required>
                <option value="" disabled selected>Select Department</option> 
                <option value="Business Development Department">Business Development Department</option>
                    <option value="Corporate Relations Department">Corporate Relations Department</option>
                    <option value="Management Department">Management Department</option>
                    <option value="Qontent Media Department">Qontent Media Department</option>
                    <option value="Technical Department (Web Development)">Technical Department (Web Development)</option>
                    <option value="Technical Department (Graphics Designing)">Technical Department (Graphics Designing)</option>
                    <option value="Technical Department (Video Editing)">Technical Department (Video Editing)</option>
                </select>
            </div>
            <button className="submit-btn mt-16 bg-[#5d10dd] hover:bg-[#a663cc] rounded-[20px] w-28 text-white p-2 text-[1.5rem]">Submit</button>
        </div>
    </form>
</div>

  )
}

export default Register
