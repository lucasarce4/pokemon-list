function Pagination({listLength,pokePerPage,currentPage}){
    const pages = []

    for(let i=0;i<Math.ceil(listLength/pokePerPage);i++){
        pages.push(i+1)
    }
    return(<div >
        <ul className="flex flex-row items-center">
            {pages.map((page)=>{
             return <li key={page} className='flex h-fit px-2 p-1'>
                 {page === currentPage ? <div className="border box-border p-2 h-fit border-indigo-500/75" >{page}</div> :
                 <p className="p-2 box-border">{page}</p>}</li>
            })}
        </ul>
    </div>)
}

export default Pagination