/*export const getData =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                api: "https://www.fruityvice.com/api/fruit/all"
            });
        }, 500);
    }); 
};*/

export const getData = async () => fetch("https://www.fruityvice.com/api/fruit/all")
  .then(response => response.json())