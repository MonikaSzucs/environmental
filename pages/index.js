import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState();

  var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY;
  var url = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-15&sortBy=publishedAt&apiKey=${apiKeyInfo}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        setData(info)
        console.log(info);
      })
  }, [])

  return (
    <>
      <main className={`${styles.main}`}>
        {
          data.articles.map((info, index) => {
            return(
              <div key={index}>
                {info.author}
              </div>
            )
          })
        }
      </main>
    </>
  );
}
