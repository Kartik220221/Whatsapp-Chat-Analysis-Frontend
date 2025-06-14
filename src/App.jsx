import { useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import {CassetteTape, Footprints} from 'lucide-react'
import { useDataStore } from './DataStore'
import { EmojiBarChart, EmojiPieChart, LeastCommonBarChart, MessagePie, MonthBarChart, MonthMessageLineChart, MostCommonBarChart } from './Charts'


function App() {

  const {user,uniqueUsers,messageCount,wordCount,mediaCount,messagePercentage,monthData,topWordsData,emojiData,getData} = useDataStore()
  const [file,setFile] = useState(null)
  const [queryUser,setQueryUser] = useState('Overall')
  const [dataFetched,setDataFetched] = useState(false)

  const handleChange=(e)=>{
    setFile(e.target.files[0])
  }
  const handleUpload = async()=>{
    const formData = new FormData()
    formData.append('file',file)
    if(queryUser.trim())formData.append('user',queryUser)
    
    const data = await getData(formData)
    if(data){
      setDataFetched(true)
    }
  }
  


  const sidebarRef = useRef(null)
  const buttonRef = useRef(null)
  const [isOpen,setIsOpen] = useState(false)

  const handleClick = ()=>{
    const nextOpen = !isOpen
    
    if(nextOpen){
      
      gsap.to(sidebarRef.current,{
      width:'10%',
      duration:2,
      ease:'power3.out',
    })
    setTimeout(()=>setIsOpen(!isOpen),1200)
    }
    else{
      setIsOpen(!isOpen)
      gsap.to(sidebarRef.current,{
      width:'3%',
      alignItems:'center',
      duration:2,
      ease:'power3.out',
      paddingLeft:2 ,
    })
    
    }
    if(nextOpen){
      gsap.to(buttonRef.current,{
      height:30,
      width:30,
      duration:1,
      ease:'power4',
    })
    }
    else{
      gsap.to(buttonRef.current,{
      height:20,
      width:20,
      duration:1,
      ease:'power4',
    })
    }
  }

  return (
    <div className='overflow-x-hidden flex min-h-[100vh]'>
      <div ref={sidebarRef} className='w-[3%] px-2 left-0 top-0 bottom-0 bg-black flex min-h-full items-center py-10 flex-col justify-between'>
        <CassetteTape ref={buttonRef} onClick={handleClick} size={24}  className='text-white transition-all hover:scale-110 ease-in duration-300 flex justify-center items-center'/>
        {isOpen?
        <div className='flex pl-[10%] flex-col w-[100%] pr-1 gap-y-4 px-2'>
          <input onChange={handleChange} type="file" accept='.txt' className='bg-white/80 rounded-md mx-1 px-2 py-0.5' placeholder='Upload' />
          <button onClick={handleUpload} className='px-2 py-2 transition-all transform duration-300 ml-1 hover:scale-110 bg-gray-400 text-white text-md rounded-2xl'>Get the data</button>
        </div>:""}
      </div>
      {dataFetched?<div className='flex flex-1 h-[100%] w-[97%] py-4 flex-col justify-start items-center'>
          <div className='flex w-[100%] h-fit justify-around py-4 items-start'>
            <div className='flex flex-col justify-center items-center  gap-y-2'>
              <div className='text-[14px]'>
                Message Count: 
              </div>
              <div className='text-[24px] font-medium'>
                {messageCount}
              </div>
            </div>
            <div className='flex flex-col justify-center items-center  gap-y-2'>
              <div className='text-[14px]'>
                Word Count: 
              </div>
              <div className='text-[24px] font-medium'>
                {wordCount}
              </div>
            </div>
            <div className='flex flex-col justify-center items-center  gap-y-2'>
              <div className='text-[14px]'>
                Media Count: 
              </div>
              <div className='text-[24px] font-medium'>
                {mediaCount}
              </div>
            </div>
          </div>
          <div className='grid h-fit py-10 grid-cols-2 gap-x-10 gap-y-12 px-12'>
            <div className='h-[100%] w-[100%]'>
              
            <MessagePie className="h-30 w-30"/>
            </div>
            <div className='h-70 w-160'>
              
            <MonthBarChart className="h-30 w-30"/>
            </div>
            <div className='h-[100%] w-[100%]'>
              
            <MonthMessageLineChart className="h-30 w-30"/>
            </div>
            <div className='h-70 w-160'>
              
            <MostCommonBarChart className="h-30 w-30"/>
            </div>
            <div className='h-[100%] w-[100%]'>
              
            <LeastCommonBarChart className="h-30 w-30"/>
            </div>
          <div className='h-70 w-160'>
            <EmojiPieChart className='h-70 w-100'/>
          </div>

          </div>
          
      </div>:<div className='pl-[3%] text-2xl text-white bg-black/90 font-medium flex items-center justify-center h-[100vh] w-full'>
        Get the entire analysis of your whatsapp chats done in the blink of an eye</div>}
    </div>
  )
}

export default App
