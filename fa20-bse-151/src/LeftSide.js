import "./left.css"
import{useState} from "react";
import{Link} from "react-router-dom";
import React from "react";
function LeftSide() {
    const [cards,setCards]=useState([
        {
            title:'Quick Links',
            link1:'T20 Timeout',
            link2:'T20 Time Out',
            link3:'Fantasy Pick',
            link4:'ICC Rankings',
            },
        {
            title:'ESPNcricinfo Apps',
            link1:'Android App',

            link2:'iOS App',
            link3:'MacOS App',
            link4:'Windows App',
            },
            {
                title:'Follow ESPNcricinfo',
                link1:'Instagram',
                link2:'Twitter',
                link3:'Facebook',
                link4:'Youtube',
                },
                {
                    title:'ESPN Sites',
                    link1:'The Cricket Monthly',
                    link2:'ESPN',
                    link3:'Cricbuzz',
                    link4:'Cricstats',
                    },


    ])
    function handleDelete(title) {
        const updateCard = cards.filter((card) => card.title !==title);
        setCards(updateCard);
    }
    return (  
        <div className="left">
            {
            cards.map((t) => (
                <div class="card"style ={{width:'290px',display:'flex',flex:'wrap',marginTop:'10px'}}>
                    <ul class="list-group">
                    <a class="list-group-item">{t.title}</a>
                   <li class="list-group-item" style={{fontWeight:'normal'}}>{t.link1}</li>
                   <li class="list-group-item" style={{fontWeight:'normal'}} >{t.link2}</li>
                   <li class="list-group-item" style={{fontWeight:'normal'}} >{t.link3}</li>
                   <li class="list-group-item" style={{fontWeight:'normal'}} >{t.link4}</li>

                    </ul>
                    <button style={{width:'70px',marginLeft:'90px'}} onClick={() =>handleDelete(t.title)}>Delete</button>
            
            </div>
            ))
        }
            </div>
    );
}

export default LeftSide;