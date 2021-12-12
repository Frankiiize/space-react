import React, {useState,useEffect} from "react";
const useGetData = () => {
  const [ state , setState ] = useState([]);
  const [ destinations, setDestinations ] = useState([])
  const [ crew, setCrew ] = useState([])
  const [ tech, setTech ] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try{
          const data = await fetch('data.json')
          const response = await data.json();
          setState(response);
          setDestinations(response.destinations);
          setCrew(response.crew);
          setTech(response.technology)
        }
        catch(error){
          console.log(error)
        }
      }
      fetchData()
    },[])
    const pages = Object.keys(state)
    return{
      state,
      destinations,
      crew,
      tech,
      pages
    }

}
export { useGetData }