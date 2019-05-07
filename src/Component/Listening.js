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

const speech1 = new Speech()
speech1.init({
  'volume': 1,
  'lang': 'id-ID',
  'voice':'Google Bahasa Indonesia (id-ID)',
  'rate': 1,
  'pitch': 1,
})
const speech2 = new Speech()
speech2.init({
  'volume': 1,
  'lang': 'en-GB',
  'rate': 1,
  'pitch': 1,
  'splitSentences': true,
})

class Listening extends React.Component{

  state = {
    totalWord : 0,
    indo : this.props.indo,
    english : this.props.english,
    indexNya : [],
    text : ''
  }

  wordOnChange(val){
    this.setState({
      totalWord : val
    })
  }

  onPlay = (e) => {
    e.preventDefault();
    if(this.state.indo.length< this.state.totalWord){
      alert("Masukkan jumlah angka kurang dari " + this.state.indo.length)
    }else{
      let min = 1;
      let max = this.state.indo.length-1;
      while(this.state.indexNya.length<this.state.totalWord){
        let rand = Math.floor(Math.random() * (+max - +min)) + +min
        if(this.state.indexNya.indexOf(rand) === -1) {
          this.state.indexNya.push(rand);
          console.log(rand);
        }
      }
      this.onDelay();
    }
  }

  onDelay = () =>{
    for(let i = 0; i < this.state.indexNya.length; i++){
      setTimeout (function(){
        this.onListen(this.state.indexNya[i])
      }.bind(this),i*3000)
    }
  }

  onListen = (i) =>{
    this.setState({
      text : this.state.indo[i] + ' - ' + this.state.english[i]
    })
    speech1.speak({
      text: this.state.indo[i],
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
    speech2.speak({
      text: this.state.english[i],
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
  }


    render(){
        const { classes } = this.props;    
        
        return (
            <React.Fragment>
              <NavBar/>
                <Input
                    placeholder="Input total words"
                    className={classes.input}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                    onChange={e => this.wordOnChange(e.target.value)}
                />
                <Button onClick={this.onPlay} variant="contained" color="primary"> Play </Button>
                <Typography component="p">
                    Words play : {this.state.text}
                </Typography>
            </React.Fragment>
        );
    }
}

Listening.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = (state) => ({
    indo : state.indo,
    english : state.english
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Listening));
