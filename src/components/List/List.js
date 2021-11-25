import {useContext} from 'react';
import FruitContext from '../../contexts/FruitContext';

const List = () => {
    return(
        <ul>
            <ListItem />
        </ul>
    )
}

const ListItem = () => {
    //ipv useFruitContext is het useContext omdat useFruitContext niet bestaat in react.
    //Om een react hook te gebruiken moet je deze juist oproepen.
    const fruitElements = useContext(FruitContext)

    return(
        <>
        {fruitElements.map((e, i) => {return <li key={i}>{e?.name}</li>})}
        </>
    )
}

export default List