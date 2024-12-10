import Contact from "./Contact"

export const About=()=>{
    var name = 'Hadir'
    let a = 5
    let b = 7
    return(
        <div>
            <h2 className="about">About Section</h2>
            <h3 style={{color : 'tomato',textDecoration : 'underline'}}>My name is {name}</h3>
            <h4>{a + b }</h4>
            <Contact/>
        </div>
    )
}

export default About

// export const Rahma=()=>{
//     return(
//         <div>
//             <h2>Rahma Component</h2>
//         </div>
//     )
// }