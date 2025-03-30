import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {

    let [eye,seteye]=useState(false)
  
    let handleEye=()=>{
      seteye(!eye)
    }

    let [confirmEye,setconfirmEye]=useState(false)

    let handleconfirmEye=()=>{
      setconfirmEye(!confirmEye)
    }



  return (
    <section>
        <article>
            <h2>Sign Up</h2>
            <form action="">
                <section>
                <label htmlFor="username" className='text-2xl font-bold'>UserName</label>

                <input type="text" id='username' name='username'  value={username} onChange={handlechange}/>
                </section>
                
                <section>
                <label htmlFor="email" className='text-2xl font-bold'>Email</label>

                <input type="email" id='email' name='email' value={email} onChange={handlechange}/>
                </section>

                <section>
                <label htmlFor="createpassword" className='text-2xl font-bold'>Create Password</label>
                                    <div className='flex relative'>
                                    <input type={eye?"text":"password"} id='createpassword' value={createpassword} onChange={handlechange} name='createpassword' />
                                    <div className='absolute right-3 justify-center h-full items-center pt-2' onClick={handleEye}>
                                      {eye?<FaEye/>:<FaEyeSlash/>}
                                    </div>
                                    </div>
                </section>

                <section>
                <label htmlFor="confirmpassword" className='text-2xl font-bold'>Confirm Password</label>
                                    <div className='flex relative'>
                                    <input type={confirmEye?"text":"password"} id='confirmpassword' value={confirmpassword} onChange={handlechange} name='confirmpassword' className='h-[45px] w-full '/>
                                    <div className='absolute right-3 justify-center h-full items-center pt-2' onClick={handleconfirmEye}>
                                      {confirmEye?<FaEye/>:<FaEyeSlash/>}
                                    </div>
                                    </div>
                </section>

                <section>
                <button className='h-[50px] w-[150px]text-2xl  text-center font-extrabold rounded-md'>REGISTER</button>
                </section>
            </form>
        </article>
    </section>
  )
}

export default Register