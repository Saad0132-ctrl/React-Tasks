function Card({cardData}){
    return (
        <>
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h1 className="text-xl font-semibold mb-2">{cardData.title}</h1>
        <p className="text-gray-600 mb-4">{cardData.description} </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{cardData.text} </button>
        </div>
        </>
    )
}
export default Card