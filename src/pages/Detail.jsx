import React from 'react';
import { useEffect, useState } from "react";
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';

const Detail = () => {

  const [recipe, setRecipe] = useState([]);
  const {recipeName} = useParams();

  useEffect(()=> {
    getDetail();
  },[]);

  const getDetail = async () => {

      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&titleMatch=${recipeName}`);
      const data = await api.json();

      setRecipe(data.recipe);

      console.log({recipeName});
      console.log(data);
    
    
  }

  return (
    <div>Detail</div>
  )
}

export default Detail