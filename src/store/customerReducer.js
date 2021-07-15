const defaultState = {
    customers:[
        {id:1,title:"Test1",available:false},
        {id:2,title:"Test2",available:false},
        {id:3,title:"Test3",available:false},
    ]
}


const ADD_CUSTOMER = 'ADD_CUSTOMER'

export const customerReducer = (state = defaultState, action) =>{
    switch(action.type){
        case ADD_CUSTOMER:{
            return {...state,customers:[...state.customers,action.payload]}
        }
        case 'REMOVE_CUSTOMER':{
            return {...state, customers:state.customers.filter(elem=>elem.id !== action.payload)}
        }
        default: return state
    }
}

export const addCustomerAction = (payload) => ({type:'ADD_CUSTOMER',payload})