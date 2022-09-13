import React from 'react';
import {
  // BrowserRouter as Router,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import history from '../utils/history';

import Nav from './shared/Nav';
import List from './channels/List';
import Create from './channels/Create';
import Show from './channels/Show';
import Edit from './channels/Edit';
import Delete from './channels/Delete';

const App = () => {
  return (
    <>
      <HistoryRouter history={history}>
        <Nav />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='channels' element={<List />} />
          <Route path='channels/new' element={<Create />} />
          <Route path='channels/:id' element={<Show />} />
          <Route path='channels/:id/edit' element={<Edit />} />
          <Route path='channels/:id/delete' element={<Delete />} />
        </Routes>
      </HistoryRouter>
    </>
  );
};

export default App;
