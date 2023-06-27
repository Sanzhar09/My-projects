import "./style.css"

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Sanzhar</em></strong><br/>
                    a frontend developer
                </h1>
                <a href="https://hh.kz/resume/58619812ff09a316ba0039ed1f7747384b5750?disableBrowserCache=true&hhtmFrom=resume_list"
                 className="btn">Link to CV</a>
            </div>
        </header>
     );
}
 
export default Header;