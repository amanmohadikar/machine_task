import {NavLink} from "react-router-dom"
function Headers() {

    const navigation = [{ path: "/", name: "List Book" },
    { path: "/add", name: "Add Book" }]

    return (
        <header>
            <h1>Book management</h1>
            <nav>
                {navigation.map(nav => {
                    <NavLink key={nav.name}
                    to={nav.path}
                    >

                        {nav.name}
                    </NavLink>
                })}
            </nav>
        </header>
    )
}

export default Headers