import React, { useEffect, useState } from "react";
import Balloon from "@/components/Balloon/Balloon";
import Image from "next/image";
import birthdayperson from "../../public/img/mirra.jpg";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const createBalloons = () => {
      const totalBalloons = 100;
      const newBalloons = [];

      for (let i = 0; i < totalBalloons; i++) {
        const randomX = getRandomXPosition();
        const randomDuration = getRandomDuration();

        const style = {
          left: `${randomX}px`,
          animationDuration: `${randomDuration}s`,
        };

        newBalloons.push(<Balloon key={uuidv4()} style={style} />);
      }

      setBalloons(newBalloons);
    };

    const getRandomXPosition = () => {
      const balloonWidth = 50;
      const maxRightPosition = window.innerWidth - balloonWidth;
      return Math.random() * maxRightPosition;
    };

    const getRandomDuration = () => Math.random() * 5 + 5;

    createBalloons();
  }, []);

  return (
    <>
      <div className="container">
        {balloons}
        <div className="image-container">
          <Image
            alt="birthday person"
            src={birthdayperson}
            sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
            layout="responsive"
          />
        </div>
        <div className="birthday-date">
          <p>Birthday: October 29th</p>
        </div>
      </div>
    </>
  );
};

export default Home;
