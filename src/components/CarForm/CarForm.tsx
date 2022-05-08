import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel, chooseColor, chooseYear } from '../../redux/slices/RootSlice';
 import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';


interface CarFormProps {
    id?: string;
    data?:{}

};

interface CarState {
    make: string;
    model: string;
    color: string;
    year: string;
};

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const make = useSelector<CarState>(state => state.make);
    const {register, handleSubmit} = useForm({})

    const onSubmit = (data:any, event:any)=>{
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseColor(data.color));
            dispatch(chooseYear(data.year));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name="make" placeholder = 'Make'/>
                </div>
                <div>
                    <label htmlFor="model">Car Model</label>
                    <Input {...register('model')} name="model" placeholder = 'Model'/>
                </div>
                <div>
                    <label htmlFor="color">Car Color</label>
                    <Input {...register('color')} name="color" placeholder = 'Color'/>
                </div>
                <div>
                    <label htmlFor="year">Car Year</label>
                    <Input {...register('year')} name="year" placeholder = 'Year'/>
                </div>
                <Button type="submit">Submit</Button>

            </form>
        </div>
    )

}