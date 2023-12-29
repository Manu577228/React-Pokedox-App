import React from "react";

function PokeInfo({ data }) {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {data.abilities.map((ability, index) => (
              <div className="group" key={index}>
                <h2>{ability.ability.name}</h2>
              </div>
            ))}
          </div>
          <div className="base-stat">
            {data.stats.map((stat, index) => (
              <h3 key={index}>
                {stat.stat.name}: {stat.base_stat}
              </h3>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default PokeInfo;
