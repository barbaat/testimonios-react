import './stylesheets/App.css';
import Testimonio from './components/Testimonio';

export default function App() {
  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1>Testimonios</h1>
        <br/>
      </div>
      
      <Testimonio 
        name='Emma Bostian'
        country='Suecia'
        image='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b8/b8ff80724e18816dcc7ae7ed27d0f186df621e20_full.jpg'
        job='Ing Software'
        testimonio='AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAA AAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        />

        <Testimonio 
                name='Carlos Bostian'
                country='España'
                image='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b9/b90e37cbefabbbde25a4047ed3a24ad62747639a_full.jpg'
                job='Ing Informático'
                testimonio='AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAA AAAAAAA AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                />
      
    </div>
  );
}

