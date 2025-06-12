const Searching=({search,setSearch,HandleSearch})=>{
  return <div>

    <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />

    <button onClick={HandleSearch}></button>


  </div>
}

export default Searching
 