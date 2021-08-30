import './Home.css'
import {connect} from "react-redux";
import {getWeather, search} from "../store/weather";
import {useEffect, useState} from "react";
import war from './img/war.png'

function Home({getWeather, weather, search}) {
    useEffect(() => {
        getWeather('Tashkent')
    }, [])
    const [value, setValue] = useState('')



    function btn() {
        search(value)
        setValue('')
    }

    const shaxarlar = [
        {SH: 'Andijan'},
        {SH: 'Bukhara'},
        {SH: 'Fergana'},
        {SH: 'Jizzakh'},
        {SH: 'Urganch'},
        {SH: 'Namangan'},
        {SH: 'Navoiy'},
        {SH: 'Qashqadaryo'},
        {SH: 'Samarqand'},
        {SH: 'Sirdaryo'},
        {SH: 'Karakalpakstan'},
        {SH: 'Tashkent'}
    ]

    useEffect(() => {
        if (weather && document.querySelector('.Home')) {
            Math.round(weather.main.temp - 273) < 25 ? document.querySelector('.Home').classList.add('darker')
                : document.querySelector('.Home').classList.remove('darker');
        }
    }, [weather])


    let obHavo = weather

    function foo(e) {
        let apii = e.target.value
        getWeather(apii)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search(value)
            setValue('')
        }
    }


    const date = new Date()

    let dayOfWeek = ''
    switch (date.getDay()) {
        case 1:
            dayOfWeek = 'Monday'
            break
        case 2:
            dayOfWeek = 'Tuesday'
            break
        case 3:
            dayOfWeek = 'Wednesday'
            break
        case 4:
            dayOfWeek = 'Thursday'
            break
        case 5:
            dayOfWeek = 'Friday'
            break
        case 6:
            dayOfWeek = 'Saturday'
            break
        case 7:
            dayOfWeek = 'Sunday'
            break;
        default:
            date.getDay()
    }
    let month = ''
    switch (date.getMonth()) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        case 11:
            month = 'December'
            break;
        default:date.getMonth()


    }
    const {name, sys} = obHavo
    return (<>
            {(typeof weather.main != 'undefined') ?
                <div className={'Home'}>

                    <div className="left">
                        <div className="bloc">
                            <img className={'war'} src={war} alt=""/>


                            <div className="box">
                                <h1>{Math.round(obHavo.main.temp) - 273} </h1>
                                <div className="city_data">
                                    <h2 className={'city'}>{name} </h2><span>{sys.country}</span>
                                    <div className="data">
                                        <p>{date.getHours()}:{date.getMinutes()}-{dayOfWeek},{date.getDate()} {month} {date.getFullYear()} </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="text">
                            <div className="search_box">
                                <input value={value} onKeyDown={handleKeyDown}
                                       onChange={(e) => setValue(e.target.value)}
                                    className={'search'} placeholder={'Another location'} type="text"/>
                                <div className={'p-absolute'}>
                                    {  shaxarlar.filter (item => {
                                        if (   value === '' ) {
                                            return ''
                                        } else if (item.SH.toLowerCase ().includes ( value.toLowerCase ())){
                                            return item
                                        }  } ).map((item,index)=> <button key={index} onClick={()=>setValue(item.SH) } value={item.SH}>{item.SH}</button>


                                        )
                                    }
                                </div>
                                <button onClick={btn} className={'btn_search'}>
                                    <i className="fas fa-search"> </i>
                                </button>
                            </div>
                            <div className="uzb">
                                <div className="uzb_left">
                                    <button value={'Andijan'} onClick={foo} className={'btn'}>Andijan</button>
                                    <button value={'Bukhara'} onClick={foo} className={'btn'}>Bukhara</button>
                                    <button value={'Fergana'} onClick={foo} className={'btn'}>Fergana</button>
                                    <button value={'Jizzakh'} onClick={foo} className={'btn'}>Jizzakh</button>
                                    <button value={'urganch'} onClick={foo} className={'btn'}>Urganch</button>
                                    <button value={'Namangan'} onClick={foo} className={'btn'}>Namangan</button>
                                    <button value={'Navoiy'} onClick={foo} className={'btn'}>Navoiy</button>
                                </div>
                                <div className="uzb_right">
                                    <button value={'Qashqadaryo'} onClick={foo} className={'btn'}>Qashqadaryo</button>
                                    <button value={'Samarqand'} onClick={foo} className={'btn'}>Samarqand</button>
                                    <button value={'Sirdaryo'} onClick={foo} className={'btn'}>Sirdaryo</button>
                                    <button value={'Karakalpakstan'} onClick={foo} className={'btn'}>Karakalpakstan
                                    </button>
                                    <button value={'Tashkent'} onClick={foo} className={'btn'}>Tashkent</button>
                                </div>
                            </div>
                            <hr/>
                            <h3 className={'h3'}>Weather Details</h3>
                            <div className="Weather_Details">
                                <div className="d-flex">
                                    <p className={'Weather_Details-title'}>description</p>  <h5
                                    className={'Weather_Details-number'}>{obHavo.weather[0].description}</h5>
                                </div>
                                <div className="d-flex">
                                    <p className={'Weather_Details-title'}>humidity</p>  <h5
                                    className={'Weather_Details-number'}> {obHavo.main.humidity}</h5>
                                </div>
                                <div className="d-flex">
                                    <p className={'Weather_Details-title'}>Wind</p>
                                    <h5 className={'Weather_Details-number'}> {obHavo.wind.speed}</h5>
                                </div>
                                <div className="d-flex">
                                    <p className={'Weather_Details-title'}>Cloudy</p>  <h5
                                    className={'Weather_Details-number'}> 12%</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ''}
        </>
    )

}


export default connect(({weather: {weather}}) => ({weather}), {getWeather, search})(Home)