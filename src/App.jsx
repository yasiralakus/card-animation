import { useState } from "react"

export default function App() {

    const [animation2, setAnimation2] = useState(false);

    const [anim3TextValue, setAnim3TextValue] = useState('')
    console.log(anim3TextValue)

    function handleAnim3(event) {
        setAnim3TextValue(event.target.value)
    }

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

                <div className="animation-03">

                    <div>
                        <input type="text" onChange={handleAnim3} value={anim3TextValue}/>
                        <p style={anim3TextValue === '' ? {} : {transform: 'translateY(-20px)', zIndex: '3', color: '#000'}} >Kullanıcı Adı giriniz</p>
                    </div>

                </div>

                <div className="animation-04">

                    <div>
                        <img src="./img/anim04.jpg" alt="" />
                        <div>
                            <h1>Lorem ipsum dolor sit.</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam labore cumque nihil, illum cupiditate sed sit modi nostrum. Praesentium quo harum incidunt voluptatibus magnam suscipit!</p>
                        </div>
                    </div>

                </div>

                <div className="animation-05">

                    <div>
                        <img src="./img/anim04.jpg" alt="" />
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi, magni autem excepturi laudantium animi similique obcaecati neque odio cumque!</p>
                    </div>

                    <div>
                        <img src="https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h1>Autem excepturi laudantium animi.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi, magni autem excepturi laudantium animi similique obcaecati neque odio cumque!</p>
                    </div>

                </div>

                <div className="animation-06">

                    <div>
                        <img src="https://images.unsplash.com/photo-1712313171623-5df9435ec12b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sequi!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur provident excepturi maiores eveniet iusto quia temporibus, sed suscipit facilis, eius, tenetur necessitatibus similique recusandae sint consectetur corrupti quis nostrum nam fugit itaque illum et!</p>
                        </div>
                    </div>

                    <div>
                        <img src="https://images.unsplash.com/photo-1711972964921-17046ddf8d12?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sequi!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur provident excepturi maiores eveniet iusto quia temporibus, sed suscipit facilis, eius, tenetur necessitatibus similique recusandae sint consectetur corrupti quis nostrum nam fugit itaque illum et!</p>
                        </div>
                    </div>

                    <div>
                        <img src="https://images.unsplash.com/photo-1712311953600-81354526ec28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sequi!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur provident excepturi maiores eveniet iusto quia temporibus, sed suscipit facilis, eius, tenetur necessitatibus similique recusandae sint consectetur corrupti quis nostrum nam fugit itaque illum et!</p>
                        </div>
                    </div>

                </div>

                <div className="animation-07">

                    <div>
                        <img src="https://images.unsplash.com/photo-1712311953600-81354526ec28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div>
                        <img src="https://images.unsplash.com/photo-1711972964921-17046ddf8d12?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div>
                        <img src="https://images.unsplash.com/photo-1712313171623-5df9435ec12b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                </div>

                <div className="animation-08">

                    <div>
                        <img src="https://images.unsplash.com/photo-1712260559341-cbe284e828b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h6>Music</h6>

                        <h5>12 Jun 2024</h5>

                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem id totam dolores illum error veniam placeat inventore debitis maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at officia aliquid aliquam sit suscipit!</p>

                        <div>
                            <p><i class="fa-solid fa-heart"></i> 8</p>
                            <p><i class="fa-solid fa-comment"></i> 14</p>
                        </div>

                        <button><i class="fa-solid fa-right-long"></i> READ MORE</button>

                    </div>

                    <div>
                        <img src="https://images.unsplash.com/photo-1712329113006-97e9c76835f5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h6>Adventure</h6>

                        <h5>23 Apr 2024</h5>

                        <h1>Id totam dolores illum error veniam placeat inventore.</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem id totam dolores illum error veniam placeat inventore debitis maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at officia aliquid aliquam sit suscipit!</p>

                        <div>
                            <p><i class="fa-solid fa-heart"></i> 11</p>
                            <p><i class="fa-solid fa-comment"></i> 18</p>
                        </div>

                        <button><i class="fa-solid fa-right-long"></i> READ MORE</button>

                    </div>

                    <div>
                        <img src="https://images.unsplash.com/photo-1712238501880-2e4efd062211?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h6>Travel</h6>

                        <h5>10 Nov 2024</h5>

                        <h1>Totam dolores illum veniam placeat inventore debitis maxime?</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem id totam dolores illum error veniam placeat inventore debitis maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at officia aliquid aliquam sit suscipit!</p>

                        <div>
                            <p><i class="fa-solid fa-heart"></i> 3</p>
                            <p><i class="fa-solid fa-comment"></i> 2</p>
                        </div>

                        <button><i class="fa-solid fa-right-long"></i> READ MORE</button>

                    </div>

                </div>

            </div>

        </div>
    )
}