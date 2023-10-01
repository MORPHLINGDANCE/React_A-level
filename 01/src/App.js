import logo from './logo.svg';
import './App.css';
import './reset.css';

// const Header = ({children}) =>
// <header className="App-header">
//     pivo
//   <img src={logo} className="App-logo" alt="logo" />
//     {children}
// </header>
//
// const ColorRedH1 = ({children , color}) =>
//     <h1 style={{color}}>{children}{color}</h1>
//
// const Add =({a,b}) =>
//     <pre>a+b={a}+{b}={a+b}</pre>

const App = () =>
    <>
        <header>
            <div class="header_container">
                <img class="header_img" src="img/A-Level_logo.png" alt="#"/>
                    <nav class="header_nav">
                        <ul class="header_ul">
                            <li class="header_li"><a href="#"></a>Главная</li>
                            <li class="header_li"><a href="#"></a>Проекты</li>
                            <li class="header_li"><a href="#"></a>Команда</li>
                            <li class="header_li"><a href="#"></a>Блог</li>
                            <li class="header_li"><a href="#"></a>Контакты</li>
                        </ul>
                    </nav>
                    <nav class="main-nav hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                            <span></span>
                        </label>
                        <ul class="menu__box">
                            <li><a class="menu__item" href="#">Главная</a></li>
                            <li><a class="menu__item" href="#">Проекты</a></li>
                            <li><a class="menu__item" href="#">Команда</a></li>
                            <li><a class="menu__item" href="#">Блог</a></li>
                            <li><a class="menu__item" href="#">Контакты</a></li>
                        </ul>
                    </nav>
            </div>
        </header>
        <main>
            <section>
                <p class="main_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias consequatur dolorem eaque eos excepturi illum ipsam iusto laudantium minima neque porro quaerat qui recusandae reiciendis, repellat saepe. Alias aliquam architecto, assumenda blanditiis corporis dicta eaque eligendi et eveniet ex id maiores necessitatibus nihil officiis perspiciatis quidem repellat, repudiandae sint temporibus voluptas, voluptatum?</p>
                <h1 class="main_header">Our work</h1>
                <div class="cards">
                    <div class="card card_1">
                        <img class="lake" src="img/lake.jpeg" alt="#"/>
                            <p class="lake_header">Lorem ipsum dolor sit amet.</p>
                            <p class="lake_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquam animi at autem delectus est facere fuga harum in natus odio perspiciatis quasi, sapiente sit. Doloribus enim nulla quas.</p>
                            <button class="lake_button">Go</button>
                    </div>
                    <div class="card card_2">
                        <img class="lake" src="img/lake.jpeg" alt="#"/>
                            <p class="lake_header">Lorem ipsum dolor sit amet.</p>
                            <p class="lake_text">Lorem ipsum dolor sit amet.</p>
                            <button class="lake_button">Go</button>
                    </div>
                    <div class="card card_3">
                        <img class="lake" src="img/lake.jpeg" alt="#"/>
                            <p class="lake_header">Lorem ipsum dolor sit amet.</p>
                            <p class="lake_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum eos exercitationem incidunt ipsam neque nesciunt praesentium repellendus rerum sed.</p>
                            <button class="lake_button">Go</button>
                    </div>
                    <div class="card card_4">
                        <img class="lake" src="img/lake.jpeg" alt="#"/>
                            <p class="lake_header">Lorem ipsum dolor sit amet.</p>
                            <p class="lake_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, voluptatum..</p>
                            <button class="lake_button">Go</button>
                    </div>
                    <div class="card card_5">
                        <img class="lake" src="img/lake.jpeg" alt="#"/>
                            <p class="lake_header">Lorem ipsum dolor sit amet.</p>
                            <p class="lake_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquam animi at autem delectus est facere fuga harum in natus odio perspiciatis quasi, sapiente sit. Doloribus enim nulla quas.</p>
                            <button class="lake_button">Go</button>
                    </div>
                    <div class="card card_6">
                        <img class="lake" src="img/lake.jpeg" alt="#"/>
                            <p class="lake_header">Lorem ipsum dolor sit amet.</p>
                            <p class="lake_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquam animi at autem delectus est facere fuga harum in natus odio perspiciatis quasi, sapiente sit. Doloribus enim nulla quas.</p>
                            <button class="lake_button">Go</button>
                    </div>
                </div>
            </section>
            <aside class="main_aside main_aside_1">Aside1</aside>
            <aside class="main_aside main_aside_2">Aside2</aside>
        </main>
        <footer>
            <p className="footer_text">Footer</p>
        </footer>
    </>

export default App;
