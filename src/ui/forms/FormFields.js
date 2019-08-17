import React from 'react';
import FormLabel from '@material-ui/core/FormLabel'
import Input from '@material-ui/core/Input'
import FormGroup from '@material-ui/core/FormGroup'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

const FormFields = (props) => {
    
    const renderFields = () => {
        const formArray = [];

        for(let elementName in props.formData){
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })
        }

        return formArray.map((item,i)=>{
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }

    const showLabel = (show,label) => {
        return show ? 
            <FormLabel style={{fontSize:20}}>{label}</FormLabel>
        : null
    }
    const renderTemplates = (data) => {
        let formTemplate = null;
        let values = data.settings;
    
    const changeHandler = (event,id) => {
        const newState = props.formData;

        newState[id].value = event.target.value;

        props.change(newState)
    }
        switch(values.element){
            case('input'):
                formTemplate = 
                (<FormGroup style={{marginTop:20}}>
                    { showLabel(values.label, values.labelText) }
                    <TextField
                        variant="outlined"
                        margin="dense"
                        {...values.config}
                        value={values.value}
                        onChange={
                            (event) => changeHandler(event, data.id)
                        }
                    />
                </FormGroup>)
                break;
            case('textarea'):
                formTemplate = 
                (
                    <FormGroup style={{marginTop:20}}>
                    { showLabel(values.label, values.labelText) }
                        <TextField
                            variant="outlined"
                            margin="dense"
                            type='textarea'
                            {...values.config}
                            value={values.value}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }
                        />
                    </FormGroup>
                )
                break;
            case('radio'):
                formTemplate = 
                (
                    <FormGroup style={{marginTop:20}}>
                        { showLabel(values.label, values.labelText) }
                        <FormControl component="fieldset" >
                                <RadioGroup
                                aria-label={values.labelText}
                                name={values.config.name}
                                value={values.value}
                                onChange={
                                    (event) => changeHandler(event, data.id)
                                }
                                >
                                    {values.config.options.map((item,i)=>(
                                        <FormControlLabel style={{padding:5, borderTop:'solid black 1px'}} key={i} value={item.val} control={<Radio />} label={item.text} />
                                    ))}
                                </RadioGroup>
                        </FormControl>
                    </FormGroup>
                )
                break;  
            default:
                formTemplate = null;

        }
        return formTemplate
    }

    return (
        <div>
            {renderFields()}
        </div>
    );
};

export default FormFields;