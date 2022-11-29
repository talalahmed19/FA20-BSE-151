import"./right.css";
import{useState} from "react";
import R1 from "./r1";
import R2 from "./r2";
function RightBar() {
    const [cards,setCards]=useState([
        {
            title:'Stumps',
            link1:'England                 501/7d',
            link2:'England Lions* (77overs) 412/9',
            link3:'Day-2 Eng Lion trail by 89 runs',
            },
        ])
        const [cards1,setCards1]=useState([
            {
                title:'Innings Break',
                link1:'India(50 over) 306/7 ',
                link2:'Newzealand',
                link3:'Newzealand chose to field',

                },
            ])


    return ( <div>
        <R1 r1state={cards}/>
        <R2 r2state={cards1}/>
        </div>
     );
}

export default RightBar;