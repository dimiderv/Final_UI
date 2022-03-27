import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import Error from '../Templates/Error';
import PrintAssets from '../Templates/PrintAssets';



function CreateAsset() {

    //const [formInputID,setFormInputID]=useState('');
    const [formInputWeight,setFormInputWeight]=useState('');
    //const [formInputColor,setFormInputColor]=useState('');
    const [formInputType,setFormInputType]=useState('');
    const [postReply, setPostReply] = useState([]);

    let fetchAttempt=false;
    useEffect( () => {     
        
 
        fetchPostReply();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchPostReply ()  {

        fetchAttempt= !fetchAttempt;
        const formData={
            //assetID:formInputID,
            weight:formInputWeight,
            // color:formInputColor,
            assetType:formInputType
        }
      
       
        const options={
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        };  
        
        //cant fetch any data if everythign is not in place formData.color!=="" && formData.assetID !==""
        if(  formData.weight!=="" &&  formData.assetType!==""){
            const response = await fetch('/createAssetData',options);
            const json = await response.json();
            setPostReply(json); 
            console.log(json);
        }
 
        

    };
    
    // async function waitForm(){
    //     fetchItems()
    // };

    console.log(postReply)


    //show only if assets are available
    //maybe i can do it with react ex <GoBack props="/frontpge" />
    // var count = Object.keys(items).length;
    // console.log("this is the length ",count," this is the type of items ", typeof items, " length of items.id",items.ID)
    // console.log("this is the size of count",count)

    // asset Id input is not needed


//asset type with input text
//     <div className="form-group w-25 mx-auto radio-container">
//     <label htmlFor="type" className="col-form-label mx-auto">Asset Type {formInputType} </label>
//     <div className="col-sm-12 mx-auto "  onChange={e=>setFormInputType(e.target.value)}>

//     {/* <input type="text" className="form-control" onChange={e=>setFormInputColor(e.target.value)} id="color" placeholder="color"/> */}
//         <input type="radio" value="Apples" name="type" /> Apples 
//         <input type="radio" value="Berries" name="type" /> Berries 
//         <input type="radio" value="Grapes" name="type" /> Grapes
//     </div>
//     </div>

    return(
        <div className="container justify-content-center p-5 ">
            <h1 className="mt-5">CreateAsset</h1>
            
                <div className="form-group w-25 mx-auto">
                    <label htmlFor="type" className="col-form-label mx-auto">Asset Type {formInputType}</label>
                    {/* col-xs-3 */}
                    <div className="col-sm-10 w-10 mx-auto">
                        <input type="text" className="form-control " required onChange={e=>setFormInputType(e.target.value)} id="assetID" placeholder="asset#"/>
                    </div>
                </div>


                {/* <div className="form-group w-25 mx-auto radio-container">

                    <label htmlFor="color" className="col-form-label mx-auto">Color {formInputColor} </label>
                    <div className="col-sm-10 mx-auto "  onChange={e=>setFormInputColor(e.target.value)}>
                    {/* <input type="text" className="form-control" onChange={e=>setFormInputColor(e.target.value)} id="color" placeholder="color"/> */}
                        {/* <input type="radio" value="Red" name="color" /> Red   
                        <input type="radio" value="Black" name="color" /> Black 
                        <input type="radio" value="Green" name="color" /> Green <br/>
                        <input type="radio" value="Yellow" name="color" /> Yellow
                        <input type="radio" value="Blue" name="color" /> Blue
                    </div>
                </div> */} 


                <div className="form-group w-25 mx-auto">
                    <label htmlFor="weight" className="col-form-label mx-auto">Weight  {formInputWeight}</label>
                    <div className="col-sm-10 mx-auto">
                    <input type="number" className="form-control" onChange={e=>setFormInputWeight(e.target.value)} id="weight" min="10" max="100" placeholder="weight"/>
                    </div>
                </div>


                <div className="form-group row d-block">
                    <div className="col-sm-12">
                        <button type="submit" value="Send" onClick={fetchPostReply} className="btn btn-primary">Create</button>
                        {/* onClickCapture also worked */}
                    </div>
                </div>
            

            <div>
                {postReply.expirationTime ? (
                    <div className="mx-auto container-fluid p-5">
                        <div className="d-block p-5">
                            <h3>You created {postReply.asset_obj.ID} with the following details: </h3>
                        </div>      
                        <div className="d-flex align-items-center 
                  justify-content-center flex-wrap p-2 m-2 ">
                        
                                <PrintAssets ID={postReply.asset_obj.ID}  weight={postReply.asset_obj.weight} owner={postReply.asset_obj.owner} creator={postReply.asset_obj.creator} expirationDate={postReply.asset_obj.expirationDate} sensorData={postReply.asset_obj.sensorData} ownerOrg={postReply.asset_obj.ownerOrg} assetType={postReply.asset_obj.assetType} daysLeft={postReply.expirationTime} creationTimestamp={postReply.asset_obj.timestamp}/>
                            
                        </div> 
                        <hr />
                        <div>
                            <p className="text-center d-block"><a href="/farmerFrontPage" className="btn btn-small btn-primary" >Go back</a></p>
                        </div>
                    
                    </div>
                    ) : postReply.errorCLI?(
                        <Error message={" Error with status "+postReply.errorStatus+". "+postReply.errorMessage[0].toUpperCase()+postReply.errorMessage.slice(1)+"."}backlink="farmerFrontPage" />
                    ):(
                        <Error message="Plese enter assetID to continue or go back"backlink="farmerFrontPage" />
                    )
                }
            </div>

        </div>
    );



}



export default CreateAsset;

// useEffect( () => {
//     fetchItems();
// }, []);

// const [items, setItems] = useState([]);

// const fetchItems = async () => {
//     const data = await fetch('/createAsset');
//     const items = await data.json();
//     setItems(items);
// };


// //show only if assets are available
// //maybe i can do it with react ex <GoBack props="/frontpge" />
// var count = Object.keys(items).length;
// console.log("this is the length ",count," this is the type of items ", typeof items, " length of items.id",items.ID)
// console.log("this is the size of count",count)


// if(items.ID){
//     return(
//         <div className="mx-auto container-fluid p-5">
//             <div className="d-block p-5">
//                 <h3>successfully created {items.ID} </h3>
//             </div>      
//             <section>
              
//                     <PrintAssets ID={items.ID} color={items.color} weight={items.weight} owner={items.owner} creator={items.creator} expirationDate={items.expirationDate} />
                
//             </section> 
//             <hr />
//             <div>
//                 <p className="text-center d-block"><a href="/farmerFrontPage" className="btn btn-small btn-primary" >Go back</a></p>
//             </div>
           
//         </div>
//     );
// }

// return(
//     <Error message="Something went wrong . The asset couldn't be created.Make sure ID of asset doesn't exist already." backlink="/farmerFrontPage" />
// );
