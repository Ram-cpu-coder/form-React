const Greeting = ()=>{
    const today = new Date();
    const hour = today.getHours();
    // const morning = props.morning;
    // const afternoon = props.afternoon;
    if(hour<12){
        return (
        <h1 className="text-left ps-5">Good Morning</h1>
    )
        
    }else{
        return (
            <h1 className="text-left ps-5">Good Afternoon</h1>
        )
    }
    
}
export default Greeting;