import React from 'react';
import { Link } from '@reach/router';


const SearchDisplay = ({errorMessage, searchResult, option}) => {

    if(errorMessage) {
        return(
            <div className="errorwrapper">
                <div className="messwrapper">
                    <h1 className="errormess">fool! the item you searched for</h1>
                    <h1 className="errormess">is not in this database . . .</h1>
                    <Link to="/search" className="bodylinks errorlink">Back</Link>
                </div>
            </div>
        );
    }
    else if(!errorMessage) {

    if(option === "people"){
        return(
            <>
            <p>your search results . . .</p>
                <div className="row">
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Birth year</th>
                            <th>Eye color</th>
                            <th>Hair color</th>
                            <th>Mass</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{searchResult.name}</td>
                                <td>{searchResult.gender}</td>
                                <td>{searchResult.birth_year}</td>
                                <td>{searchResult.eye_color}</td>
                                <td>{searchResult.hair_color}</td>
                                <td>{searchResult.mass}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link to="/search" className="bodylinks">Back</Link>
            </>
        );
    }
    if(option === "planets"){
        return(
            <>
            <p>your search results . . .</p>
                <div className="row">
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Population</th>
                            <th>Climate</th>
                            <th>Terrain</th>
                            <th>Gravity</th>
                            <th>Diameter</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{searchResult.name}</td>
                                <td>{searchResult.population}</td>
                                <td>{searchResult.climate}</td>
                                <td>{searchResult.terrain}</td>
                                <td>{searchResult.gravity}</td>
                                <td>{searchResult.diameter}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link to="/search" className="bodylinks">Back</Link>
            </>
            );
        }
    }
}
export default SearchDisplay;

//
//
//