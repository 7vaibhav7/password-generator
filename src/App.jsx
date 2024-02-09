import { useState , useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [noal, setnoal] = useState(false)
  const [chal, setchal] = useState(false)
  const [password, setpassword] = useState("")




  const passref=useRef(null)




  const passgenerator=useCallback(() =>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(noal) str+="1234567890"
    if(chal) str+="!@#$%^&*"
    for(let i=1; i<length; i++){
       let char = (Math.random()*str.length+1)
       pass +=str.charAt(char)
    }
    setpassword(pass)



  },[length,noal,chal,setpassword ])






  useEffect(() => {passgenerator()},[length,noal,chal,setpassword,passgenerator])





  const copypasswordtoclipboard =useCallback(() =>{
    alert("copied")
    window.navigator.clipboard.writeText(password)
  },[password])






  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-green-500  bg-cyan-900'>
      <h1 className='text-white text-center my-3'>PASSWORD GENERATOR</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly
        ref={passref}
        
        
        
        />
        <button className=' outline-dashed bg-blue-700 text-white py-3 
        ' onClick={copypasswordtoclipboard}>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-centre gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            className='cursor-pointer'
            onChange={(e)=>{
              setlength(e.target.value)
            }}
             />
             <label >Length:{length}</label>

          </div>
          <div className='flex text-sm gap-x-2'>
          <div className='flex items-centre gap-x-1'>
            <input type="checkbox"
            defaultChecked={noal}
            id='numberInput'
            onChange={()=>{
              setnoal((prev)=>!prev)
            }}

             />
             <label >numbers</label>
             

          </div>
          <div className='flex items-centre gap-x-1'>
            <input type="checkbox"
            defaultChecked={chal}
            id='numberInput'
            onChange={()=>{
              setchal((prev)=>!prev)
            }}

             />
             <label >special char</label>
             

          </div>
          
        </div>
    </div>

    </div>
    
    </>
  )
}

export default App
