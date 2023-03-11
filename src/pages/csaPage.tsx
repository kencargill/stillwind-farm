import { Link } from "react-router-dom";

export default function csaPage () {
    return (
        <div className="container p-3">
            <div className="container">
                <h3 className="row">CSA Overview</h3>
                <p className="row">Community Supported Agriculture (CSA) shares are a common way for local 
                    farmers & veggie consumers to partner. By investing in a full or half 
                    share throughout the winter months, we are able to plan & pay for the 
                    seeds, tools, & soil amendments necessary for a successful season. In 
                    return we commit to sharing the harvest with you for 18 weeks throughout 
                    the harvest season (June 7 - October 4)!</p>

                <p className="row">CSA shares differ from farmers market shopping in that each week we cater 
                    a bundle for you based on what is growing well in the field. In August this could look like:</p>
                <ul className="row">
                <li>3 pounds of heirloom tomatoes</li>
                <li>3 italian sweet peppers</li>
                <li>1 eggplant</li>
                <li>2 summer squash / zucchini</li>
                <li>1 bunch of scallions</li>
                <li>1 cucumber</li>
                <li>1 bag lettuce mix</li>
                </ul>

                <p className="row">Each week & month looks different, connecting us all to the ebbs 
                    & flows of seasonal growing. Alongside a convenient pick-up we 
                    also send members a weekly newsletter full of farm happenings, 
                    photos, recipes, & CSA member events.</p>
            </div>

            <div className="container">
                <h3 className="row">Sign up / payment information:</h3>
                <p className="row">We have designed our CSA to have two size options when signing 
                    up, full or half. The size of your shares at pickup will be 
                    indistinguishable, however, the frequency of your pick-ups will differ.</p>

                <p className="row">If you sign up for a Full CSA share you will pick up every week 
                    at Fulton St Farmers Market on Wednesdays between 4 - 6:30pm 
                    OR on-farm (Belding) Tuesdays between 4:30 - 6pm. The cost of 
                    this share is $630, assuming that each week we will provide 
                    you with at least $35 worth of produce. </p>

                <p className="row">If you sign up for a Half CSA share you will pick up every 
                    other week at Fulton St Farmers Market on Wednesdays between 
                    4 - 6:30pm OR on-farm (Belding) Tuesdays between 4:30 - 6pm. 
                    The cost of this share is $315. </p>

                <p className="row">To sign up head over to our store & checkout with the share 
                    size you would like. If you would like to pay with a check 
                    / cash / paypal or have general questions please email 
                    stillwindfarm@gmail.com.</p>

                <p className="row">Please note, we are also happy to set up a payment plan with 
                    you! This can look like monthly payments, ½ payments, 
                    quarterly, etc. Please reach out via email if you would prefer 
                    exploring this option.</p>

            </div>

                <div className="d-grid gap-2 col-6 m-auto justify-content-center">
                    <Link to={'https://www.stillwindfarmllc.com/shop/csa-shares/9?page=1&limit=60&sort_by=category_order&sort_order=asc'} >
                        <button type="button" className="btn btn-success m-5">view products</button>
                    </Link>
                </div>
        </div>
    )
}