export  const fetchTasks=async(action)=>
{
    const response=await fetch("http://localhost:5000/data/?date="+action)
    const data=await response.json();
    return data
}

export  const fetchStrike=async(action)=>
{   
    const obj=JSON.stringify({
        id:action.id,
        task:action.name,
        checked:action.checked,
        kljuc:action.kljuc,
        date:action.date
    });
    console.log(obj)
    const response=await fetch("http://localhost:5000/data/"+action.id,{
        method:'PUT',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
    },
    body:obj
    })

}

export  const fetchDelete=async(action)=>
{
    const response=await fetch("http://localhost:5000/data/"+action.id,{
        method:'DELETE',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
    }
    })

}
export  const jsonServerAdd=async(action)=>
{
    console.log("----jsonServerAdd -----")
    console.log(action.date)
    const obj=JSON.stringify({
        id:action.id,
        task:action.task,
        checked:action.checked,
        kljuc:action.kljuc,
        date:action.date
    });
    console.log("objekat")
    console.log(obj)

    const response=await fetch("http://localhost:5000/data/?id=TVcheEQ",{
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
    },
    body:obj
    })
    .then(console.log("uspeh"))
    .catch(e=>{
        console.log(e)
    })

}