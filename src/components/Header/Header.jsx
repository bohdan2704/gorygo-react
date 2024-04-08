import "./Header.css"
import {useNavigate} from "react-router-dom";
import {mainCategories} from "../../util/data.js";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <nav>
                <a onClick={() => navigate('/')}>Gorygo</a>

                {mainCategories.map((obj, i) =>
                    <a key={i} onClick={() => navigate('/categories?' + obj.toLowerCase())}>{obj}</a>
                )}
                {/*<a onClick={() => navigate('/cart')}>Cart</a>*/}
            </nav>
        </header>
    )
}