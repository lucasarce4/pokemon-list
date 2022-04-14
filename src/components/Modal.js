function Modal({setShowModal,currentInfo}){
    return <div className="w-screen h-screen absolute bottom-0 left-0 bg-gray-300/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit bg-slate-300 p-20">
            <p className="capitalize">{currentInfo.name}</p>
            <button onClick={()=>setShowModal(false)}>Close</button>
        </div>

    </div>
}

export default Modal