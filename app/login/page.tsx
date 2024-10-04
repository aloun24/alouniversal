
'use client'
// import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

interface LocationType {
  city: string;
  region: string;
  country: string;
}

const Login: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [location, setLocation] = useState<LocationType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [brand, setBrand] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setIpAddress(data.ip);
        fetch(`https://ipinfo.io/${data.ip}/json?token=0df5ae6f8a24e9`)
          .then(response => response.json())
          .then(info => setLocation(info))
          .catch(err => setError('Error fetching location information'));
      })
      .catch(err => setError('Error fetching IP address'));
  }, []);


  useEffect(() => {
    const userAgent = navigator.userAgent;
    let brandName = 'Unknown';

    if (/android/i.test(userAgent)) {
      brandName = 'Android';
    }else if (/iPhone\s?SE/.test(userAgent)) {
        brandName = 'iPhone se';
      } else if  (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      brandName = 'iOS';
    } else if (/windows phone/i.test(userAgent)) {
      brandName = 'Windows Phone';
    } else if (/windows/i.test(userAgent)) {
      brandName = 'Windows';
    } else if (/linux/i.test(userAgent)) {
      brandName = 'Linux';
     } else if (/Xiaomi\s?11\s?T\s?Pro/.test(userAgent)) {
      brandName = 'Xiaomi 11T Pro';
    } else if (/Xiaomi\s?11/.test(userAgent)) {
      brandName = 'Xiaomi 11';
    }

    setBrand(brandName);
  }, []);


  const Login = async  (event:any) =>{
   event.preventDefault()
   
   const dataLogin ={
    "username" : event.target.username.value,
    "password"  : event.target.password.value,
    "deviceName" : brand,
    "ip" : ipAddress,
    "location" : location,

   }
  //  const aloun = await JSON.stringify(dataLogin)
  //  console.log(aloun)


   try {
    const response = await fetch('https://alouniversal.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataLogin),
      
    });
    // console.log(response)

    if (!response.ok) {
      throw new Error('Login failed, please check your credentials.');
    }

    
    const result = await response.json();
    localStorage.setItem('ktk', result.token);
    console.log(result.token);

   
      
  


     // Send the token in the headers of subsequent requests
    const token = localStorage.getItem('ktk');
    if (token) {
      
      const protectedResponse = await fetch('https://alouniversal.com/api/middleware', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },

      });
      // const protectedResult = await protectedResponse.json();
      // console.log(protectedResult)
      if(protectedResponse){
        router.push('/');
        console.log('Login success');
      }
    }
    
  } catch (err) {
    console.error(err);
    // Handle login errors more gracefully for the user
  }
};

  

  return (
    <div>
      <h1>IP Address:</h1>
      <p>{ipAddress}</p>
      <h1>Your Location:</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>{location ? 
            `${location.city}, ${location.region}, ${location.country}` 
            : 'Loading...'}</p>
      )}




<div>
      <h1>Device Brand:</h1>
      <p>{brand}</p>
    </div>
    <div>
      <form onSubmit={Login}>
       <div>
       <input type="text"
        id="usename"
        name="username"
        placeholder='username'
        />
       </div>
        <div>
        <input type="password"
        id="password"
        name="password"
        placeholder='password'
        />
        </div>
       <div>
       <button type='submit'>
        Login
      </button>
       </div>
      </form>
      
    </div>
    </div>
  );
};

export default Login;
// {"city":"Vientiane","region":"Vientiane Prefecture","country":"LA","loc":"17.9667,102.6000","org":"AS10226 ETL Company Limited","timezone":"Asia/Vientiane"}