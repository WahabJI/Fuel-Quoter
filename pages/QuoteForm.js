// need to fix sticky navbar and footer (make not sticky)
export default function fuel_quote_form() {
    return (
        <div className="flex flex-col h-screen justify-between">
        <header>
            {/* TOP BAR */}
            <nav className="flex w-full items-center font-bold text-4xl text-beige bg-light_blue h-14">
            <div className="ml-4">
                FUEL QUOTER
            </div>
            <ul className="ml-auto left-0 right-0 top-full inline-flex">
                <li className="flex mr-4 items-center">
                <span>HOME</span>
                </li>
                <li className="flex mr-4 items-center">
                <span>HISTORY</span>
                </li>
                <li className="flex mr-4 items-center">
                <span>PROFILE</span>
                </li>
                <li className="flex mr-4 items-center">
                <span>LOGOUT</span>
                </li>
            </ul>
            </nav>
        </header>


        {/* QUOTE FORM */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
            <div className="flex-initial w-96  px-8 py-6 bg-white shadow-lg mx-auto my-auto">
                <h3 className="text-2xl font-bold text-center">Fuel Quote</h3>
                <form action="">
                    <div className="mt-4">
                    <div>
                        <label className="block" for="Gallons">Gallons Requesting</label>
                        <input type="text" placeholder="Gallons" className="w-full px-5 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <label className="block">Address 1</label>
                        <input type="text" placeholder="Address 1" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <label className="block">Address 2</label>
                        <input type="text" placeholder="Address 2" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <label className="block">City</label>
                        <input type="text" placeholder="City" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <label className="block">State</label>
                        <input type="text" placeholder="State" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <label className="block">Zip Code</label>
                        <input type="text" placeholder="Zip Code" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    
                    <div className="mt-4">
                        <label className="block">Delivery Date</label>
                        <input datetimepicker datepicker-format="mm/dd/yyyy" type="date" placeholder="Select a Date" className="peer w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-gray-500"/>
                    </div>
                    <div className="mt-3">
                        <label className="block">Price/Gallon</label>
                        <div className= "flex">
                            <span class="inline-flex items-center px-4 py-2 mt-1 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-600"> $ </span>
                            <input type="text" placeholder="0.00" className="w-full px-4 py-2 mt-1 border rounded-r-md  focus:outline-none focus:ring-1 focus:ring-blue-600" disabled/>
                        </div>                  
                    </div>
                    <div className= "mt-3">
                        <label className="block">Total Amount Due</label>
                        <div className= "flex">
                            <span class="inline-flex items-center px-4 py-2 mt-1 border border-r-none rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                $ </span>
                            <input type="text" placeholder="0.00" className="w-full px-4 py-2 mt-1 border rounded-r-md  focus:outline-none focus:ring-1 focus:ring-blue-600" disabled/>
                        </div>
                    </div>


                    <div class="flex flex-col rounded-md shadow-smmd:flex items-center justify-center mt-6 mx-auto">
                        <button className="block w-1/2 py-2 mt-4 mx-auto text-light_blue border border-light_blue rounded-lg hover:outline-double" disabled >Get Quote</button>
                        <button className="block w-1/2 py-2 mt-4 mx-auto text-black bg-light_blue rounded-lg hover:bg-light_blue/75 hover:text-beige">Submit</button>
                    </div>




                </div>
                
    
                </form>    
          </div>
        </main>


        {/* FOOTER */}
        {/* add conditional button stuff later */}
        <footer className="justify-center text-center align-center h-10 w-full bg-white border-t-2 border-dark_grey pt-1.5">
          <span><span className="text-light_blue">Created by </span> Mayssam Kalajo, Grace Rabano, Christian Ayala, and Wahab Javed</span>
        </footer>

      </div>
      


    );
  }