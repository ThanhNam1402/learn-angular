export interface IProduct {
    id : number
    code : string
    name : string
    price : number
    sale_price : number
    star : number
    img : string
}

// export type listProduct = Pick<IProduct, 'id' | 'name'>[]