import "../styles/Header.scss"


function Header({method}) {
    return (
                <div class="header">
                    <a href="/" class="logo">
                        <img src="/images/logo.jpg" alt="Italian Trulli " class = 'logo'></img>
                        <h1 class="logo-txt">Runkaline</h1>
                    </a>
            </div>
    );
}

export default Header