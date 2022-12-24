import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ReactCarousel() {
  return (
    <div>
        <Carousel showArrows={false}  showIndicators={false} showStatus={false} infiniteLoop={true} showThumbs={false} autoPlay={true}>
                <div className=''>
                    <img  className='rounded-xl' src="https://spoonacular.com/recipeImages/631759-312x231.jpg" alt='-img'/>
                </div>
                <div className=''>
                    <img  className='rounded-xl' src="https://spoonacular.com/recipeImages/729366-312x231.jpg" alt='-img'/>
                </div>
                <div className=''>
                    <img  className='rounded-xl' src="https://spoonacular.com/recipeImages/642613-312x231.jpg" alt='-img'/>
                </div>
            </Carousel>
    </div>
  )
}
