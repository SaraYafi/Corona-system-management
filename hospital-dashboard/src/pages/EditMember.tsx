import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getMemberByIdApi } from "../api/members.api";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Box} from '@mui/material';
import BackButton from "../components/BackButton";



// const validationSchema = yup.object({
//   artist: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   title: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });
function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        // backgroundColor: (theme) =>
        //   theme.palette.mode === 'light'
        //     ? 'rgba(255, 0, 0, 0.1)'
        //     : 'rgb(255 132 132 / 25%)',
      }}
    />
  );
}

const EditMember = (props:{updateMember:Function} ) => {
  const { memberId } = useParams();
 
  let [member, setMember] = useState({ 
  id: "",
  firstName:"",
  lastName:"",
  address:{city:" ",street:" ",numHouse:0},
  birthDate:new Date(),
  phone:"",
  cellPhone:"",
  positiveResultDate:new Date(),
  recoveryDate:new Date(),
  vaccinations:[{ vacDate:new Date(),
  manufacturer:""}]});

  useEffect(() => {
    async function f() {
      setMember((await getMemberByIdApi(memberId|| "")).data);
    }
    f();
  }, []);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: member,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      props.updateMember(formik.values);
      
    },
  });

  return (
    <>
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "81ch",
          marginLeft: 75,
          marginTop: 10,
        }}
      >
        <form onSubmit={formik.handleSubmit}><>
          <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '38.5ch' },
          }}
          noValidate
          autoComplete="off"
        >
           <TextField
            fullWidth
            id="id"
            name="id"
            label="ID"
            type="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            error={formik.touched.id && Boolean(formik.errors.id)}
            helperText={formik.touched.id && formik.errors.id}
          />
           <LocalizationProvider dateAdapter={AdapterDateFns}>
           <DatePicker
		       label="Birth Date"
           value={formik.values.birthDate}
           onChange={(value:any) => {
        		formik.setFieldValue('birthDate', value);
        		}}
		renderInput={(params:any) => <TextField {...params} />}
        />
         </LocalizationProvider>
          </Box> 
          <RedBar />
          
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '38.5ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
                  id="firstName"
                  name="firstName"
                  label="FirstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
                 <TextField
                  id="lasttName"
                  name="lastName"
                  label="LastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
            </Box> 
          <RedBar />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
            id="address.city"
            name="address.city"
            label="City"
            value={formik.values.address.city}
            onChange={formik.handleChange}
            error={formik.touched.address?.city && Boolean(formik.errors.address?.city)}
            helperText={formik.touched.address?.city && formik.errors.address?.city}
          />
          <TextField
            id="address.street"
            name="address.street"
            label="Street"
            value={formik.values.address.street}
            onChange={formik.handleChange}
            error={formik.touched.address?.street && Boolean(formik.errors.address?.street)}
            helperText={formik.touched.address?.street && formik.errors.address?.street}
          />
      <TextField
            id="address.numHouse"
            name="address.numHouse"
            label="NumHouse"
            value={formik.values.address.numHouse}
            onChange={formik.handleChange}
            error={formik.touched.address?.numHouse && Boolean(formik.errors.address?.numHouse)}
            helperText={formik.touched.address?.numHouse && formik.errors.address?.numHouse}
          />
      </Box> 
          <RedBar />
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '38.5ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
                 <TextField
                  id="cellPhone"
                  name="cellPhone"
                  label="CellPhone"
                  value={formik.values.cellPhone}
                  onChange={formik.handleChange}
                  error={formik.touched.cellPhone && Boolean(formik.errors.cellPhone)}
                  helperText={formik.touched.cellPhone && formik.errors.cellPhone}
                />
            </Box> 
          <RedBar />
          <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '38.5ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
           <MobileDatePicker
          label="Positive Result Date"
          inputFormat="MM/dd/yyyy"
          value={formik.values.positiveResultDate}
          onChange={(value:any) => {
        		formik.setFieldValue('positiveResultDate', value);
        		}}
          renderInput={(params:any) => <TextField {...params} />}
        />
         </LocalizationProvider>
           <LocalizationProvider dateAdapter={AdapterDateFns}>
           <MobileDatePicker
          label="Recovery Date"
          inputFormat="MM/dd/yyyy"
          value={formik.values.recoveryDate}
          onChange={(value:any) => {
        		formik.setFieldValue('recoveryDate', value);
        		}}
          renderInput={(params:any) => <TextField {...params} />}
        />
         </LocalizationProvider>
          </Box> 
          <RedBar />
          <label>vaccinations</label>
          {
            formik.values.vaccinations.map((vac=>{
            return( <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '38.5ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker

      label="Vaccination Date"
      inputFormat="MM/dd/yyyy"
      value={vac.vacDate}
      onChange={(value:any)=>{ 
        let ind= formik.values.vaccinations.indexOf(vac);
        let vacArr=[...formik.values.vaccinations]
        vacArr[ind].vacDate=value;
        formik.setFieldValue('vaccinations',vacArr)}
        }
      renderInput={(params:any) => <TextField {...params} />}
    />
     </LocalizationProvider>
     <TextField
              id="manufacturer"
              name="manufacturer"
              label="Manufacturer"
              value={vac.manufacturer}
              onChange={(e:any)=>{ 
                let ind= formik.values.vaccinations.indexOf(vac);
                let vacArr=[...formik.values.vaccinations]
                vacArr[ind].manufacturer=e.target.value;
                formik.setFieldValue('vaccinations',vacArr)}
                }
            />
          </Box> )
            }))
          }
           {formik.values.vaccinations.length<4&&
       <Button color="primary" variant="contained" style={{margin:"1vw",marginLeft:"18vw"}} onClick={()=>{  
          let vacArr=[...formik.values.vaccinations,{ vacDate:new Date(),
            manufacturer:""}]
          formik.setFieldValue('vaccinations',vacArr);
          }
       }>
        הוסף חיסון
     </Button>
      }

          
          <Button color="primary" variant="contained" fullWidth type="submit">
           עדכן
          </Button>
          <RedBar />
          </> </form>
      </Box>
      <BackButton navigateTo="members" />
    </>
  );
};
export default EditMember;
