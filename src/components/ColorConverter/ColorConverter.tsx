import './ColorConverter.css'
import { useState } from 'react';

export const ColorConverter = () => {

    const [ state, setState ] = useState ({
        value: '#',
        rgb: 'RGB',
        background: `#fff`
    });

    const hexToRgb = (hex: string): string => {
        const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        const result = regex.exec(hex);
        if (!result) {
            setState(prevState => ({...prevState, value: '#', background: '#FF0000'}))
            return "Invalid HEX value";
        }
        const rgb = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
        return rgb;
    } 

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prevState => ({...prevState, value: e.target.value}))
        if(e.target.value.length === 7){
            setState(prevState => ({...prevState, rgb: hexToRgb(e.target.value)}))
            setState(prevState => ({...prevState, value: '#', background: e.target.value}))
        }
    }

    return ( 
        <div className='wrapper' style = {{ backgroundColor: state.background}}>
            <form className='colorForm'>
                <input id="colorHEX" name="colorHEX" className='colorHEXInput' value={state.value} type='text' onChange={handleOnChange}/>
                <div className='colorRGB'>{state.rgb.length === 0 ? "Invalid HEX value" : state.rgb}</div>
            </form>
        </div>
    );
};