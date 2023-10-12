function CrewHighestMembers(crew){
    let members = [];
    if(crew.includes("-")){
     members = crew.split("-");
    members = members.map((ele)=>{
      if(typeof(crew)==="string"){
       return  parseInt(ele.replace(/,/g, ''))
      }
    });
    members = members.sort((a,b) =>b-a);
  }
  else
  {
    if(typeof(crew)==="string")
    members = [parseInt(crew.replace(/,/g, ''))]
  }
  return members[0];
  }
  export default CrewHighestMembers;