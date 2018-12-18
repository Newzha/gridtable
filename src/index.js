import React from 'react';
import ReactDOM from 'react-dom';

import EditableTable from './components/table-antd/test'
// import FilterTable from './components/filter-table/filter-table'
// import TableEdit from './components/table-antd/table-antd'
// import VerticalGlassData from './components/vertical-glass-data/vertical-glass-data'
// import GridTableData from './components/grid-table-data/grid-table-data'
import TableGroup from './components/table-group/table-group'
// import ResizeTitle from './components/resizeable-title/resizeable-title'
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TableGroup />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();
