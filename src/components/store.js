import { BehaviorSubject } from 'rxjs';

export const cart$ = new BehaviorSubject(JSON.parse(window.localStorage.getItem("cart") || "[]"));

export function updateCart(newCart) {
  
  let arr = [...newCart]
  let result = arr.reduce(function(acc, val){
      let o = acc.filter(function(obj){
          return obj.value.product === val.value.product;
      }).pop() || {value: {product:val.value.product, price: val.value.price, aumont: 0}};
      
      o.value.aumont += Number(val.value.aumont);
      acc.push(o);
      return acc;
  },[]);
  
  newCart = [...new Set(result)];

  if(!newCart){
    window.localStorage.removeItem("cart");
  }
  else {
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  }
  cart$.next(newCart)
}