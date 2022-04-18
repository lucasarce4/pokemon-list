import { useState } from 'react'
import Modal from './Modal'

function Searchbar ({pokeList}){
    const [focus,setFocus] = useState(false)
    const [searchList,setSearchList] = useState([])
    const [pokemon,setPokemon] = useState('')
    const [showModal,setShowModal] = useState(false)
    

    const handleList = (e)=>{
        if(e.target.value === ''){
            setSearchList([...pokeList.slice(0,20)])
            return
        }
        const list = pokeList.filter(poke=>{
            return (poke.name.includes(e.target.value))
        })
        setSearchList([...list.slice(0,20)])
    }

    const handleFocus = (e)=>{
        setFocus(true)
        handleList(e)
    }
    const handleClick = async (item)=>{
        const res = await fetch(item.url)
        const data = await res.json()
        setPokemon(data)
        setShowModal(true)
    }

    return <div onBlur={()=>setFocus(false)}>
            <div className='relative'>

                <input placeholder='Search by name...'
                onFocus={(e)=>handleFocus(e)} 
                onChange={handleList}
                className="border border-slate-400" type="text" />
                {!focus ? null :
                 <ul className='absolute bg-slate-200 w-full'>
                     {
                         searchList.map(item=>{
                         return <div
                            key={item.name} 
                            className="border border-gray-400 py-1 px-2 cursor-pointer capitalize hover:bg-slate-300"
                            onClick={()=>handleClick(item)}
                            onMouseDown={event => event.preventDefault()}>
                                {item.name}
                          </div>
             })}
        </ul> }
            </div>
        {showModal ?
        <Modal setShowModal={setShowModal} currentInfo={pokemon}/> : null
        }
    </div>
}

export default Searchbar