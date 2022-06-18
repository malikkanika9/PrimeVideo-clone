import React from "react";
import { Link } from "react-router-dom";
import Row from "../Row";
import userrequests from "../Request";
import { BootStrapCarousal } from "./Slideshow/BootStrapCarousal";
import NavbarAfterLogin from "./NavbarAfterLogin";
import Banner from "../Banner";
import '../css/movies.css'


export function TvShow() {
    return (
        <>
            <NavbarAfterLogin />
            <BootStrapCarousal />
            <Banner />
            <Row
        title="Continue Watching"
        fetchURL={userrequests.fetchTvPopular}
      />
      
      <Row title="Recommended TvShows" fetchURL={userrequests.fetchTvPopular} />
      <Row title="Top TvShows" fetchURL={userrequests.fetchTvPopular} />
      <Row title="TvShows" fetchURL={userrequests.fetchTvPopular} />
      <Row title="Comedy TvShows" fetchURL={userrequests.fetchTvPopular} />
      <Row title="Horror TvShows" fetchURL={userrequests.fetchTvPopular} />
      <Row title="Romatic TvShows" fetchURL={userrequests.fetchTvPopular} />
      <Row title="TvShows" fetchURL={userrequests.fetchTvPopular} />
        </>
    )
}