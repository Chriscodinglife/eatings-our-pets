import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import spongebob from "../src/assets/spongebob.webp";

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
  const backend = import.meta.env.VITE_BACKEND;

  const refreshCounter = useCallback(() => {
    setButtonLoading(true);
    axios
      .get(`${backend}/api/counter/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.counter);
        setCount(res.data.counter);
        setButtonLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setButtonLoading(false);
      });
  }, []);

  const handleCounterClick = () => {
    refreshCounter();
  };

  const fetchArticles = useCallback(() => {
    axios
      .get(`${backend}/api/articles/`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    refreshCounter();
    fetchArticles();
  }, [refreshCounter, fetchArticles]);

  const buttonText = buttonLoading ? "Loading..." : `My pet was eaten!`;
  return (
    <div className="d-flex flex-column my-3 w-75 mx-auto">
      <div className="text-center ">
        <h1>🐱 iMmIgRaNtS aRe EaTiNg OuR pEtS! 🐶</h1>
      </div>
      <div className="text-center">
        <h5>Tracking the number of pets lost to hungry immigrants*</h5>
      </div>
      <div className="d-flex flex-row justify-content-center my-5">
        <div className="m-3 text-center align-content-center">
          <h4>Total pets eaten:</h4>
          <h4 className="fs-1 fw-bold">{count}</h4>
        </div>
        <img src={spongebob} alt="spongebob" className="w-25" />
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
          Found By Our AI Bot Scouring The Web*
        </h5>
        <ul>
          {[...articles]
            .reverse()
            .slice(0, 6)
            .map((article: Article) => (
              <li key={article.id} className="p-3 mx-auto">
                <p className="text-start text-text-secondary mb-3 fs-6">
                  {new Date(article.created_at).toLocaleDateString()}
                </p>
                <h5>{article.title}</h5>
                <p className="pt-2 text-secondary">{article.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
