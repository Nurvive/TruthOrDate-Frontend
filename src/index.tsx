import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';

import { AuthForm } from '~/AuthForm';

render(
  () => (
    <Router>
      <Route path="/" component={AuthForm} />
    </Router>
  ),
  document.getElementById('app')!,
);
