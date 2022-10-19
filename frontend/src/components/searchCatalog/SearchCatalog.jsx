import React from 'react';
import './searchCatalog.scss';
import ClockNights from '../../images/clock-nights.svg';
import City from '../../images/city.svg';
import People from '../../images/people.svg';
import Price from '../../images/price.svg';
import Accordion from 'react-bootstrap/Accordion';
import ReactSlider from 'react-slider';
import { useState } from 'react';

const SearchCatalog = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);

  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>
          <img className='accordionImg' src={City} alt='City' /> Miestas
        </Accordion.Header>
        <Accordion.Body>
          <form action='#'>
            <div className='inputs'>
              <input type='checkbox' name='city' id='vilnius' />
              <label htmlFor='Vilnius'>Vilnius</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='city' id='Kaunas' />
              <label htmlFor='Kaunas'>Kaunas</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='city' id='Druskininkai' />
              <label htmlFor='Druskininkai'>Druskininkai</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='city' id='Birštonas' />
              <label htmlFor='Birštonas'>Birštonas</label>
            </div>
          </form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
          <img className='accordionImg' src={ClockNights} alt='Clock' />{' '}
          Nakvynės trukmė
        </Accordion.Header>
        <Accordion.Body>
          <form action='#'>
            <div className='inputs'>
              <input type='checkbox' name='nights' id='nights' />
              <label htmlFor='nights'>1 naktis</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='nights' id='nights' />
              <label htmlFor='nights'>2 naktys</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='nights' id='nights' />
              <label htmlFor='nights'>3+ naktys</label>
            </div>
          </form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>
          <img className='accordionImg' src={People} alt='People' />
          Asmenų skaičius
        </Accordion.Header>
        <Accordion.Body>
          <form action='#'>
            <div className='inputs'>
              <input type='checkbox' name='persons' id='persons' />
              <label htmlFor='persons'>1 asm.</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='persons' id='persons' />
              <label htmlFor='persons'>2 asm.</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='persons' id='persons' />
              <label htmlFor='persons'>3 asm.</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='persons' id='persons' />
              <label htmlFor='persons'>4 asm.</label>
            </div>
            <div className='inputs'>
              <input type='checkbox' name='persons' id='persons' />
              <label htmlFor='persons'>5+ asm.</label>
            </div>
          </form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>
          <img className='accordionImg' src={Price} alt='Price' />
          Kaina
        </Accordion.Header>
        <Accordion.Body>
          <div className='slider-container'>
            <ReactSlider
              defaultValue={[min, max]}
              className='slider'
              trackClassName='tracker'
              min={0}
              max={500}
              minDistance={1}
              step={1}
              widthTracks={true}
              pearling={true}
              renderThumb={(props) => {
                return <div {...props} className='thumb'></div>;
              }}
              renderTrack={(props) => {
                return <div {...props} className='track'></div>;
              }}
              onChange={([min, max]) => {
                setMin(min);
                setMax(max);
              }}
            />
            <div className='values-wrapper'>
              <div className='values'>
                <span>{min}</span>
              </div>
              <div className='values'>
                <span>{max}</span>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SearchCatalog;
