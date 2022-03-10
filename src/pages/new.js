import {useState, useEffect} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Button, Form, Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

function New() {
  const [form, setForm] = useState({firstName: '', lastName: '', email: '', phone: '', address: ''});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
      if(isSubmit){
        if (Object.keys(errors).length === 0 ) {
            createNew()
            //alert('Submit is Success');
        } else{
            setIsSubmit(false);
        }
      }
    }, [errors])
    
  const handleSubmit = (e) => {
      e.preventDefault();
      const errs = validate();
      setErrors(errs);
      setIsSubmit(true);
    };
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
      })
    };
    
    const validate = () => {
          const err = {};
    
          if(!form.firstName){
              err.firstName = "Require Firstname";
          }
          if(!form.lastName){
              err.lastName = "Require Lastname";
          }
          if(!form.email){
              err.email = "Require Email";
          }
          if(!form.phone){
              err.phone = "Require phone";
          }
          if(!form.address){
              err.phone = "Require address";
          }
    
          return err;
    }

    const createNew = async() => {
        try {
            const res = await fetch('http://localhost:3000/api/notes', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log("error :", error);
        }
    }
  
  return (
    <div className='form-container'>
        <h2>Create New</h2>
        <div>
            {isSubmit 
            ? <Loader active inline='centered'/>
            : <Form onSubmit={handleSubmit}>
                <Form.Input 
                fluid
                error={errors.firstName ? { content: 'Please Input Your FirstName', pointing: 'below' } : null}
                label= 'FirstName'
                placeHolder= 'FirstName'
                name= 'firstName'
                onChange={handleChange}
                />
                <Form.Input 
                fluid
                error={errors.lastName ? { content: 'Please Input Your LastName', pointing: 'below' } : null}
                label= 'LastName'
                placeHolder= 'LastName'
                name= 'lastName'
                onChange={handleChange}
                />
                <Form.Input 
                fluid
                error={errors.email ? { content: 'Please Input Your email', pointing: 'below' } : null}
                label= 'email'
                placeHolder= 'email'
                name= 'email'
                onChange={handleChange}
                />
                <Form.Input 
                fluid
                error={errors.phone ? { content: 'Please Input Your phone number', pointing: 'below' } : null}
                label= 'phone'
                placeHolder= 'phone'
                name= 'phone'
                onChange={handleChange}
                />
                <Form.TextArea 
                fluid
                error={errors.address ? { content: 'Please Input Your address', pointing: 'below' } : null}
                label= 'address'
                placeHolder= 'address'
                name= 'address'
                onChange={handleChange}
                />
                <Button type='submit'>Create</Button>
            </Form>
        }
        </div>
    </div>
  )
}

export default New;