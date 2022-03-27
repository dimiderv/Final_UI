//import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import corn from '../images/corn.png'
import fruits from '../images/fruits.jpg'
function SupermarketFrontPage() {
    // useEffect( () => {
    //     fetchItems();
    // }, []);

    // const [items, setItems] = useState([]);

    // const fetchItems = async () => {
    //     const data = await fetch('/supermarketFrontPage');
    //     const items = await data.json();
        

    //     setItems(items);
    // };

    return(
        <section className="mainPage"> 

            {/* <!-- Slider --> */}
            <div className="carousel slide" id="mainSlide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="mw-100  mx-auto mh-50 d-block"src={corn} alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img className="mw-100  mx-auto mh-50 d-block"src={fruits} alt=""/>
                    </div>
                    <a className="carousel-control-prev" href="#mainSlide" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#mainSlide" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            
            {/* <!-- Content --> */}
            <div className="container-fluid p-5 transaction-container">
                <h1 className=" p-5" id="projectAnchor">Transactions </h1>
                
                {/* <!-- cards --> */}
                <div className="card-deck transaction-cards">



                    {/* <div className="card ">
                        <img className="card-img-top" src="./images/projects-macbook-stats.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Update Asset</h6>
                            <p className="card-text ">Update an asset</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/updateAsset" className="btn btn-small btn-primary" >Update</a></p>
                    </div> */}
                    <div className="card ">
                        <img className="card-img-top" src="./images/projects-macbook-stats.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Update Sensor Data</h6>
                            <p className="card-text ">Update sensor data</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/updateSensorData" className="btn btn-small btn-primary" >Update sensor</a></p>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="./images/projects-macbook-stats.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Delete Asset</h6>
                            <p className="card-text ">Delete an asset</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/deleteAsset" className="btn btn-small btn-primary" >Delete</a></p>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="./images/projects-macbook-stats.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Delete Buy Request</h6>
                            <p className="card-text ">Delete the buy Request after asset transfer.Otherwise you delete the request and Retailer can't see it</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/deleteBuyRequest" className="btn btn-small btn-primary" >Delete Buy Request</a></p>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="./images/projects-macbook-stats.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Delete Bid Request</h6>
                            <p className="card-text ">Delete the bid Request after asset transfer.Otherwise you delete the request and Retailer can't see it</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/deleteBidRequest" className="btn btn-small btn-primary" >Delete Bid</a></p>
                    </div>
                    <div className="card ">
                        <img className="card-img-top" src="./images/projects-macbook-stats.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Request to Buy</h6>
                            <p className="card-text ">Request to Buy and asset from Farmers Org</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/requestToBuy" className="btn btn-small btn-primary" >RequestToBuy</a></p>
                    </div>
                    <div className="card ">
                        <img className="card-img-top" src="./images/projects-macbook-stats.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Agree to Buy</h6>
                            <p className="card-text ">Agree on price and buy asset from Farmers Org</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/agreeToBuy" className="btn btn-small btn-primary" >Agree To Buy</a></p>
                    </div>


                    
                </div> 
                
            </div> 
            <div className="container-fluid p-5 query-container">
                <h1 className=" p-5" id="queriesAnchor">Queries</h1>
                
                {/* <!-- cards --> */}
                <div className="card-deck query-cards">

                   
                    <div className="card ">
                        <img className="card-img-top " src="./images/projects-macbook-stats.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Search Asset</h6>
                            <p className="card-text ">See if an asset Exists</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/assetExists" className="btn btn-small btn-primary" >Search asset</a></p>
                    </div>
                    {/* <div className="card">
                        <img className="card-img-top" src="./images/projects-coding-sunset.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Read Asset Details</h6>
                            <p className="card-text ">You can read the details of available asset</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/readAsset" className="btn btn-small btn-primary">Read Asset</a></p>
                    </div> */}

                    <div className="card">
                        <img className="card-img-top" src="./images/projects-coding-sunset.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Read Asset Price</h6>
                            <p className="card-text ">You can read price of an asset from the shared collection with retailer</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/readAssetPrice" className="btn btn-small btn-primary">Read Price</a></p>
                    </div>

                    <div className="card ">
                        <img className="card-img-top" src="./images/projects-robodog.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Asset History</h6>
                            <p className="card-text ">You can Read asset history</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/getAssetHistory" className="btn btn-small btn-primary" >Get Asset History</a></p>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="./images/projects-robodog.jpg" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title">Available Products</h6>
                            <p className="card-text ">Here are the Available Products</p>

                        </div>
                        <p className="text-center"><a href="/supermarketFrontPage/getAllAssets" className="btn btn-small btn-primary" >More info</a></p>
                    </div>

                    
                </div> 

                    
            </div>
            
        </section>
    );
}

export default SupermarketFrontPage;
;