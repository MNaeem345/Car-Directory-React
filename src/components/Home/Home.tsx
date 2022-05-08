import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';



interface Directory {
    title: string;
}




const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(#FFE53B 0%, #FF2525 46%)`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
    },
    button_text: {
        color: '#FFE53B',
        textDecoration: 'none',
    },
})
export const Home = ( props: Directory ) =>{
    
    const classes = useStyles();




    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <Button>
                        <Link to='/car_directory' className={classes.button_text}>Take me to my car Directory</Link>
                    </Button>

                </div>
            </div>
        
        </>
    )
}