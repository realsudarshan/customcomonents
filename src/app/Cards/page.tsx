export default function Home() {
    return (<>
    {/* COntainer */}
     <main className="flex-grow h-screen flex items-center justify-center p-4 bg-red-400">
        {/* Card detail container */}
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center justify-center p-4">
                <h2 className="text-xl font-bold text-black">Custom Heading</h2>
            </div>
            <div className="p-4">
                <p className="text-gray-700">This is discription of the card.Yu can put any description that can describe it</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-200">
                <button className="bg-red-500 text-white rounded hover:bg-yellow-400 p-3">View Code</button>
                <button className="bg-red-500 text-white rounded hover:bg-yellow-400 p-3">Next Card</button>
            </div>
        </div>

     </main>
       
     </>
    );
  }
  