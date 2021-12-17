import React from 'react';
import './input.css'

interface Data {
    date?: string;
    time?: string;
    name?: string;
    things?: string;
}

interface Props{
    setData: React.Dispatch<React.SetStateAction<Data>>
}

const Input:React.FC<Props> = ({setData}) => {

    return (
        <div className='Input'>
            <div className="boardsize">
                <h1>外出行事輸入</h1>
                <div className='list-block'>
                    <div>日期</div>
                    <input type="date" className='date' onChange={(e) => setData((prev) => { return {...prev,date: e.target.value}})}/>
                </div>
                <div className='list-block'>
                    <div>時間</div>
                    <input type="time" className='time' onChange={(e) => setData((prev) => { return {...prev,time: e.target.value}})}/>
                </div>
                <div className='list-block'>
                    <div>辦事人員</div>
                    <input type="text" className='name' onChange={(e) => setData((prev) => { return {...prev,name: e.target.value}})}/>
                </div>
                <div className='list-block'>
                    <div>事情與地點</div>
                    <input type="text" className='event' onChange={(e) => setData((prev) => {return {...prev,things: e.target.value}})}/>
                </div>
                
                <div className='list-block'>
                    <button className='Pass'>傳送</button>
                </div>
            </div>    
        </div>
    )
}

export default Input;
