(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();let y;const v=new Uint8Array(16);function C(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(v)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function L(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:S};function E(e,t,i){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const d=e.random||(e.rng||C)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return L(d)}class P{constructor(t){this.id=E(),this.description=t,this.done=!1,this.createdAt=new Date}}const a={All:"All",Completed:"Completed",Pending:"Pending"},l={todos:[],filter:a.All},A=()=>{w(),console.log("initStore 🌮")},w=()=>{if(!localStorage.getItem("state"))return;let{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(l))},U=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},D=e=>{if(!e)throw new Error("Description is required");l.todos.push(new P(e)),f()},I=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},k=e=>{l.todos=l.todos.filter(t=>t.id!==e),f()},q=()=>{l.todos=l.todos.filter(e=>!e.done),f()},x=(e=a.All)=>{l.filter=e,f()},F=()=>l.filter,c={deleteCompleted:q,deleteTodo:k,getCurrentFilter:F,getTodos:U,initStore:A,loadStore:w,setFilter:x,toggleTodo:I,addTodo:D},O=`<!DOCTYPE html>\r
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
</html>`,M=e=>{if(!e)throw new Error("Todo object is required");const{done:t,description:i,id:d}=e,o=`
            <div class="view">
                <input class="toggle" type="checkbox" ${t?"checked":""} >
                <label>${i}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">

    `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),t&&n.classList.add("completed"),n};let g;const N=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(` Element: ${e} not found `);g.innerHTML="",t.forEach(i=>{g.append(M(i))})};let b;const H=e=>{if(b||(b=document.querySelector(e)),!e)throw new Error(`Element ${e} not founmd`);b.innerHTML=c.getTodos(a.Pending).length},m={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{const s=c.getTodos(c.getCurrentFilter());N(m.TodoList,s),i()},i=()=>{H(m.PendingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=O,document.querySelector(e).append(s),t()})();const d=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompleted),u=document.querySelectorAll(m.TodoFilters);d.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(c.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const p=s.target.closest("[data-id]").getAttribute("data-id");c.toggleTodo(p),t()}),o.addEventListener("click",s=>{const h=s.target.className==="destroy",p=s.target.closest("[data-id]");!p||!h||(c.deleteTodo(p.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{c.deleteCompleted(),t()}),u.forEach(s=>{s.addEventListener("click",h=>{switch(u.forEach(p=>p.classList.remove("selected")),h.target.classList.add("selected"),h.target.text){case"Todos":c.setFilter(a.All);break;case"Pendientes":c.setFilter(a.Pending);break;case"Completados":c.setFilter(a.Completed)}t()})})};c.initStore();V("#app");
