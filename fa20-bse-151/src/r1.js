function R1({r1state}) {
    return ( 
    
        <div style={{marginTop:'150px'}}>
        {
        r1state.map((t) => (


            
            <div class="card bg-light mb-3">
            <div class="card-header" style={{color:'red'}}>{t.title}</div>
            <div class="card-body">
              <h5 class="card-title"style={{fontWeight:'bold'}}>{t.link1}</h5>
              <p class="card-text" style={{fontWeight:'bold'}}>{t.link2}</p>
             <p class="card-text" style={{fontSize:'small'}}>{t.link3}</p>
            </div>
            </div>
        ))
    }
        </div>   );
}

export default R1;