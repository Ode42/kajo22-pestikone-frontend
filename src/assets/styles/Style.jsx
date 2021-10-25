import { StyleSheet } from "aphrodite";
import { fadeInLeft, fadeInRight, fadeInUp } from 'react-animations';

const screenSize = {
    small: '@media only screen and (max-width: 480px)',
    middle: '@media only screen and (min-width: 768px)',
    medium: '@media only screen and (min-width: 1024px)',
    //large: '@media only screen and (min-width: 1200px)'
}

const Styles = StyleSheet.create({
    app : {
        backgroundColor: 'black',
        height: '100vh',
        //width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'aliceblue',
      },
    frame: {
        //maxHeight: '90vh',
        borderRadius: '25px',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'blueviolet',
        color: 'aliceblue',
        height: '100vh',
        maxWidth: '100vw',
        overflowY: 'auto',
        overflowX: 'hidden',
        //minWidth: '70vh',
        //maxWidth: '90vh',
        
        [screenSize.middle]: {
            maxHeight: '95vh',
            minHeight: '70vh',
            maxWidth: '90vw',
            //backgroundColor: 'green'
        },
        
        [screenSize.medium]: {
            maxHeight: '95vh',
            maxWidth: '90vw',
            //backgroundColor: 'blue'
        },
        
        

    },
    userTalker: {
        backgroundColor: 'yellow',
        borderRadius: '25px',
        color: 'black',
        margin: '10px',
        padding: '10px',
        width: 'max-content',
        display: 'flex',
        maxWidth: '70%',
        height: 'max-content',
    },
    userTalker2: {
        backgroundColor: 'fuchsia',
        borderRadius: '25px',
        color: 'black',
        margin: '10px',
        padding: '10px',
        width: 'max-content',
        display: 'flex',
        maxWidth: '70%',
        height: 'max-content',
    },
    talker: {
        ':hover': {
            backgroundColor: 'aqua',
            cursor: 'pointer',
        }
    },
    
    direct: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    right: {
        alignItems: 'center'
    },
    
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    container: {
        display: 'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    //avatar small in mobile
    avatar: {
        maxWidth: '30px',
        maxHeight: '30px',
        margin: '10px',
        borderRadius: '10px',
        //normal for anything else
        [screenSize.middle]: {
            maxWidth: '70px',
            maxHeight: '70px',
            margin: '10px',
            borderRadius: '20px',
        }
    },
    btn: {
        backgroundColor: 'yellow',
        marginLeft: '10px',
        padding: '10px',
        borderRadius: '15px',
        fontWeight: 'bold',
        maxHeight: '45px',
        ':hover': {
            cursor: 'pointer'
        }
        
    },
    fadeInUp: {
        animationName: fadeInUp, 
        animationDuration: '3s',
        display: 'flex',
        flexWrap: 'wrap'
      },
    position: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    input: {
        height: '35px',
        borderColor: "gray",
        borderWidth: '1px',
        fontSize: '20px',
        width: '100px',
        display: "flex",
        textAlign: "center",
      },
      label: {
        margin: "auto",
        paddingRight: '10px',
        color: "Yellow",
      },
      outer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: '5px'
      },
      textCent: {
          textAlign: 'center',
          wordWrap: 'normal'
        
      },
      fadeInRight: {
        animationName: fadeInRight, 
        animationDuration: '2s',
        display: 'flex',
        flexWrap: 'wrap'
      },
      fadeInLeft: {
        animationName: fadeInLeft, 
        animationDuration: '2s',
        display: 'flex',
        flexWrap: 'wrap'
      },
})

export default Styles;
