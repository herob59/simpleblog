import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">React & Node</span>
                <span className="headerTitlesLg">Blog</span>
        </div>
            <img
                className="headerImg"
                src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop&__hstc=158051173.353c80b5e2d1483b259aca731b8170d6.1631805846163.1631805846163.1631805846163.1&__hssc=158051173.3.1631805846164&__hsfp=751054564"
            alt=""
            />
        </div>
    )
}

export default Header
