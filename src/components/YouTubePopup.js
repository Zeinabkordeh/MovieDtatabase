import React from "react";
import PropTypes from "prop-types";
import "./YouTubePopup.css";


const YouTubePopup = ({ embedId, onClose }) => (
  <div className="popup-overlay">
    <div className="video-responsive">
      <iframe
        width="850"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <button className="close-button" onClick={onClose}>X</button>
    </div>
  </div>
);

YouTubePopup.propTypes = {
  embedId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default YouTubePopup;
