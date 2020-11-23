import React, {useState} from 'react';
import Accordion from "./Accordion";
import Search from "./Search";

import accordionData from '../accordionData';
import Dropdown from "./Dropdown";
import dropdownData from "../data/DropdownData";

import Translate from "./Translate";
import {TestBudget} from "./TestBudget";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Route from "./Route";
import AccordionData from '../accordionData';

const App = (props) => {
    const[selected, setSelected] = useState(dropdownData[0]);
    const[showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
        {/*<Search/>*/}
        {/*<Accordion items={accordionData}/>*/}
        {/*<button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle dropdown</button>
        {showDropdown ?
            <Dropdown
                options={dropdownData}
                selected={selected}
                onSelectedChange={setSelected}
            /> : null
        }*/}
        {/*<Translate/>*/}
        <Header/>
        <Route path='/'>
            <Accordion items={AccordionData}/>
        </Route>
        <Route path='/list'>
            <Search/>
        </Route>
        <Route path='/dropdown'>
            <Dropdown
                label='Select a color'
                options={dropdownData}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </Route>
        <Route path='/translate'>
            <Translate items={AccordionData}/>
        </Route>


        {/*<TestBudget/>*/}
        </div>
    );
};

export default App;