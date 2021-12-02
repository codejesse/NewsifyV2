import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://saurav.tech/NewsAPI/everything/cnn.json"
    )
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(err => console.error(err));
  }, []);

  console.log(news);
if (news.length === 0) {
  return (
    <Navbar />
  )
} return (
    <div>
      <Navbar />
      {news && news.map((info, i) => (
        <Card key={i} title={info.title} img={info.urlToImage}  description={info.description}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
