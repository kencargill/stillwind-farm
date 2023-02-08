import { Link } from "react-router-dom";

export default function MarketCardPage () {
    return (
        <div>
            <p>We have created a Market Card program that will allow for community 
                connection & farm sustainability throughout the winter & summer season. 
                See below to learn more about how you can access fresh veggies & discounts all season long!</p>

            <h3>Market Cards Explained:</h3>
            <p>Our Market Cards are a unique and adaptable way to support your local 
                farmer! By purchasing one, you are granted flexibility, discounts, and 
                goodies to your upcoming veggie season.</p>
            <p>What is a Market Card?</p>
            <p>A Market Card is essentially a Stillwind Debit Card, but with perks. Upon 
                purchasing, you will load a set amount onto your card ($50, $100, etc) 
                depending on your household & the frequency at which you attend markets 
                or shop for veggies. Once you have checked out, the card will be sent in 
                the mail early spring, alongside a sticker & note. We are planning to attend 
                Fulton St Market on at least Saturday in 2023. Markets for us will begin in 
                May & extend into October.</p>
            <p>What are the perks?</p>
            <p>By shopping with a Market Card, you guarantee 10% off of each purchase! This 
                is a way that we express gratitude for you supporting our early season costs 
                & believing in the nourishing food that we work so hard to grow!</p>
                <Link to={'/shop'}>
                    <button>view products</button>
                </Link>
        </div>
    )
}