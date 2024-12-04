import { useState } from 'react'
import  {regions} from './storeData.json'


function Store({storeName,address,phoneNumber}){
    return(
        <section className="store">
            <h2>・{storeName}</h2>
            <p>{address}</p>
            <p>{phoneNumber}</p>
        </section>
    );
}

export default function Gallery(){
    
    const [ select, setSelected] = useState("Tohoku");
    
    const SelectChange = (event) => {
        setSelected(event.target.value);
    } 

    const filteredRegions = regions[select] ||[];

    return(
        <>
        <h1>店舗情報</h1>
        <label>
            地域を選択：
            <select value={select} onChange={SelectChange}>
                <option value="Tohoku">東北</option>
                <option value="Kanto">関東</option>
                <option value="Kansai">関西</option>
            </select>
        </label>
        {filteredRegions.map((store,index)=>(
          <Store
            key={index}
            storeName={store.storeName}
            address={store.address}
            phoneNumber={store.phoneNumber}
          />
        ))}
        </>
      )
}



