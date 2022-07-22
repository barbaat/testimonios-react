import './stylesheets/App.css';
import Testimonio from './components/Testimonio';

const testimonioDefault = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'

export default function App() {
  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1>Testimonios</h1>
      </div>
      
      <Testimonio
        name='Emma Bostian'
        country='Suecia'
        image='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b8/b8ff80724e18816dcc7ae7ed27d0f186df621e20_full.jpg'
        job='Ing Software'
        testimonio={testimonioDefault}
      />

      <Testimonio
        name='Carlos Bostian'
        country='España'
        image='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b9/b90e37cbefabbbde25a4047ed3a24ad62747639a_full.jpg'
        job='Ing Informático'
        testimonio={testimonioDefault}
      />


      <Testimonio
        name='Federico Polen'
        country='Sevilla'
        image='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/02/023c320a5642415eee4bc62b079fe599f0f6f879_full.jpg'
        job='RRHH'
        testimonio={testimonioDefault}
      />

    </div>
  );
}

