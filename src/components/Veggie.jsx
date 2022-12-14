import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veggie() {
const [veggie, setVeggie] = useState([]);

  useEffect(()=> {
    getVeggie();
  },[]);

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');

    if(check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
      const data = await api.json();

      localStorage.setItem('veggie',JSON.stringify(data.recipes));

      setVeggie(data.recipes);
    }
    
  }

  return (
    <div>
      <Wrapper>
        <h3>Veggie recipes</h3>

        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
        }}>
        {veggie.map((recipe) => {
          return(
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
            </SplideSlide>
          );
        })};
        </Splide>

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 2;
  }

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 0;
    width: 100%;
    color: #FFF;
    transform: translate(-50%, 0);
    text-align: center;
    font-weight: bold;
    height: 40%;
    padding: 0 1rem;
  }

`;

export default Veggie