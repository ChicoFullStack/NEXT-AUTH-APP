"use client"
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Card from "../../components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Projetos.module.css";

export default function ProcessAnalytics() {
  
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api-render-hxwo.onrender.com/api/list-one"
      );
      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositorios();
  }, [repositories]);

  return (
    <>
      <div className={styles.container_o}>
        <section className={styles.projetos}>
          {/* <h2>Projetos</h2> */}
          {repositories.length > 0 ? (
            <section className={styles.lista}>
              <Card />
            </section>
          ) : (
            
              <CircularProgress size={80}/>
            
          )}
        </section>
      </div>
    </>
  );
}
