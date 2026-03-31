function Regform({regforms}){
   function clicked(){
    alert("this is submitted")
   }
  return <>
    <div>
      <form className="forms">
        <p>{regforms.name}</p>
        <input type="text" placeholder="Enter the name"></input>
        <p>{regforms.email}</p>
        <input type="email" placeholder="Enter the email"></input>
        <button onClick={clicked}>Submited</button>
      </form>
    </div>
  </>
}
export default Regform