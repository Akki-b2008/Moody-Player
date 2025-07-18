import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import "./FacialExpression.css";

const FaceDetector = () => {
  const videoRef = useRef(null);
  const [expression, setExpression] = useState("");

  const loadModels = async () => {
    const MODEL_URL = "/models";

    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL), // better alignment
    ]);

    startVideo();
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Webcam error:", err));
  };
  loadModels();

  const moodDetect = async () => {
    if (videoRef.current) {
      const video = videoRef.current;

      const detection = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (!detection || detection.length === 0) {
        console.log("face not detected");
        return;
      }

      let mostProbableDetection = 0;
      let _expression = "";

      for (const expression of Object.keys(detection[0]?.expressions)) {
        if (detection[0].expressions[expression] > mostProbableDetection) {
          mostProbableDetection = detection[0].expressions[expression];
          _expression = expression;
        }
        console.log(detection[0].expressions);
      }

      setExpression(_expression);
    }
  };

  return (
    <div className="expression_detector">
      <div className="webcam">
        <video ref={videoRef} autoPlay muted  />
      </div>

      <button onClick={moodDetect}>Detect mood</button>
    </div>
  );
};

export default FaceDetector;
