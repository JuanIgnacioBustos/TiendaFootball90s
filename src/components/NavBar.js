import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Camisetas90s Shop</h1>
            <div>
                <button>Camisetas</button>
                <button>Shores</button>
                <button>Medias</button>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar