import Stack from 'react-bootstrap/Stack';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import useTime from './Time'; // time function
import { WiDaySunny } from 'react-icons/wi'; // ☀️ icon
import useWeatherData from './useWeatherData'; // updated hook
import Mapbox from './Mapbox';

// Weather cards
export function Cards() {
  const time = useTime();
  const weather = useWeatherData(); // returns temperature, wind, etc.

  return (
    <Stack direction="horizontal" gap={3} className="allcards">

      <div className="my-card1">

        Current weather
        <div className="time-text">{time}</div>

        <div className="weather-header">
          <WiDaySunny className="sun-icon" />
          <div className="temperature-text">{weather.temperature || weather.error || 'Loading...'}</div>
        </div>

        <div className="my-card1-tab">
          <div>Wind<br /> {weather.wind}</div>
          <div>Humidity<br /> {weather.humidity}</div>
          <div>Pressure<br /> {weather.pressure}</div>
          <div>Visibility<br /> {weather.visibility}</div>
          <div>Dew Point<br /> {weather.dewPoint}</div>
        </div>

      </div>

      <div className="my-card2">
        <Mapbox lat={28.6667} lon={77.2167} />
      </div>
      <div className="my-card3">Third item</div>
    </Stack>
  );
}

// Content Tabs
export function Contenttabs() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [clickedIndex, setClickedIndex] = useState(0);

  const subTabs = {
    Overview: ['Summary', 'Details', 'Highlights', 'Info', 'Data', 'Stats'],
    Precipitation: ['Rain', 'Snow', 'Forecast', 'Trend', 'Rate', 'Chances'],
    Wind: ['Speed', 'Direction', 'Gusts', 'Current', 'Past', 'Next'],
    'Air quality': ['PM2.5', 'PM10', 'AQI', 'CO2', 'Ozone'],
    Humidity: ['Dew Point', 'Relative', 'Saturation', 'Fog', 'Mist', 'Dry'],
    'Cloud cover': ['Low', 'Mid', 'High', 'Dense', 'Clear', 'Overcast'],
    '...': ['dropdown-1', 'dropdown-2']
  };

  return (
    <div className="tab-container">
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => {
          setActiveTab(k);
          setClickedIndex(0);
        }}
        className="mb-3"
        id="fill-tab-example"
      >
        {Object.keys(subTabs).map((key) => (
          <Tab
            eventKey={key}
            title={key}
            key={key}
            tabClassName="main-subtab"  // ← Adds class to each tab
          >
            <div className="sub-tab-container">
              {subTabs[key].map((label, index) => (
                <Button
                  key={index}
                  variant="outline-primary"
                  className={`sub-tab-button ${clickedIndex === index ? 'active-tab' : ''}`}
                  onClick={() => setClickedIndex(index)}
                >
                  {label}
                </Button>
              ))}
              <Button
                className={`extra-button ${clickedIndex === 0
                  ? 'left-rounded'
                  : clickedIndex === subTabs[key].length - 1
                    ? 'right-rounded'
                    : ''
                  }`}
                variant="secondary"
              >
                {subTabs[key][clickedIndex]}
              </Button>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
