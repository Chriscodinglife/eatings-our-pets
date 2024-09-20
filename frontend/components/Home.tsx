import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import spongebob from "../src/assets/spongebob.webp";
import catSound from "../src/assets/sounds/cat.mp3";
import dogSound from "../src/assets/sounds/dog.mp3";

interface Article {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

const Home = () => {
  const [count, setCount] = useState(null);
  const [articles, setArticles] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [rotateImage, setRotateImage] = useState(false);
  const backend = import.meta.env.VITE_BACKEND;
  const clickCounterRef = useRef(0);

  const playSound = () => {
    const sounds = [catSound, dogSound];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
  };

  const refreshCounter = useCallback(() => {
    setButtonLoading(true);
    axios
      .get(`${backend}/api/counter/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setAnimating(true);
        setTimeout(() => {
          setCount(res.data.counter);
          setAnimating(false);
        }, 200);
        setButtonLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setButtonLoading(false);
      });
  }, [backend]);

  const handleCounterClick = () => {
    refreshCounter();

    clickCounterRef.current += 1;
    if (clickCounterRef.current === 10) {
      playSound();
      clickCounterRef.current = 0; // Reset the ref after playing the sound
    }
    setRotateImage(true);
    setTimeout(() => setRotateImage(false), 1000);
  };

  const fetchArticles = useCallback(() => {
    axios
      .get(`${backend}/api/articles/`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((error) => console.log(error));
  }, [backend]);

  useEffect(() => {
    refreshCounter();
    fetchArticles();

    const twoMinutes = 120000;
    const intervalId = setInterval(() => {
      refreshCounter();
    }, twoMinutes);

    return () => clearInterval(intervalId);
  }, [refreshCounter, fetchArticles]);

  const buttonText = buttonLoading ? "Loading..." : "My pet was eaten!";

  return (
    <div className="d-flex flex-column my-3 w-75 mx-auto">
      <div className="text-center">
        <h1>🐱 iMmIgRaNtS aRe EaTiNg OuR pEtS! 🐶</h1>
      </div>
      <div className="text-center">
        <h5>Tracking the number of pets lost to hungry immigrants*</h5>
      </div>
      <div className="d-flex flex-row justify-content-center my-5">
        <div className="m-3 text-center align-content-center">
          <h4>Total pets eaten:</h4>
          <h4
            className={`fs-1 fw-bold ${
              animating ? "opacity-0" : "opacity-100"
            } transition-opacity`}
          >
            {count}
          </h4>
        </div>
        <img
          src={spongebob}
          alt="spongebob"
          className={`w-25 ${rotateImage ? "rotate" : ""}`}
        />
      </div>
      <div className="card p-3 m-3">
        <p className="fs-6">
          If you or a loved one lost a pet, press the button to let us know
        </p>
        <button
          className="text-white bg-danger rounded-1 p-3 border-0"
          onClick={() => handleCounterClick()}
        >
          {buttonText}
        </button>
      </div>

      <div className="text-start my-4">
        <h3>Latest News</h3>
        <h5 className="text-secondary">
          {`Found By Our AI Bot Scouring The Web: (Completely Fake News)`}
        </h5>
        <ul>
          {[...articles]
            .reverse()
            .slice(0, 4)
            .map((article: Article) => (
              <li key={article.id} className="p-3 mx-auto">
                <p className="text-start text-text-secondary mb-3 fs-6">
                  {new Date(article.created_at).toLocaleDateString()}
                </p>
                <h5 className="pt-2 text-secondary">{article.title}</h5>
              </li>
            ))}
        </ul>
      </div>

      <style>{`
        @keyframes rotate360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate {
          animation: rotate360 1s ease-in-out;
        }
        .opacity-0 {
          opacity: 0;
        }
        .opacity-100 {
          opacity: 1;
        }
        .transition-opacity {
          transition: opacity 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Home;
