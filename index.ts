import { html, render } from 'lit-html'
import './style.css';

const layouts = {
  bordered: {
    rows: `auto 1fr auto`,
    cols: `auto 1fr auto`,
    areas: {
      top: 'navbar',
      right: 'accordion',
      bottom: 'toolbar',
      left: 'sidebar',
      main: 'centered'
    }
  },
  split: {
    rows: `auto 1fr`,
    cols: `1fr 1fr`,
    areas: {
      top: 'toolbar',
      right: 'hidden',
      bottom: 'hidden',
      left: 'sidebar',
      main: 'fluid'
    }
  },
}
const store = {
  id: 'stores:root',
  state: {
    appName: 'MyApp',
    user: {
      name: 'Michael',
      avatar: 'sample-avatar.svg',
      loggedIn: true
    },
    models: [],
    views: [],
    routes: [{
        label: 'shell',
        path: '/',
        layout: `layouts.bordered`,
        components: []
      }, {
        label: 'styles',
        path: '/theme',
        layout: `layouts.split`
      }, {
        label: 'data',
        path: '/api',
        layout: `layouts.split`
      },
    ],
    styles: {
      colors: {
        primary: 'seagreen'
      },
      layout: {},
      spacing: {},
    },
    templates: {},
    api: {},
    db: {}
  },
  actions: {},
  mutations: {},
};

const AppShell = (data) =>(
  html`
  <header class="navbar top">
      <h1 class="title">${data.state.appName}</h1>
      <div>
        ${data.state.user.loggedIn
          ? html`
              <span>Welcome, ${data.state.user.name}!</span>
              <button class="button" onclick="${data.state.user.loggedIn = false}">Log Out</button>
            `
          : html`
              <label for=username" >Name</label>
              <input id="username" .value=${data.state.user.name} type="text" class="nav-input" placeholder="name"></input>
              <button class="button">Log In</button>
            `
        }
      </div>
      <nav>${data.state.routes.map(route => html`
        <a href=${route.path}>${route.label}</a>
      `)}
      </nav>
  </header>

  <aside class="left">
    <header>left area</header>
    <nav class="vertical">
      <button class="button">Link</button>
      <button class="button">Link</button>
      <button class="button">Link</button>
    </nav>      
    </footer>footer</footer>
  </aside>

  <section class="main">
    <nav class="breadcrumbs">
      <a class=breadcrumb">home /</a>
      <a class=breadcrumb">page 1 /</a>
    </nav>
    <section class="content">
      <h1>Page Title</h1>
      <h2>Page Subtitle</h2>
      <p>Some Content</p>
    </section>
  </section>

  <aside class="right">
    <header>right content</header>
    <nav class="buttons vertical">
      <button class="button">Tool 1</button>
      <button class="button">Tool 1</button>
      <button class="button">Tool 1</button>
      <button class="button">Tool 1</button>
    </nav>
    </footer>footer</footer>
  </aside>

  <footer class="bottom">
    <div class="buttons">
      <button class="button">Tool 1</button>
      <button class="button">Tool 1</button>
      <button class="button">Tool 1</button>
      <button class="button">Tool 1</button>
    </div>
  </footer>
`);

render(AppShell(store), document.getElementById('app'));

