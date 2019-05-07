import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Speech from 'speak-tts'
import NavBar from './NavBar'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing.unit,
    },
  });

const speech = new Speech()

class Translate extends React.Component{

  state = {
    word: '',
    transText : ''
  }

  wordOnChange(val){
    this.setState({
      word : val
    })
  }

  onTranslate = (e) => {
    e.preventDefault();
    //alert(this.state.word)
    axios.post(`https://translation.googleapis.com/language/translate/v2?key=`+process.env.REACT_APP_GOOGLE_KEY,
     {"q":this.state.word,
     "target":"en"})
      .then(res => {
        this.setState({
          transText : res.data.data.translations[0]['translatedText']
        })
        speech.speak({
            text: res.data.data.translations[0]['translatedText'],
        }).then(() => {
            console.log("Success !")
        }).catch(e => {
            console.error("An error occurred :", e)
        })
        
      })
  }


    render(){
        const { classes } = this.props;    
        
        return (
            <React.Fragment>
              <NavBar/>
                <Input
                    placeholder="Input word here"
                    className={classes.input}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                    onChange={e => this.wordOnChange(e.target.value)}
                />
                <Button onClick={this.onTranslate} variant="contained" color="primary"> Translate </Button>
                <Typography component="p">
                    Translated Text : {this.state.transText}
                </Typography>
            </React.Fragment>
        );
    }
}

Translate.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Translate));
