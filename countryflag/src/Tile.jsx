
const Tile = ({flagUrl, name, altFlag}) => {

    return(
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                margin:"10px",
                padding:"10px",
                border:"1px solid black",
                borderRadius:"8px",
                flexDirection:"column",
                width:"200px"
            }}>
                <img src={flagUrl}
                 alt={altFlag} style={{width:"100px", height:"100px"}} />
                <h2>{name}</h2>
            </div>
        
    )
}

export default Tile;