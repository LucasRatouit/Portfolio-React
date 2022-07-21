import React from "react";
import GitHubCalendar from "react-github-calendar";

function Resume() {
    return (
        <section>
            <div className="intro">
                <h1>Qui je suis :</h1>
                <h1>Je m'appelle <strong>Lucas Ratouit</strong>, j'ai actuellement <strong>19 ans</strong> et je suis actuellement en seconde année de BTS.</h1><br />
                <h1>En dehors du développement, quelques autres activités que j'aime faire :</h1>
                <h1>➾ Sport</h1>
                <h1>➾ Séries</h1>
                <h1>➾ Jeux vidéos</h1>
                <hr />
                <div className="GitHubCalendar">
                    <GitHubCalendar
                        username="LucasRatouit"
                        blockSize={12}
                        blockMargin={5}
                        blockRadius={0}
                        color="#c084f5"
                        fontSize={16}
                    />
                </div>

            </div>
        </section>
    );
}

export default Resume;