import React from "react";

function Bouquet({ bouquet }) {
    return (
        <div>
            {bouquet
                .filter((item) => (item.price > 2000 ? true : false))
                .map((item) => {
                    return (
                        <div>
                            <h1>Flowers</h1>
                            {item.flowers.map((item) => {
                                return (
                                    <div>
                                        <h1>
                                            <ol>{item}</ol>
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
        </div>
    );
}

export default Bouquet;
