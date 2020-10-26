import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';

const ZSSelect = props => {
    const [value, setValue] = useState("")
    const [label, setLabel] = useState("")

    useEffect(() => {
        if (props.value) {
            props.options.forEach(item => {
                if (item[props.valueField] === props.value) {
                    setValue(props.value);
                }
            });
        }

        if (props.label) {
            setLabel(props.label);
        }
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value)
        props.onChange(event.target.value)
    };

    return (
        <FormControl className="ZSSelectFC">
            <InputLabel id="label-ZSSelect">
                {label}
            </InputLabel>
            <Select
                value={value}
                onChange={handleChange}
                labelId="label-ZSSelect"
                variant="outlined"
            >                
                {
                    props.options.map((item, index) => {
                        return (
                            <MenuItem value={item[props.valueField]} key={index}>{item[props.displayField]}</MenuItem >
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default ZSSelect