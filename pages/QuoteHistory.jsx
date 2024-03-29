// need to fix sticky navbar and footer (make not sticky)
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import router from "next/router";
const barlow = localFont({
  src: "../public/fonts/Barlow-Regular.ttf",
  weight: "200",
});

export default function quote_history() {
  const [quoteHistory, setQuoteHistory] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    fetch("http://localhost:3000/api/getQuoteHistory")
      .then((res) => res.json())
      .then((data) => {
        setQuoteHistory(data);
      });
  }, []);
  if (typeof window !== "undefined" && status === "unauthenticated") {
    router.push("/LoginPage");
    return;
  }
  return (
    <div className={barlow.className}>
      <Head>
        <title>Fuel Quoter: Quote History</title>
        <link rel="icon" href="/history.ico" />
      </Head>
      <div className="flex flex-col min-h-screen h-screen justify-between bg-gray-100 overflow-auto">
        <header>
          {/* TOP BAR */}
          <nav className="relative flex w-full items-center font-bold text-4xl text-beige bg-light_blue shadow-md h-16">
            <div className="ml-8">
              <Link href="/"> FUEL QUOTER </Link>
            </div>
            <ul className="ml-auto left-0 right-0 top-full inline-flex">
              <li className="flex mr-8 items-center hover:underline">
                <Link href="/"> HOME </Link>
              </li>
              <li className="flex mr-8 items-center hover:underline">
                <Link href="/QuoteForm"> QUOTE </Link>
              </li>
              <li className="flex mr-8 items-center hover:underline">
                <Link href="/ProfilePage"> PROFILE </Link>
              </li>
              <li className="flex mr-8 items-center hover:underline">
                <button onClick={signOut}>LOGOUT</button>
              </li>
            </ul>
          </nav>
        </header>

        {/* QUOTE FORM */}
        <main className="flex-grow flex justify-center py-10 bg-gray-100">
          <div className="px-4 py-6 bg-white w-[80%] shadow-lg mx-auto my-auto sm:rounded-sm">
            <h3 className="text-2xl font-bold text-center"> Fuel Quote History </h3>
            <div className="relative w-full overflow-x-auto mt-4 px-4">
              <table className="table-auto w-full text-center mb-4">
                <thead className="text bg-dark_grey">
                  <tr className="border border-dark_grey">
                    <th scope="col" className="px-4 py-2.5"> Delivery Date</th>
                    <th scope="col" className="px-4 py-2.5"> Address 1 </th>
                    <th scope="col" className="px-4 py-2.5"> Address 2 </th>
                    <th scope="col" className="px-4 py-2.5"> City </th>
                    <th scope="col" className="px-4 py-2.5"> State </th>
                    <th scope="col" className="px-4 py-2.5"> Zip </th>
                    <th scope="col" className="px-4 py-2.5"> Gallons</th>
                    <th scope="col" className="px-4 py-2.5"> Price/Gal </th>
                    <th scope="col" className="px-4 py-2.5"> Total Cost </th>
                  </tr>
                </thead>
                <tbody>
                {quoteHistory.length != 0 ? (  
                  <>              
                 {quoteHistory.map((quote) => (
                    <tr className="flex-grow bg-white">
                      <td className="border px-4 py-2.5">{quote.deliveryDate}</td>
                      <td className="border px-4 py-2.5">{quote.address1}</td>
                      <td className="border px-4 py-2.5">{quote.address2}</td>
                      <td className="border px-4 py-2.5">{quote.city}</td>
                      <td className="border px-4 py-2.5">{quote.state}</td>
                      <td className="border px-4 py-2.5">{quote.zipCode}</td>
                      <td className="border px-4 py-2.5">{quote.gallonsRequested.toFixed(2)}</td>
                      <td className="border px-4 py-2.5">${quote.pricePerGallon.toFixed(2)}</td>
                      <td className="border px-4 py-2.5">${quote.totalAmountDue.toFixed(2)}</td>
                    </tr>
                  ))}
                  </>
                ) : (
                  <tr className="flex-grow bg-white">
                    <td className="border px-4 py-2 h-60 text-lg text-gray-400" colSpan={9}><i>No Quotes Found</i></td>
                  </tr>
                )}

                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        {/* add conditional button stuff later */}

        <Footer />
      </div>
    </div>
  );
}

/* <tr className="bg-white border-b border-dark_grey">
                            <td scope="row" className=" px-4 py-2 whitespace-nowrap">
                               mm/dd/yyyy
                            </td>
                            <td className=" px-4 py-2">
                                5098 Jacksonville Rd
                            </td>
                            <td className=" px-4 py-2">
                                Apt 1960
                            </td>
                            <td className=" px-4 py-2">
                                Houston
                            </td>
                            <td className=" px-4 py-2">
                                TX
                            </td>
                            <td className=" px-4 py-2">
                                77034
                            </td>
                            <td className=" px-4 py-2">
                                $2.80
                            </td>
                            <td className=" px-4 py-2">
                                $280.00
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-dark_grey">
                            <td scope="row" className=" px-4 py-2 whitespace-nowrap">
                               mm/dd/yyyy
                            </td>
                            <td className=" px-4 py-2">
                                5098 Jacksonville Rd
                            </td>
                            <td className=" px-4 py-2">
                                Apt 1960
                            </td>
                            <td className=" px-4 py-2">
                                Houston
                            </td>
                            <td className=" px-4 py-2">
                                TX
                            </td>
                            <td className=" px-4 py-2">
                                77034
                            </td>
                            <td className=" px-4 py-2">
                                $2.80
                            </td>
                            <td className=" px-4 py-2">
                                $280.00
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-dark_grey">
                            <td scope="row" className=" px-4 py-2 whitespace-nowrap">
                               mm/dd/yyyy
                            </td>
                            <td className=" px-4 py-2">
                                5098 Jacksonville Rd
                            </td>
                            <td className=" px-4 py-2">
                                Apt 1960
                            </td>
                            <td className=" px-4 py-2">
                                Houston
                            </td>
                            <td className=" px-4 py-2">
                                TX
                            </td>
                            <td className=" px-4 py-2">
                                77034
                            </td>
                            <td className=" px-4 py-2">
                                $2.80
                            </td>
                            <td className=" px-4 py-2">
                                $280.00
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-dark_grey">
                            <td scope="row" className=" px-4 py-2 whitespace-nowrap">
                               mm/dd/yyyy
                            </td>
                            <td className=" px-4 py-2">
                                5098 Jacksonville Rd
                            </td>
                            <td className=" px-4 py-2">
                                Apt 1960
                            </td>
                            <td className=" px-4 py-2">
                                Houston
                            </td>
                            <td className=" px-4 py-2">
                                TX
                            </td>
                            <td className=" px-4 py-2">
                                77034
                            </td>
                            <td className=" px-4 py-2">
                                $2.80
                            </td>
                            <td className=" px-4 py-2">
                                $280.00
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-dark_grey">
                            <td scope="row" className=" px-4 py-2 whitespace-nowrap">
                               mm/dd/yyyy
                            </td>
                            <td className=" px-4 py-2">
                                5098 Jacksonville Rd
                            </td>
                            <td className=" px-4 py-2">
                                Apt 1960
                            </td>
                            <td className=" px-4 py-2">
                                Houston
                            </td>
                            <td className=" px-4 py-2">
                                TX
                            </td>
                            <td className=" px-4 py-2">
                                77034
                            </td>
                            <td className=" px-4 py-2">
                                $2.80
                            </td>
                            <td className=" px-4 py-2">
                                $280.00
                            </td>
                        </tr> */
