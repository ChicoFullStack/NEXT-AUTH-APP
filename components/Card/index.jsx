"use client";
import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";

// eslint-disable-next-line react/prop-types
function Card() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api-opcsmart-a48986e53ec1.herokuapp.com/api/list-one"
      );
      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositorios();
  }, [repositories]);

  return (
    <div>
      <section className={styles.card_body}>
        {repositories.map((repo) => (
          <div className={styles.card}>
            {/* key= {repo.id} */}
            <h1>VISÃO GERAL DO PROCESSO</h1>
            <div className={styles.superior}>
              <div>
                <label htmlFor="">
                  N Maquina: <h3>2253</h3>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  T Maquina: <h3>{repo.TEMPERATURA_W + "º"}</h3>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Date: <h3>{repo.date}</h3>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Time: <h3>{repo.time}</h3>
                </label>
              </div>
            </div>
            <div className={styles.inferior}>
              <div className={styles.inferior_btn}>
                <div>
                  <label htmlFor="">
                    Lig:{" "}
                    <h3
                      style={
                        repo.MAQ_LIG_DES_B == "1"
                          ? { background: "green" }
                          : { background: "red" }
                      }
                    >
                      {repo.MAQ_LIG_DES_B == "1" ? "Start" : "Stop"}
                    </h3>
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    Inicio B:{" "}
                    <h3
                      style={
                        repo.INICIO_PROCESS_B == "1"
                          ? { background: "green" }
                          : { background: "red" }
                      }
                    >
                      {repo.INICIO_PROCESS_B == "1" ? "Start" : "Stop"}
                    </h3>
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    Fim B:{" "}
                    <h3
                      style={
                        repo.FIM_PROCESS_B == "1"
                          ? { background: "green" }
                          : { background: "red" }
                      }
                    >
                      {repo.FIM_PROCESS_B == "1" ? "Start" : "Stop"}
                    </h3>
                  </label>
                </div>
              </div>
              <div className={styles.inferior_lbl}>
                <div>
                  <label htmlFor="">
                    Produção: <h3>{repo.V_PRODUCAO_W}</h3>
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    Inicio Processo: <h3>{repo.V_INICIO_PROCESS_W}</h3>
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    Fim Processo: <h3>{repo.V_FIM_PROCESS_W}</h3>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Card;
