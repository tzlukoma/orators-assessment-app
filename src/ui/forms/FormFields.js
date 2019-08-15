import React from 'react';
import FormLabel from '@material-ui/core/FormLabel'
import Input from '@material-ui/core/Input'
import FormGroup from '@material-ui/core/FormGroup'
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
            <FormLabel >{label}</FormLabel>
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
                (<FormGroup style={{marginTop:20, }}>
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