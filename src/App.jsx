import { useState } from "react"

export default function App() {

    const [animation2, setAnimation2] = useState(false);

    return (
        <div className="full-page">

            <div className="container">

                <div className="animation-01">

                        <div className="card">

                        <i class="fa-solid fa-palette"></i>

                        <h1>Design & Art</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deleniti! Porro, perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    </div>

                    <div className="card">

                        <i class="fa-solid fa-building-columns"></i>

                        <h1>Accountance</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deleniti! Porro, perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    </div>

                    <div className="card">

                        <i class="fa-solid fa-lightbulb"></i>

                        <h1>Management</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deleniti! Porro, perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    </div>

                </div>

                <div className="animation-02" style={animation2 === true ? {width: '300px'} : {}}>

                    <button onClick={() => (animation2 === true ? setAnimation2(false) : setAnimation2(true))}>{animation2 === true ? <i class="fa-solid fa-chevron-left"></i> : <i class="fa-solid fa-chevron-right"></i>}</button>

                    <header>
                        <h1>Y</h1>
                        <p style={animation2 === true ? {display: 'inline'} : {}}>./yasiralakus</p>
                    </header>

                    <div className="search-input">
                        <input type="text" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <ul>
                        <li className="animation2-active">
                            <i class="fa-solid fa-icons"></i>
                            <a style={animation2 === true ? {opacity: '1'} : {}} href="">Dashboard</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chart-simple"></i>
                            <a style={animation2 === true ? {opacity: '1'} : {}} href="">Market Overview</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chart-pie"></i>
                            <a style={animation2 === true ? {opacity: '1'} : {}} href="">Analytics</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-file"></i>
                            <a style={animation2 === true ? {opacity: '1'} : {}} href="">Reports</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-industry"></i>
                            <a style={animation2 === true ? {opacity: '1'} : {}} href="">Industries</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-gear"></i>
                            <a style={animation2 === true ? {opacity: '1'} : {}} href="">Settings</a>
                        </li>
                        <li>
                            <i class="fa-regular fa-bell"></i>
                            <a style={animation2 === true ? {opacity: '1'} : {}} href="">Notifications</a>
                        </li>
                    </ul>

                </div>

            </div>

        </div>
    )
}