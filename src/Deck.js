import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css"

const BASE_URL = "http://deckofcardsapi.com/api/deck";

const Deck = () => {
    const [deck, setDeck] = useState(null);
    const [draw, setDraw] = useState(null);

    /// get data from the API
    useEffect(() => {
        async function getData() {
            let deck = await axios.get(`${BASE_URL}/new/shuffle`)
            setDeck(deck.data.deck_id)
            console.log(deck.data.deck_id)
        }
        getData();
    }, [setDeck]);
    console.log(`here is ${deck}`)

    async function handleClick() {
        let draw = await axios.get(`${BASE_URL}/${deck}/draw`)
        console.log(draw.data.cards[0].image)
        setDraw(draw.data.cards[0].image)
    }
    console.log(`you drew ${draw}`)

    return (
        <div className="deck">
            <button onClick={handleClick}>Click for a card</button>
            <div className="card-area">
                <Card image={draw}/>
            </div>
        </div>
    )

}

export default Deck;