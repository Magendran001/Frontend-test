import "../css/Starwar.css";
function StarWarContainer({data}){
    return (<div className="star_war_container" >
          
          <div  className="star_war_container_left">
            <p>Name :- {data.name}</p>
            <p>Model :- {data.model}</p>
            <p>Crew:- {data.crew}</p>
            <p>Passengers :- {data.passengers}</p>
            <p>Drive Rating :- {data.hyperdrive_rating}</p>
          </div>
          <div className="star_war_container_right" >
          {data.highest_films&&<img src="https://t4.ftcdn.net/jpg/05/73/13/55/240_F_573135545_QpPCuCRScNyy70u1m9P0DQmAl5w6Hhrf.jpg" />}
           <div>
           <p>Number Of Films</p>
            <p>{data.films.length}</p>
           </div>

          </div>
    </div>)
}
export default StarWarContainer