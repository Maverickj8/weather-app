
export default function (props) {
    return (
        <div className="container">
           <div>
            <img src={props.image} alt="slippers"/>
            </div> 
           <div>
              <h1>{props.name}</h1>
              <p>{props.year}</p>
            <h3>{props.description}</h3>
             
           </div>

        </div>
    )
}