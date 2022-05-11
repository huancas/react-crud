import React,{useState} from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApp =()=>{
    const initialDB=[
        {id:1,name:"seylla",constellation:"Pegaso"},
        {id:2,name:"shiryu",constellation:"Dragon"},
        {id:3,name:"yoga",constellation:"Cisne"},
        {id:4,name:"shun",constellation:"Andromeda"},
        {id:5,name:"ikki",constellation:"Fénix"}
      ];
    const [db,setDb]= useState(initialDB);
    const [dataToEdit,setDataToEdit]=useState(null);

    const createData=(data)=>{
        data.id=Date.now();
        setDb([...db,data]);
    }
    const updateData=(data)=>{
        let newData=db.map((el)=>(el.id===data.id?data:el));
        setDb(newData);
    }
    const deleteData=(id)=>{
       let isDelete = window.confirm(`¿Está seguro de eliminar el registro con el id '${id}' ?`);
       if(isDelete){
           let newData = db.filter((el)=>el.id!==id); 
           setDb(newData);
       }
    }
    return(
        <div>
        <h2>CRUD APP</h2>
        <CrudForm  
         createData={createData}
         updateData={updateData}
         dataToEdit={dataToEdit}
         setDataToEdit={setDataToEdit}
        />
        <CrudTable data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        />
      
        </div>
    )
}
export default CrudApp