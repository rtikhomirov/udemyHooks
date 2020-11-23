import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";

export const TestBudget = () => {
    const payload = {
        titles: ["Gladiator", "John Wick", "Judge Dredd", "Fight Club"],
        releases_years: [2000, 2014, 2012, 2000],
        budget: [103000000, 30000000, 53000000, 27000000],
        box_office: [460500000, 86000000, 18000000, 50000000]
    };
    const [showCards, setShowCards] = useState(true);

    let sortedPayload = [];
    for(let i = 0; i < payload.titles.length; i++) {
        let itemArr = [];
        itemArr.push(payload.titles[i]);
        itemArr.push(payload.releases_years[i]);
        itemArr.push(payload.budget[i]);
        itemArr.push(payload.box_office[i]);
        sortedPayload.push(itemArr);
    }

    const sortedCards = sortedPayload.map((item, index) => {
        return (
            <TestCard
                key={index}
                item={item}
                />
        )
    });

    return (
        <div>
            <button onClick={() => {setShowCards(!showCards)}}>Load Movies</button>
            {showCards ? sortedCards: null}
        </div>
    );
};
