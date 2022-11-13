import React, { useEffect, useState } from 'react';

const UseEffectAPI = () => {

const [users, setUsers] = useState([])

 const getUsers = async () => {
   const response = await fetch("https://api.github.com/users");
  //  console.log(response);
  //  const data = await response.json();
  //  console.log(data);
      setUsers(await response.json());
 }

  useEffect(()=> {
    getUsers();
  }, [])
  return (
    <>
      <h2>List of github users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {

              users.map((curElem) => {
                console.log(curElem)
                return (
                  <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image"> <img className='rounded' src={curElem.avatar_url} width="155" alt="" /></div>
                      <div className="ml-3 w-100">
                        <h4 className='mb-0 mt-0 textLeft'>{curElem.login}</h4> <span className='textLeft'>web developer</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column"> <span className='articles'>Articles</span> <span className='number1'>{curElem.id}</span></div>
                          <div className="d-flex flex-column"> <span className='followers'>Followers</span> <span className='number2'>038</span></div>
                          <div className="d-flex flex-column"> <span className='rating'>rating</span> <span className='number3'>398</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })

          }

       
{/* 
         <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image"> <img className='rounded' src="" width="155" alt="" /></div>
                <div className="ml-3 w-100">
                  <h4 className='mb-0 mt-0 textLeft'>Bilal</h4> <span className='textLeft'>web developer</span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column"> <span className='articles'>Articles</span> <span className='number1'>38</span></div>
                    <div className="d-flex flex-column"> <span className='followers'>Followers</span> <span className='number2'>038</span></div>
                    <div className="d-flex flex-column"> <span className='rating'>rating</span> <span className='number3'>398</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        
          

        </div>
      </div>
    </>
  )
}

export default UseEffectAPI;
