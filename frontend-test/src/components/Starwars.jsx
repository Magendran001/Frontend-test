import { useEffect, useState } from "react"
import StarWarContainer from "./StarwarContainer";
import CrewHighestMembers from "../common/utilis";
import "../css/Starwar.css";
import Spinner from "../common/Components/Spinner";


function StarWar(){
 let [filtered_data,setFilteredData] = useState([]);
 let [fetch_data,setFetchData] = useState(false);
 let [crew_members_filter,setCrewMembersFilter] = useState(10);

     async function fetchStarWarDatas(){

        try {
            setFetchData(true);
            let res =await fetch("https://swapi.dev/api/starships/");
            let data = await res.json();
            let {results} = data;
            console.log(data,"res");
            console.log(results,"results");

            let crew_filter = results.map((ele)=>{
                  ele.crew_highest_members = CrewHighestMembers(ele.crew);
                  return ele;
            });
             crew_filter = crew_filter.filter((ele)=>{
               return ele.crew_highest_members<crew_members_filter;
            });
           crew_filter = crew_filter.sort((a,b)=>a.crew_highest_members -b.crew_highest_members);
            // Find the highest return value
        let highestReturn = Math.max(...crew_filter.map(ele => ele.films.length));
// Set highest_films field to true for all films with the highest return
            crew_filter = crew_filter.map(obj => {
                if (obj.films.length === highestReturn) {
                    obj.highest_films = true;
                }
                return obj;
            }); 
            setFilteredData(crew_filter);
            setFetchData(false);
            return data;
        } catch (error) {
             console.log(error);
             setFetchData(false);
             alert(error.message);
        }
     }
     useEffect(()=>{
       let data =  fetchStarWarDatas();
     },[])

    return (
        
      <div className="star_war_total">
        <div className="star_war_menu_img">
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"/>
        </div>
        {!fetch_data ?
        
    <div className="star_war_details" >
    <div >
          <p>Results are filtered to startships with a crew size less than 10 and sorted by crew size</p>  
          <div style={{display:"flex",justifyContent:"center" ,alignItems:"center",gap:"10px"}}>
          <p>The starship that has featured in the most films will show a  </p>
          <img width={"30px"} height={"30px"} src="https://t4.ftcdn.net/jpg/05/73/13/55/240_F_573135545_QpPCuCRScNyy70u1m9P0DQmAl5w6Hhrf.jpg"/>
          </div>
         
     </div>
    
    <div className="star_war_container_list">
            
            {filtered_data.map((ele)=>{
                return ( <StarWarContainer data={ele}/>)
            })}

    </div>
    
    </div>:<Spinner/>
    }
    </div>
    )
}
export default StarWar