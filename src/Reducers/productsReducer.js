import products from '../data.json';


const INITIAL_STATE = [];
for (let id in products) {
    let item = {};
    for (let key in products[id]){
        item[key] = products[id][key]
        item["id"] = id;
    }
    INITIAL_STATE.push(item)
}
console.log(INITIAL_STATE)

const productReducer = (state=INITIAL_STATE, action) => {
    return state
}

export default productReducer;