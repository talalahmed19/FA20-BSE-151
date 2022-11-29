import { useState } from "react";
function Mid() {
    const [cards, set] = useState([
        {
            image: 'pic2.jpeg',
            title1: 'Abrar Ahmed, Mohammad Ali get maiden call-ups for England Tests;Fawad, Hassan,Yasir droped',
            title2: 'Shaheen Shah Afridi is not fit and available for selection yet',
            // image2: 'afridi.jpg',
            // title3: 'Shaheen feeling better after undergoing appendectomy',
            // title4: 'He is also currently undergoing a two week rehab for his knee injury',
        },
        {
            image: 'pic1.jpeg',
            title1: 'Warner: Im not a criminal. You should get right of appeal',
            title2: 'Australia batter set to apply to have his leadership ban reviewed',
            // image2: 'player.jpg',
            // title3: 'Meredith called up as Star is rested for ODI against England',
            // title4: 'Agar also set to miss out after flying to Canberra to play a match',
        },
         {
             image1: 'pic1.jpeg',
            title3: 'Warner: Im not a criminal. You should get right of appeal',
          title4: 'Australia batter set to apply to have his leadership ban reviewed',
         },
        {
            image1: 'pic2.jpeg',
         title3: 'Abrar Ahmed, Mohammad Ali get maiden call-ups for England Tests;Fawad, Hassan,Yasir droped',
             title4: 'Shaheen Shah Afridi is not fit and available for selection yet',
       
        },
 
    

    ])
    function handleDelete(title1) {
        const updateCard = cards.filter((card) => card.title1 !==title1);
        set(updateCard);
    }

    return (
        <div>
            {
                cards.map((t) => (
<div>
                    <div class="card text-white bg-dark mb-3" key={t.title1} style={{ width: '400px', height: '345px', display: 'flex', flex: "wrap", marginTop: '-10px',marginLeft:"60px" }}>
                        <img src={t.image} class="card-img-top" alt="..." style={{ height: '200px' }} />
                        <div >
                            <h5 class="card-title">{t.title1}</h5>
                            <p class="card-text">{t.title2}</p>

                         {/* <div class="card text-dark bg-light mb-3" style={{ height: '60px' }}>
                            <div class="row g-0"> */}
                                {/* <div class="col-md-4">
                                    <img src={t.image2} class="img-fluid rounded-start" alt="..." style={{ height: '50px', marginLeft: '5px', marginTop: '4px' }} />
                                </div>  */}
                             {/* <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ fontSize: '13px', marginLeft:"-70px",marginTop:"-5px"}}>{t.title3}</h5>

                                        <p class="card-text" style={{ fontSize: '13px',marginLeft:"-70px",marginTop:"-10px" }}><small class="text-muted">{t.title4}</small></p>
                                        
                                    </div>

                                    
                                </div> */}
                                
                            {/* </div>
                        </div> */}


                    </div>
<div style={{marginLeft:'430px',marginTop:'-100px'}}>
<button style={{width:'70px'}} onClick={() =>handleDelete(t.title1)}>Delete</button>
</div>
</div>
</div>



                ))
            }

        </div>
    );
}

export default Mid;