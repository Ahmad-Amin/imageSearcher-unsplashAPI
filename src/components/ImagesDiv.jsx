import React,{useState, Fragment} from 'react'
import './imagesDiv.css';

const ImagesDiv = () => {

    const [value, setValue] = useState("");
    const [results,setResults] = useState([]);
    const fetchImagesUsingSearch = () =>{
        fetch(`https://api.unsplash.com/search/photos/?client_id=9qaPARk1vnT3D-UtVQA0sZOE9vuYv5NPG8xmeeXxRkI&query=${value}&orientation=squarish`)
        .then(res=>res.json())
        .then(data =>{
            setResults(data.results);
        })
    }

    //S AMhxs37igHWleuYqaNrKipQo0NIfxpMMWh4MluM_RnA
    return (
        <Fragment>
            <div className="myDiv">
                <span>Enter Keywords: </span>
                <input
                    className="inputTextField"
                    type="text"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                <button 
                    onClick={()=>fetchImagesUsingSearch()}
                    className="searchButton">Search</button>
            </div>

            <div className="gallery">
                {
                    results.map((item)=>{
                        return <img className="item" key={item.id} src={item.urls.regular} />
                    })
                }
            </div>
        </Fragment>
    )
}

export default ImagesDiv;