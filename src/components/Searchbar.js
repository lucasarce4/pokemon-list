import { useState,useEffect } from 'react'

function Searchbar ({pokeList}){
    const [focus,setFocus] = useState(false)
    const [searchList,setSearchList] = useState([])

    const handleList = (e)=>{
        const list = pokeList.filter(poke=>{
            return (poke.name.includes(e.target.value))
        })
        setSearchList([...list.slice(0,20)])
    }

    useEffect(()=>{
        const list = pokeList.slice(0,20)
        setSearchList([...list])
    },[])

    return <div className='relative'>
        <input onFocus={()=>setFocus(true)} 
        onBlur={()=>setFocus(false)}
        onChange={handleList}
        className="border border-slate-400" type="text" />
        {!focus ? null :
         <ul className='absolute bg-slate-200 w-full'>
             {
             searchList.map(item=>{
                 return <li key={item.name}>{item.name}</li>
             })}
        </ul> }
    </div>
}

export default Searchbar