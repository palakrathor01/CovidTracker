import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err){
            console.log(err);
        }
         
    }

    useEffect(()=>{
    getCovidData();
    },[]);

  return <>
    {/*<section>
    <h1>Live</h1>
    <h2>LIVE COVID TRACKER</h2>

    <ul>
        <li className="card">
            <div className="main">
                <div className='inner'>
                    <p className='name'><span> OUR </span> COUNTRY </p>
                    <p className='total'>INDIA</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="main">
                <div className='inner'>
                    <p className='name'><span> TOTAL </span> RECOVERED </p>
                    <p className='total'>{data.recovered}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="main">
                <div className='inner'>
                    <p className='name'><span> TOTAL </span> CONFIRMED </p>
                    <p className='total'>{data.confirmed}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="main">
                <div className='inner'>
                    <p className='name'><span> TOTAL </span> DEATH </p>
                    <p className='total'>{data.deaths}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="main">
                <div className='inner'>
                    <p className='name'><span> TOTAL </span> ACTIVE </p>
                    <p className='total'>{data.active}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="main">
                <div className='inner'>
                    <p className='name'><span> LAST </span> UPDATED </p>
                    <p className='total'>{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>
    </ul>
    </section>*/}
    <section>
            <h1 className="blink">🔴 LIVE</h1>
            <h2>COVID-19 CORONA VIRUS TRACKER</h2>
            <ul>
                <li className="card bg-aqua">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_total card_small log-text-shadow">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card bg-green">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                            <p className="card_total card_small log-text-shadow">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card bg-parrot">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
                            <p className="card_total card_small log-text-shadow">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card bg-orange">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL</span> DEATHS</p>
                            <p className="card_total card_small log-text-shadow">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card bg-blue">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                            <p className="card_total card_small log-text-shadow">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card bg-pink">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>LAST</span> UPDATED</p>
                            <p className="card_total card_small log-text-shadow">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </>
  ;
};

export default Covid;
