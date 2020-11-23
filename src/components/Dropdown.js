import React, {useState, useEffect, useRef} from 'react';
import Label from "reactstrap/es/Label";

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const topRef = useRef();

    useEffect(()=> {
        const onBodyClick = (event) => {
            if(!topRef.current.contains(event.target)) {
                /*
                * if click is done outside of dropdown component,
                * we need to close dropdown
                * */
                setOpen(false);
            }
        };
        document.body.addEventListener('click', onBodyClick);

        return() => {
            document.body.removeEventListener('click', onBodyClick);
        }

    }, []);

    const renderedOptions = options.map((option, index) => {
        if(option.value === selected.value){
            return null;
        }
        return (
            <div
                key={index}
                className='item'
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={topRef} className='ui form'>
            <div className='field'>
                <Label>{label}</Label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div
                        className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <p>some text should be here</p>
            </div>
        </div>
    );
};

export default Dropdown;