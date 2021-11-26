import {useContext} from 'react';
import FruitContext from '../../contexts/FruitContext';

const List = (props) => {
    console.log(props)
    return(
        <ul>
            <ListItem {...props} /> 
            {/* object die we sprijden (...) */}
        </ul>
    )
}

const ListItem = ({value}) => {
    console.log(`listItem`,value)
    //ipv useFruitContext is het useContext omdat useFruitContext niet bestaat in react.
    //Om een react hook te gebruiken moet je deze juist oproepen.
    const fruitElements = useContext(FruitContext)

    return(
        <>
        {fruitElements.map((e, i) => {return <li key={i}>{e[value]}</li>})}
        </>
    )
}

export default List