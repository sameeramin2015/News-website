import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Layout from './components/Layout';
import EntertainmentNewList from "./components/EntertainmentNewList";
import TravelNewsList from "./components/TravelNewsList";
import SportNewsList from "./components/SportNewsList";
import WeatherNewsList from "./components/WeatherNewsList";
import HealthNewsList from './components/HealthNewsList';
import ScienceNewsList from './components/ScienceNewsList';
import TechnologyNewsList from './components/TechnologyNewsList';
import BusinessNewsList from './components/BusinessNewsList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/travelnewslist" element={<TravelNewsList/>}/>
          <Route path="/sportnewslist" element={<SportNewsList />} />
          <Route path="/weathernewslist" element={<WeatherNewsList/>}/>
          <Route path="/healthnewslist" element={<HealthNewsList/>}/>
          <Route path="/entertainmentnewslist" element={<EntertainmentNewList />}/>
          <Route path="/sciencenewslist" element={<ScienceNewsList />}/>
          <Route path="/TechnologyNewsList" element={<TechnologyNewsList />}/>
          <Route path="/BusinessNewsList" element={<BusinessNewsList />}/>
        </Routes>
     </BrowserRouter>,
    </Layout>
  </React.StrictMode>
);

