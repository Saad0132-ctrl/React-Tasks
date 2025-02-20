import Card from "../Card/Card";

function HeroSection({cardData}) {
    // console.log(props);
    
    return(
        <>
        <div className="text-center p-8">
            <h1  className="text-4xl font-bold mb-4">Welcome To Website</h1>
            <h2  className="text-2xl font-semibold text-gray-700 mb-6">Our Services</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
            {cardData.map((item,index) => (
                    <Card cardData={item} key={index} />
                )
            )}
        </div>
        

        </>

    )
}
export default HeroSection;