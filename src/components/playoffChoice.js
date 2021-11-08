import React from 'react';
import '../App.css';

function PlayoffChoice(){
    return (
        <header className="App-header">
            <h1>Choose Your Playoff Structure</h1>
            <form className="Form">
                <label>
                <input type="radio" name="pType" value="4 Team"/>
                4 Team
                </label>
                <label>
                <input type="radio" name="pType" value="6 Team"/>
                6 Team
                </label>
                <label>
                <input type="radio" name="pType" value="8 Team"/>
                8 Team
                </label>
                <label>
                <input type="radio" name="pType" value="16 Team"/>
                12 Team
                </label>
                <label>
                <input type="radio" name="pType" value="12 Team"/>
                16 Team
                </label>
                <label>
                <input type="radio" name="pType" value="32 Team" disabled="disabled"/>
                32 Team (Not A Chance)
                </label>
                <label>
                <input type="radio" name="pType" value="64 Team" disabled="disabled"/>
                64 Team (Never Gonna Happen)
                </label>
                <label>
                    <button>Submit</button>
                </label>
            </form>
        </header>
    )
}

export default PlayoffChoice;