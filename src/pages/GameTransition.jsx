import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function GameTransition() {
  const navigate = useNavigate();
  const { start, end } = useParams();

  useEffect(() => {
    setTimeout(() => {
      navigate("/game");
    }, 2300);
  }, []);

  return (
    <motion.div
      className="bg-black h-screen w-full flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="top-20 text-center text-teal-200 text-2xl">
        Partez de : {start}
      </p>
      {/* <img
        src="/src/assets/movie-countdown.gif"
        alt="countdown"
        className="w-full "
      /> */}
      <video id="background-video" autoPlay loop muted className="w-full">
        <source
          src="https://thumbs.gfycat.com/AntiqueLightheartedIbizanhound-mobile.mp4"
          type="video/mp4"
        />
      </video>
      <p className="w-52 bottom-10 max-h-32 text-center text-orange-200 text-2xl">
        Pour arriver à : {end}
      </p>
    </motion.div>
  );
}

export default GameTransition;
