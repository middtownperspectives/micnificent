import React, { Component } from "react";
import axios from "axios";
import Card from "../components/Card/Card";

class LastFM extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_LastFM_Key;

    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=${API_KEY}&format=json`
      )
      .then(res => {
        this.setState({ artists: res.data.artists.artist });
      });
  }

  render() {
    const artists = this.state.artists.map((artist, index) => {
      return (
        <Card key={index} title={artist.name} playCount={artist.playcount} />
      );
    });

    return <section> {artists} </section>;
  }
}

export default LastFM;
