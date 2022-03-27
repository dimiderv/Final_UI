import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import Error from '../Templates/Error';
import PrintAssets from '../Templates/PrintAssets';


function GetAllAssets(props) {

    let back;//link to go back to home page 
    if(props.org==="org1"){
       back="/farmerFrontPage"; //assigning values like this doesnt work
    }else if (props.org==="org2"){
        back="/retailerFrontPage";
    }else{
        back="/supermarketFrontPage";
    }

    const [items, setItems] = useState([]);
    //const [expiration, setExpiration] = useState('');

    useEffect( () => {

        const fetchItems = async () => {
            const orgLink="/";
            let temp;
            if(props.org==="org1"){
            temp="farmerFrontPage/getAllAssets";
            }else if (props.org==="org2"){
                temp="retailerFrontPage/getAllAssets";
            }else{
                temp="supermarketFrontPage/getAllAssets";
            }
            
            const data = await fetch(orgLink+temp);
            const items = await data.json();
            setItems(items);
        };

        fetchItems();
    }, [props]); //dont understand this error

    // const fetchExpire = async () => {
    //     // const orgLink="/";
    //     // let temp;
    //     // if(props.org==="org1"){
    //     // temp="farmerFrontPage/getAllAssets";
    //     // }else if (props.org==="org2"){
    //     //     temp="retailerFrontPage/getAllAssets";
    //     // }else{
    //     //     temp="supermarketFrontPage/getAllAssets";
    //     // }
        
    //     // const data = await fetch(orgLink+temp);
    //     const expiration ="malaka" // await data.json();

    //     setExpiration(expiration);
    // };
    
    console.log(items.errorCLI)



    

    var count = Object.keys(items).length;
    //this covers the case were we have only one asset
    if(items.expirationTime){
        return(
            <div className="mx-auto container-fluid p-5">
                <div className="d-block p-5">
                    <h3>This is the current asset </h3>
                </div>      
                <section>
                  
                        <PrintAssets ID={items.asset_obj.ID}  weight={items.asset_obj.weight} owner={items.asset_obj.owner} creator={items.asset_obj.creator} expirationDate={items.asset_obj.expirationDate} sensorData={items.asset_obj.sensorData} assetType={items.asset_obj.assetType} ownerOrg={items.asset_obj.ownerOrg} daysLeft={items.expirationTime} creationTimestamp={items.asset_obj.timestamp}/>
                        {/* fetchE={fetchExpire} expi={expiration} */}
                    
                </section> 
                <hr />
                <div>
                    <p className="text-center d-block"><a href={back} className="btn btn-small btn-primary" >Go back</a></p>
                </div>
               
            </div>
        );
    }else if (items.errorCLI==="error"){

        
             <Error message={items.errorMessage} backlink={back} />
      
    }else if( count){
       
        return (
            <div className="d-block p-5 bg-light">
                 <div className="d-block p-5">
                         <h3>These are the assets </h3>
                     </div>
                     
                         <div className="d-flex align-items-center 
                  justify-content-center flex-wrap p-2 m-2 ">{items.map((item) => (

                    <PrintAssets ID={item.asset_obj.ID}  weight={item.asset_obj.weight} owner={item.asset_obj.owner} creator={item.asset_obj.creator} expirationDate={item.asset_obj.expirationDate} sensorData={item.asset_obj.sensorData}  assetType={item.asset_obj.assetType} ownerOrg={item.asset_obj.ownerOrg} daysLeft={item.expirationTime} creationTimestamp={item.asset_obj.timestamp}/>
                ))}
                </div>
                <div>
                        <p className="text-center d-block"><a href={back} className="btn btn-small btn-primary" >Go back</a></p>
                </div>
                
            </div>
        );
    }

    return(
        <Error message="Something went wrong . Couldn't read all assets available" backlink={back} />
    );



}

export default GetAllAssets;

            //let products = null;
       
        
            // products = items.map((item) => (
            //     // <div className="card p-1 m-2  " style={{width:23+"em"}}>
            //     //     <div className="col-sm">
            //     //         <div className="card-body ">
            //     //             <h4 className="card-header "> {item.ID} </h4>
            //     //             <p className="card-text "> Color : {item.color}. </p>
            //     //             <p className="card-text"> Weight (Kg) : {item.weight}. </p>
            //     //             <p className="card-text"> Owner : {item.owner}. </p>
            //     //             <p className="card-text "> Creator : {item.creator}. </p>
            //     //             <p className="card-text"> Exiration : {item.expirationDate}. </p>
            //     //             <button className="btn btn-primary"> View </button>
            //     //         </div>
            //     //     </div>
            //     // </div>
            //     <PrintAssets ID={item.ID} color={item.color} weight={item.weight} owner={item.owner} creator={item.creator} expirationDate={item.expirationDate} />
            // ));