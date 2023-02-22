(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function d(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=d(n);fetch(n.href,o)}})();let g;const b=new Uint8Array(16);function T(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(b)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function v(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const C=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:C};function S(e,t,d){if(y.randomUUID&&!t&&!e)return y.randomUUID();e=e||{};const s=e.random||(e.rng||T)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){d=d||0;for(let n=0;n<16;++n)t[d+n]=s[n];return t}return v(s)}class u{constructor(t){this.id=S(),this.description=t,this.done=!1,this.createdAt=new Date}}const a={All:"All",Completed:"Completed",Pending:"Pending"},l={todos:[new u("Piedra del alma"),new u("Piedra del infinito"),new u("Piedra del tiempo"),new u("Piedra del poder"),new u("Piedra del realidad")],filter:a.All},L=()=>{w(),console.log("initStore 🌮")},w=()=>{if(!localStorage.getItem("state"))return;let{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},m=()=>{localStorage.setItem("state",JSON.stringify(l))},E=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},P=e=>{if(!e)throw new Error("Description is required");l.todos.push(new u(e)),m()},A=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),m()},I=e=>{l.todos=l.todos.filter(t=>t.id!==e),m()},U=()=>{l.todos=l.todos.filter(e=>!e.done),m()},D=(e=a.All)=>{l.filter=e,m()},x=()=>l.filter,i={deleteCompleted:U,deleteTodo:I,getCurrentFilter:x,getTodos:E,initStore:L,loadStore:w,setFilter:D,toggleTodo:A,addTodo:P},O=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
</head>\r
<body>\r
    <section class="todoapp">\r
        <header class="header">\r
            <h1>Tareas</h1>\r
            <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
        </header>\r
        \r
        <!-- This section should be hidden by default and shown when there are todos -->\r
        <section class="main">\r
            <input id="toggle-all" class="toggle-all" type="checkbox">\r
            <label for="toggle-all">Mark all as complete</label>\r
            <ul class="todo-list">\r
                <!-- These are here just to show the structure of the list items -->\r
                <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
                <!-- <li class="completed" data-id="abc">\r
                    <div class="view">\r
                        <input class="toggle" type="checkbox" checked>\r
                        <label>Probar JavaScript</label>\r
                        <button class="destroy"></button>\r
                    </div>\r
                    <input class="edit" value="Create a TodoMVC template">\r
                </li> -->\r
                <!-- <li>\r
                    <div class="view">\r
                        <input class="toggle" type="checkbox">\r
                        <label>Comprar un unicornio</label>\r
                        <button class="destroy"></button>\r
                    </div>\r
                    <input class="edit" value="Rule the web">\r
                </li> -->\r
            </ul>\r
        </section>\r
    \r
        <!-- This footer should hidden by default and shown when there are todos -->\r
        <footer class="footer">\r
            <!-- This should be "0 items left" by default -->\r
            <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
            <!-- Remove this if you don't implement routing -->\r
            <ul class="filters">\r
                <li>\r
                    <a class="selected filtro" class="selected" href="#/">Todos</a>\r
                </li>\r
                <li>\r
                    <a class="filtro" href="#/active">Pendientes</a>\r
                </li>\r
                <li>\r
                    <a class="filtro" href="#/completed">Completados</a>\r
                </li>\r
            </ul>\r
            <!-- Hidden if no completed items are left ↓ -->\r
            <button class="clear-completed">Borrar completados</button>\r
        </footer>\r
    </section>\r
    \r
    \r
    <footer class="info">\r
        <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
        <!-- Change this out with your name and url ↓ -->\r
        <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
        <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
    </footer>\r
</body>\r
</html>`,q=e=>{if(!e)throw new Error("Todo object is required");const{done:t,description:d,id:s}=e,n=`
            <div class="view">
                <input class="toggle" type="checkbox" ${t?"checked":""} >
                <label>${d}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">

    `,o=document.createElement("li");return o.innerHTML=n,o.setAttribute("data-id",s),t&&o.classList.add("completed"),o};let p;const k=(e,t=[])=>{if(p||(p=document.querySelector(e)),!p)throw new Error(` Element: ${e} not found `);p.innerHTML="",t.forEach(d=>{p.append(q(d))})},f={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input"},M=e=>{const t=()=>{const o=i.getTodos(i.getCurrentFilter());k(f.TodoList,o)};(()=>{const o=document.createElement("div");o.innerHTML=O,document.querySelector(e).append(o),t()})();const d=document.querySelector(f.NewTodoInput),s=document.querySelector(f.TodoList),n=document.querySelector(f.ClearCompleted);d.addEventListener("keyup",o=>{o.keyCode===13&&o.target.value.trim().length!==0&&(i.addTodo(o.target.value),t(),o.target.value="")}),s.addEventListener("click",o=>{const h=o.target.closest("[data-id]").getAttribute("data-id");i.toggleTodo(h),t()}),s.addEventListener("click",o=>{const c=o.target.className==="destroy",h=o.target.closest("[data-id]");!h||!c||(i.deleteTodo(h.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{i.deleteCompleted(),t()})};i.initStore();M("#app");
