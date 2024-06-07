import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';

import { Auth } from '~/pages/Auth';
import 'modern-normalize';
import './index.css';
import { Room } from '~/pages/Room';

render(
  () => (
    <Router>
      <Route path="/" component={Auth} />
      <Route path="/room/:id" component={Room} />
    </Router>
  ),
  document.getElementById('app')!,
);
