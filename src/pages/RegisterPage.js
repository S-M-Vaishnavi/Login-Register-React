import React, {useState}from 'react'
import './RegisterPage.css';

const RegisterPage = () => {

    const [errors, setErrors] = useState({
        email: { required: false },
        name: { required: false },
        password: { required: false },
        custom_error: null,
      });

    const[loading,setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const[inputs,setInputs] = useState(
        {
            email:'',
            password:'',
            name:''
        }
    )

    const handleInputs = (event) => {
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

  return (
    <section className="register-block">
    <div className="container">
       <div className="row ">
          <div className="col register-sec">
             <h2 className="text-center">Register Now</h2>
             <form className="register-form" action="" onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
                <input type="text" className="form-control" name="name" id="" required  onChange={ handleInputs}/>
                {
                    errors.name.required ? (
                        <span className="text-danger" >
                            Name is required.
                        </span>
                    ) : null
                }  
             </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                <input type="text"  className="form-control" name="email" id="" required  onChange={handleInputs}/>
                {
                    errors.email.required ? (
                    <span className="text-danger" >
                        Email is required.
                    </span>
                    ) : null
                }
             </div>

             <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                <input  className="form-control" type="password"  name="password" id="" required  onChange={handleInputs}/>
                {
                    errors.password.required ? (
                    <span className="text-danger" >
                        Password is required.
                    </span>
                    ) : null
                }              
             </div>

             <div className="form-group">
                {
                    errors.custom_error ? (
                        <span className="text-danger" >
                            <p>{errors.custom_error }</p>
                        </span>
                    ) : null
                }
                
                {
                    loading ? (
                        <div  className="text-center">
                        <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    ) : null
                }
                <input type="submit" className="btn btn-login float-right"  value="Register" />
             </div>

             <div className="clearfix"></div>
             <div className="form-group">
               Already have account ? Please <a href="#">Login</a>
             </div>
             </form>
          </div>
       </div>
    </div>
  </section>
  )
}

export default RegisterPage