const pages = [
    {id: 1, pageName: 'Книги', url: 'something'},
    {id: 2, pageName: 'Статьи', url: 'something'},
    {id: 3, pageName: 'Обзоры книг', url: 'something'},
    {id: 4, pageName: 'Отрывки из книг', url: 'something'},
    {id: 5, pageName: 'Интервью', url: 'something'},
    {id: 6, pageName: 'Чек-листы', url: 'something'}
]
const books_bestsellers = [
        {
            id: 1,
            title: 'Похороните меня за плинтусом',
            author: 'Санаев П.',
            imageURL: 'https://dk-spb.ru/media/books/25769/medium_129034_30754a4e-a21c-11ed-9cc9-c29ed5a0c3b1.jpg',
            pages_count: 288,
            price: 547,
            url: 'https://dk-spb.ru/books/129034'
        },
        {
            id: 2,
            title: 'Ильф И., Петров Е. 12 стульев',
            author: 'Ильф Илья Арнольдович , Петров Евгений Петрович',
            imageURL: 'https://dk-spb.ru/media/books/70967/medium_211229_52380080-dea9-11ed-9c7c-c29ed5a0c3b1.jpg',
            pages_count: 448,
            price: 242,
            url: 'https://dk-spb.ru/books/14292'
        },
        {
            id: 3,
            title: 'В начале было кофе. Лингвомифы, речевые «ошибки» и другие поводы поломать копья в спорах о русском я',
            author: 'Гурьянова С.',
            imageURL: 'https://dk-spb.ru/media/books/130771/medium_238008_a01baaf0-6e5b-11ee-b5b9-12970dda3914.jpg',
            pages_count: 368,
            price: 820,
            url: "https://dk-spb.ru/books/238008"
        },
        {
            id: 4,
            title: 'Планета Максимус. Хрупкое: стихи, проза, спектакль',
            author: 'Петров А. А.',
            imageURL: 'https://dk-spb.ru/media/books/129166/300_113334_129166_E09B26284D95182FFDAB14A013FEB91D.webp',
            pages_count: 832,
            price: 890,
            url: 'https://dk-spb.ru/books/236855'
        }
    ];
const books_education = [
        {id: 5,
            title: 'Конституция РФ (с гимном России). С учетом образования в составе РФ новых субъектов',
            author: 'Российская Федерация',
            imageURL: 'https://dk-spb.ru/media/books/59823/medium_169478_e4e8eb90-bf16-11ed-83f6-c29ed5a0c3b1.jpg',
            pages_count: 64,
            price: 29,
            url: 'https://dk-spb.ru/books/169478'},
        {id: 6,
            title: 'АГП Синтез психологии и педагогики-прорыв в образовании. Выготский Л.С.',
            author: 'Выготский Л.С.',
            imageURL: 'https://dk-spb.ru/media/books/108546/medium_200943_cdf3a2cc-4b1b-11ee-b5b2-12970dda3914.jpg',
            pages_count: 832,
            price: 350,
            url: 'https://dk-spb.ru/books/200943'},
        {id: 7,
            title: 'Анатомия человека в эпонимах. Справочник. Самусев Р.П.',
            author: 'Самусев Р.П.',
            imageURL: 'https://dk-spb.ru/media/books/129166/300_113334_129166_E09B26284D95182FFDAB14A013FEB91D.webp',
            pages_count: 656,
            price: 1618,
            url: 'https://dk-spb.ru/media/books/75525/medium_174727_5168f438-ef35-11ed-999a-c29ed5a0c3b1.jpg'},
        {id: 8,
            title: 'Патоморфологическая диагностика опухолеподобных образований поджелудочной железы.',
            author: 'Россия',
            imageURL: 'https://dk-spb.ru/media/books/77854/medium_216272_9872d048-f871-11ed-9a3c-c29ed5a0c3b1.jpg',
            pages_count: 284,
            price: 3695,
            url: 'https://dk-spb.ru/books/216272'}
    ];


function BookShow(props) {

    const color = props.backgroundColor;

    return props.data.map((book) => (
        <div className="flex-item" style={{backgroundColor: color}}>
            <BookCardMask {...book}/>
        </div>)
    )
}

function NavigationBar({type = 'ThemesList', data = []}) {
    return (
        <>
            {type === 'searchingBar' ? (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/1200px-Closed_Book_Icon.svg.png" width="30" height="30"
                     className="d-inline-block align-top" alt=""/><span></span>
                Дом книги
            </a>
                <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0">Да</button>
                </form>
                </div>
        </nav>

            ) : (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 centeredNav">
                    {pages.map((page) => (
                        <li className="nav-item">
                            <a className="nav-link" id={page.id} href={page.url}>{page.pageName}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
            )}
        </>

    )
}

function BookCardMask(props) {
    return (
        <>
            <img className="BookImage" src={props.imageURL}/>
            <h3 className="bookTitle">{props.title}</h3>
            <div className="descriptionModule">
                <p>{props.description}</p>
                <p>Cтраниц: {props.pages_count}</p>
                <p>Автор: {props.author}</p>
                <h3>{props.price}₽</h3>
            </div>
            <div>
                <a href={props.url}>
                    <button className="btn btn-dark">Подробнее</button>
                </a>
            </div>
        </>
    )
}
function BestSellingBooks() {
    return (
        <div className="best-sellers">
            <h1>Бестселлеры</h1>
            <div className="flex-container">
                <BookShow data={books_bestsellers}/>
            </div>
        </div>
    )
}

function NewBooks() {
    return (
        <div className="new_books">
            <h1>Новинки</h1>
            <div className="flex-container">
                <BookShow data={books_education}/>
            </div>
        </div>
    )
}

function EducationalBooks() {
    return (
        <div className="education-theme">
            <h1>Образование</h1>
            <div className="flex-container-edu">
                <BookShow data={books_education}/>
            </div>
        </div>
    )
}

function Card({children}) {
    return (
        <div className="ApplicationRapper">
            {children}
        </div>
    );
}

function App() {
    return (
        <Card>
            <NavigationBar
            type="searchingBar"
            data={pages}/>

            <NavigationBar/>
            <div className="InformationBlock">
                <BestSellingBooks backgroundColor = 'orange'/>
                <EducationalBooks backgroundColor = 'yellow'/>
                <NewBooks backgroundColor = 'white'/>
            </div>
        </Card>
    )
}
export default App;