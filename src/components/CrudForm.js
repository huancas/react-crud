import React,{useState,useEffect} from "react";
const initialForm ={
    name:"",
    constellation:"",
    id:null
}
const CrudForm =({createData,updateData,dataToEdit,setDataToEdit})=>{
    const [form,setForm]=useState(initialForm);
    useEffect(()=>{
      if(dataToEdit){
          setForm(dataToEdit);
      }else{
          setForm(initialForm);
      }
    },[dataToEdit])
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!form.name||!form.constellation){
            alert('Datos incompletos');
            return;
        }
        if(form.id===null){
            createData(form);
        }else{
            updateData(form);

        }
       
        handleReset();
     }

    const handleChange =(e)=>{
      setForm({
        ...form,[e.target.name]:e.target.value
      });
    }
    const handleReset =(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
     }
    return(
        <div>
        <h3>Agregar</h3>
        <form>
            <input type="text" name="name" onChange={handleChange} value={form.name} placeholder="Nombre" />
            <input type="text" onChange={handleChange} value={form.constellation} name="constellation" placeholder="Constelacion" />
            <input type="submit" onClick={handleSubmit} value="enviar" />
            <input type="reset" onClick={handleReset} value="Limpiar" />
        </form>
        <table></table>
        </div>
    )
}
export default CrudForm