import reactLogo from './assets/react.svg';

var navigation = [{'title':"Nosotros",'href':"/About",'ComponentName':false},
    {'title':"Catalogo",'href':"/Catalogo",'ComponentName':false},
    {'title':"Consumo API",'href':"/Team",'ComponentName':false},
    {'title':"Recursos",'href':"/Contact",'ComponentName':false}];
function Nav (){
    return (

      <nav class="text-2xl lg:text-xl bg-black py-10 flex justify-center space-x-30 items-center text-white">
        <a href="/" class="hover:text-amber-400 hidden lg:inline">Inicio</a>
        {navigation.map(e => <a key={e.title} href={e.href}  className="hover:text-amber-400">{e.title}</a>)}
    </nav>


    );
}
export default Nav;