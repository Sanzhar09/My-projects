import Header from "../components/header/Header";
const Home = () => {
    return (  
    <div>
            <Header/>
            <main className="section">
                <div className="container">

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, TypeScript, ReactJS,Vue, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                            </li>
                        </ul>

                </div>
            </main>
    </div> 
    );
}
 
export default Home;