
const Shimmer=()=>{
    
return (
     <>

    <div className="body">
      {Array(10).fill("").map((val,ind) => (
        <div key={ind} className="shimmer-box"></div>
      ))}
    </div>
  </>
    
)
}

export default Shimmer