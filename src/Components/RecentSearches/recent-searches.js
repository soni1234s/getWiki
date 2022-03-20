import React from 'react'
import './recent-searches.css'
import axios from 'axios';

export const Research  = (props) => {
  
  let {setData, setSearch, setSearchInfo} = props;

  const getResults = async (res) => {
    //e.preventDefault();
    if (res === "") {
      return;
    }

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${res}`;
    const resp = await axios.get(endpoint);

    if (!resp.data.query.searchinfo.totalhits) {
      setSearch("");
      return;
    }

    console.log(resp)

    setSearch(res)
    setData(resp.data.query.search);
    setSearchInfo(resp.data.query.searchinfo);
  
  };

  let recentSearches = JSON.parse(localStorage.getItem("recents"))

  return (recentSearches !== null) ? 

      <div className='recent-searches'>

      <h3>RECENT SEARCHES</h3>
      <div class="container">

      {recentSearches.map((recentItem) => {
        return <div class="item" onClick={() => {getResults(recentItem)}}>{recentItem}</div>
      })}
  
      </div>

      </div> : <></>
    }
   

