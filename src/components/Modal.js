import { useEffect,useRef } from "react"

function Modal({setShowModal,currentInfo}){
    
    const divRef = useRef()
    useEffect(()=>{
        const handler = (e)=>{
            if(!divRef.current.contains(e.target)){
                setShowModal(false)
            }
        }
        document.addEventListener('mousedown',handler)
        return () => document.removeEventListener('mousedown',handler)
    })

    const style='border rounded-lg p-1 m-1'

    return <div className="w-screen h-screen absolute bottom-0 left-0 bg-gray-300/50">
        <div ref={divRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit bg-slate-300 p-6 flex flex-col items-center">
            <img className="h-40 md:h-60"
             src={currentInfo.sprites.other['official-artwork'].front_default} alt="" ></img>
            <p className="capitalize">{currentInfo.name}</p>
            <div className="flex flex-col flex-wrap items-center">
                <div className="m-4">

            <span className={style}>{currentInfo.stats[0].stat.name}:{currentInfo.stats[0].base_stat}</span>
            <span className={style}>{currentInfo.stats[1].stat.name}:{currentInfo.stats[1].base_stat}</span>
            <span className={style}>{currentInfo.stats[2].stat.name}:{currentInfo.stats[2].base_stat}</span> 
                </div>
                <div>

            <span className={style}>{currentInfo.stats[3].stat.name}:{currentInfo.stats[3].base_stat}</span>
            <span className={style}>{currentInfo.stats[4].stat.name}:{currentInfo.stats[4].base_stat}</span>
            <span className={style}>{currentInfo.stats[5].stat.name}:{currentInfo.stats[5].base_stat}</span>
                </div>
            <button onClick={()=>setShowModal(false)} className="absolute top-1 right-1 text-red-600 font-bold hover:scale-125">X</button>
            </div>
        </div>

    </div>
}

export default Modal