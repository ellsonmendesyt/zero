import {Link} from 'react-router-dom';


const Button = ({children,type,onClick,buttonStyle,buttonSize}) => {
    
   const STYLES=['btn-primary','btn-outline-info'];
    //se o 

    const SIZES=['','btn-block','btn-md'];
    //se aplicou algum estilo deixa essa estilo se nao pega o primeiro da lista
    const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return ( 

        <Link to='/logar'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick}  type={type}>{children}</button>
        </Link>
     );
}
 
export default Button;