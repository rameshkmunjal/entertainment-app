

const Page=({results, heading})=>{
    return(
        <div className="pageContainer">
            <h2 className="sectionHeading">{heading}</h2>
            <div className="pageGrid">{results}</div> 
        </div> 
    )
}

export default Page;