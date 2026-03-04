import PricingTier from "../components/PricingTier"
import {pricingData} from "../assets/data"

export default function Pricing() {
    return (

        <section className="container mx-auto px-4 py-24">

            <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-5xl md:text-6xl mb-6 clash-display">
                    Choose Your <span className="grad1 clash-display">Trading Plan</span>
                </h2>

                <p className="text-lg text-zinc-300/50 ">Select the perfect trading plan with advanced features and competitive fees</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-x-6xl mx-auto">

                {
                    pricingData.map(({_id, isPopular, name, description, features, price}) => (

                        <PricingTier key={_id} isPopular={isPopular} name={name} price={price} description={description} features={features} />

                    ))
                }


            </div>

        </section>
        
    )
}