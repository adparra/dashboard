let runScripts= () => {
    let chart_bars= document.getElementById("chart-bars");
    console.log(chart_bars);
    let icons= document.getElementsByTagName("i");
    console.log(icons);
    let cards= document.getElementsByClassName("card");
    console.log(cards);
} 

let modifyText= () => {
    let listOfP= document.getElementsByTagName("p");
    let elementP= listOfP[3];
    elementP.innerHTML= 'Dinero Actual';

    let listOfH4= document.getElementsByTagName("h4");
    let elementH4= listOfH4[0];
    elementH4.innerHTML= '301K';
}

let updateData= () => {
  let data = [{
    title: 'Usuarios actuales',
    value: '3,200'
  },
  {
    title: 'Nuevos clientes',
    value: '4,215'
  },
  {
    title: 'Ventas',
    value: '$121,520'
  }];
  
  let [ users, clients, sales ] = data;
  
  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;
   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;
  
 let listOfElements = document.getElementsByClassName('text-end pt-1') 
 
 let [ , second, third, fourth ] = listOfElements;
 
 second.innerHTML = message_users;
 third.innerHTML = message_clients;
 fourth.innerHTML = message_sales; 
}

let updatePorcentajes= () => {
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]
    let [money,users,clients,sales]=cambios;
    let {valor_previo: valor_previo_money, valor_actual:valor_actual_money, mensaje_tiempo:mensaje_tiempo_money}=money;
    let {valor_previo: valor_previo_users, valor_actual:valor_actual_users, mensaje_tiempo:mensaje_tiempo_users}=users;
    let {valor_previo: valor_previo_clients, valor_actual:valor_actual_clients, mensaje_tiempo:mensaje_tiempo_clients}=clients;
    let {valor_previo: valor_previo_sales, valor_actual:valor_actual_sales, mensaje_tiempo:mensaje_tiempo_sales}=sales;

    let porcentaje_de_cambio = (valor_actual,valor_previo)=> ((valor_actual - valor_previo)*100/valor_previo).toFixed(2);
    let clase_cambio= (porcentaje) => {
        let clase= porcentaje>0 ? 'text-success' : 'text-danger';
        return clase;
    }

    let message_money= 
    `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual_money,valor_previo_money))} 
    font-weight-bolder"> ${porcentaje_de_cambio(valor_actual_money,valor_previo_money)} </span> 
    ${mensaje_tiempo_money} </p>`;
    let message_users=
    `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual_users,valor_previo_users))} 
    font-weight-bolder"> ${porcentaje_de_cambio(valor_actual_users,valor_previo_users)} </span> 
    ${mensaje_tiempo_users} </p>`;
    let message_clients=
    `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual_clients,valor_previo_clients))} 
    font-weight-bolder"> ${porcentaje_de_cambio(valor_actual_clients,valor_previo_clients)} </span> 
    ${mensaje_tiempo_clients} </p>`;
    let message_sales=
    `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual_sales,valor_previo_sales))} 
    font-weight-bolder"> ${porcentaje_de_cambio(valor_actual_sales,valor_previo_sales)} </span> 
    ${mensaje_tiempo_sales} </p>`;

    let listOfElements= document.getElementsByClassName('card-footer p-3');
    let [first,second,third,fourth]= listOfElements;

    first.innerHTML= message_money;
    second.innerHTML= message_users;
    third.innerHTML= message_clients;
    fourth.innerHTML= message_sales; 

}
runScripts();
modifyText();
updateData();
updatePorcentajes();