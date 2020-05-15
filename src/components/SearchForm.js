import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const SearchForm = ({searchResult, setSearchResult, errorMessage, setErrorMessage}) => {
    const [option, setOption] = useState("");
    const [id, setId] = useState("");


    const onChangeOption = (e) => {setOption(e.target.value)};
    const onChangeId = (e) => {setId(e.target.value)};

    const SearchSubmit = (e) => {
        e.preventDefault();
        axios.get('https://swapi.dev/api/'+option+'/'+id)
        .then(response => {
            console.log(response.data);
            setSearchResult(response.data)} )
            .catch(err => {setErrorMessage("this is error - " + err)})
            navigate('/'+option+'/'+id)
            setOption("");
            setId("");
        };


    return(
        <div className="row">
            <form onSubmit={SearchSubmit}>

                <label>Search for &bull;&nbsp; </label>
                <select required onChange={onChangeOption} value={option} className="myselect">
                    <option value="" className="placeholder">- please select one -</option>
                    <option value="people" >person</option>
                    <option value="planets" >planet</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;

                <label>ID# &bull;&nbsp; </label>
                <input required onChange={onChangeId} type="text" pattern="\d+" maxLength="3" name="id" value={id} className="idinput"/>
                &nbsp;&nbsp;<p className="placeholder">(must be valid i.d.)</p>
                <br/><br/>

                <button className="btn btn-cote">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;