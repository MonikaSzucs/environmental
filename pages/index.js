import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY;
  var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKeyInfo}`

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((info) => {
        setData(info.articles)
        console.log(info.articles);
      })
  }, [])

  return (
    <>
      <main className={`${styles.main}`}>
        {
          data.map((i, index) => {
            return(
              <div key={index}>
                {i.author}
              </div>
            )
          })
        }
      </main>
    </>
  );
}
