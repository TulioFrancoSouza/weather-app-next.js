import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className='relative flex flex-col justify-between w-full h-[70vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex m-width[500] justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='icon from openweathermap showing the weather of the city choosen'
            width='100'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* Bottom */}
    
    <div className='relative flex justify-between w-full'>
      
      <div className='bg-black/50 relative p-8 rounded-md'>
          <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
          <div className='flex justify-between text-center'>
              <div>
                  <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                  <p className='text-xl'>Feels Like</p>
              </div>
              <div>
                  <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                  <p className='text-xl'>Humidity</p>
              </div>
              <div>
                  <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
                  <p className='text-xl'>Winds</p>
              </div>
          </div>
      </div>

      <div className='bg-black/50 relative p-8 rounded-md'>
          <p className='text-2xl text-center pb-6'>Wind</p>
          <div className='flex justify-between text-center'>
              <div>
                  <p className='font-bold text-lg text-center m-1'>{data.wind.deg}&#176;</p>
                  <p className='text-xl'>Direction</p>
              </div>
              <div>
                  <p className='font-bold text-lg text-center m-1'>{data.wind.speed} MPH</p>
                  <p className='text-xl'>Speed</p>
              </div>
              <div>
                  <p className='font-bold text-lg text-center m-1'>{data.wind.gust} MPH</p>
                  <p className='text-xl'>Gust</p>
              </div>
          </div>
      </div>

      <div className='bg-black/50 relative p-8 rounded-md'>
          <p className='text-2xl text-center pb-6'>Other informations</p>
          <div className='flex justify-between text-center'>
              <div>
                  <p className='font-bold text-lg text-center m-1'>{data.sys.sunrise}</p>
                  <p className='text-xl'>Sunrise</p>
              </div>
              <div>
                  <p className='font-bold text-lg text-center m-1'>{data.sys.sunset}</p>
                  <p className='text-xl'>Sunset</p>
              </div>
          </div>
      </div>
      
    </div>

    </div>
  );
};

export default Weather;
