import { v4 as uuid } from "uuid";
import "../App.css";
 
export default function UniqueId() {
   
    const unique_id = uuid();
 
    // Get first 8 characters using slice
    const small_id = unique_id.slice(0, 8);
 
    return (
        <div className="App">
            <h1 className="geeks">GeeksforGeeks</h1>
            <div className="container">
                <div className="item">
                    <h2>Unique ID</h2>
                    <p>{unique_id}</p>
                    <h3>Sliced Unique ID</h3>
                    <p>{small_id}</p>
                </div>
            </div>
        </div>
    );
}