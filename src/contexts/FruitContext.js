import{createContext, useState, useEffect} from 'react'

const FruitContext = createContext([])

const getData = fetch('https://www.fruityvice.com/api/fruit/all')

// fruitprovider zorgt ervoor dat html elementen kinderen data kunnen ontvangen van de parend fruitprovider
export const FruitProvider = ({ children}) => {

    const [json, setJson] = useState([])

    /* useEffect Hook, van de promise halen we de data op en plaatsen we dit in dee json van de useState hook
        useEffect heeft geen dependencies dus de array list aan het einde is leeg zodat deze niet constant loopt.
    */
    useEffect(() => {
        getData()
            .then(
                (fruitData) => {
                    console.log(`fruitContext useEff`, fruitData)
                    setJson(fruitData)
                }
            ) 
    }, []);

    return (
        <FruitContext.Provider value={json}>{children}</FruitContext.Provider>
    )
}

export default FruitContext