import {MdOutlineTravelExplore} from "react-icons/md"
import {RiCustomerService2Fill} from "react-icons/ri"
const Boarding = () => {
  return (
    <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-3 px-4 py-16" id="boarding">
      <div className="md:col-span-2 flex flex-col justify-evenly  ">
        <h2 className="font-bold md:text-3xl ">
          LUXURY INCLUDED VACATIONS FOR TWO PEOPLE
        </h2>
        <p className="text-[gray]">
          Come experience the very Pinnacle of luxury Carribbean all inclusive
          vacations for couples at BEACHES Resorts. Our luxury beach resortd.
          set along the most topical settings and exquisite beaches in Saint
          Lucia, Jaimaica, Antigua. The Bahamas, Grenada, Barbados and Curacao,
          feature unlimited gourment dining, unique bar serving premium liquors
          and wines, and every land and water sports, including complimentary
          green fees at our golf resorts and certified scuba diving at most
          resort. If you are planning a wedding , BEACHES is the leader in
          Carribbean destination weddings and honeymoon packages
        </p>
        <div className="grid sm: grid-cols-2 gap-7 py-4">
            <div className="flex flex-col md:flex-row items-center text-center">
              <button><RiCustomerService2Fill style={{color:"white"}}/></button>
              <div>
                <h1 className="text-sm font-bold">LEADING SERVICE</h1>
                <p className="text-[gray]">ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center">
              <button><MdOutlineTravelExplore style={{color:"white"}}/></button>
              <div>
                <h1 className="text-sm font-bold">LEADING SERVICE</h1>
                <p className="text-[gray]">ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center text-center w-[390px]">
        <h1 className="font-bold">GET AN ADDITIONAL 10% OFF</h1>
        <p>12 HOURS LEFT</p>
        <p className="bg-red-600 font-bold py-1 px-4 w-full text-white rounded">BOOK NOW AND SAVE </p>
        <form className="flex flex-col justify-start w-full p-2">
            <label className="mr-auto font-bold mt-1">Destination</label>
            <select className="rounded border focus:outline-none ">
                    <option>Grandie Antigua</option>
                    <option>Maldives</option>
                    <option>New West</option>
                    <option>Dodora</option>
                    <option>Atlanta</option>
            </select>

            <label className="mr-auto font-bold mt-2">Check-In</label>
            <input className="rounded border focus:outline-none" type="date"/>

            <label className="mr-auto font-bold mt-2">Check-Out</label>
            <input className="rounded border focu:outline-none" type="date"/>

            <button className="w-full mt-4 bg-red-600 text-white font-bold p-1 uppercase">Rates and Availability</button>
        </form>
      </div>
    </div>
  );
};
export default Boarding;
