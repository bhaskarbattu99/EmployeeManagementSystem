const Register=()=>{
    return(
        <>
        <div class="main">
           <h2>Employee Registration Form </h2>
           {
            <form name={"regForm"} onSubmit={"return Register()"}>
           <table>
            <tr>
                <td>Name</td>
                <td><input type="text" placeholder="enter your name"/></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" placeholder="enter your password"/></td>
            </tr>
            <tr>
                <td>Conform Password</td>
                <td><input type="password" placeholder="retype your password"/></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="email" placeholder="enter your mail address"/></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td><input type="radio"/>Male
                    <input type="radio"/>Female</td>
           </tr>
           <tr>
                <td>Mobile No</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><textarea></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="Register"/></td>
            </tr>
           </table>
           </form>
            }
            </div>
        </>
    )
}
export default Register;