import { useEffect, useRef, useState } from 'react';

const BOOMERANG_VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4';
const MAX_CAPTURE_WIDTH = 960;
const FRAME_INTERVAL = 1000 / 30;

type FrameVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (callback: (now: number, metadata: { mediaTime: number }) => void) => number;
};

/**
 * Plays the source once while collecting offscreen frames, then renders a
 * lightweight forward/reverse canvas loop. The video remains the graceful
 * fallback if the browser cannot expose its frames to canvas.
 */
export function BoomerangVideoBg() {
  const videoRef = useRef<FrameVideo>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const [framesReady, setFramesReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      const showStillFrame = () => { video.pause(); };
      video.addEventListener('loadeddata', showStillFrame, { once: true });
      return () => video.removeEventListener('loadeddata', showStillFrame);
    }

    const useLightweightPlayback = window.matchMedia('(max-width: 767px)').matches;
    if (useLightweightPlayback) {
      video.loop = true;
      void video.play().catch(() => undefined);
      return () => { video.pause(); };
    }

    let active = true;
    let animationFrame = 0;
    let frameCallback = 0;
    let lastTime = -1;

    const captureFrame = () => {
      if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || video.videoWidth === 0) return;
      if (Math.abs(video.currentTime - lastTime) < 0.001) return;

      try {
        const width = Math.min(MAX_CAPTURE_WIDTH, video.videoWidth);
        const height = Math.round(video.videoHeight * (width / video.videoWidth));
        const frame = document.createElement('canvas');
        frame.width = width;
        frame.height = height;
        frame.getContext('2d')?.drawImage(video, 0, 0, width, height);
        framesRef.current.push(frame);
        lastTime = video.currentTime;
      } catch {
        // Cross-origin video without canvas permission continues as native video.
        active = false;
      }
    };

    const requestNextFrame = () => {
      if (!active) return;
      captureFrame();
      if (video.requestVideoFrameCallback) {
        frameCallback = video.requestVideoFrameCallback(() => requestNextFrame());
      } else {
        animationFrame = window.requestAnimationFrame(requestNextFrame);
      }
    };

    const startCapture = () => {
      if (active) requestNextFrame();
    };
    const handleEnded = () => {
      active = false;
      window.cancelAnimationFrame(animationFrame);
      if (framesRef.current.length > 1) {
        setFramesReady(true);
      } else {
        // Retain a visible motion fallback if the source does not permit capture.
        video.currentTime = 0;
        void video.play();
      }
    };

    video.addEventListener('play', startCapture, { once: true });
    video.addEventListener('ended', handleEnded);
    void video.play().catch(() => undefined);

    return () => {
      active = false;
      window.cancelAnimationFrame(animationFrame);
      if (frameCallback && 'cancelVideoFrameCallback' in video) {
        (video as HTMLVideoElement & { cancelVideoFrameCallback: (id: number) => void }).cancelVideoFrameCallback(frameCallback);
      }
      video.removeEventListener('play', startCapture);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (!framesReady) return;
    const canvas = canvasRef.current;
    const frames = framesRef.current;
    if (!canvas || frames.length < 2) return;

    let index = 0;
    let direction = 1;
    const draw = () => {
      const frame = frames[index];
      canvas.width = frame.width;
      canvas.height = frame.height;
      canvas.getContext('2d')?.drawImage(frame, 0, 0);
    };
    draw();

    const interval = window.setInterval(() => {
      index += direction;
      if (index >= frames.length) {
        direction = -1;
        index = Math.max(0, frames.length - 2);
      } else if (index < 0) {
        direction = 1;
        index = Math.min(1, frames.length - 1);
      }
      draw();
    }, FRAME_INTERVAL);

    return () => window.clearInterval(interval);
  }, [framesReady]);

  return <div className="boomerang-video-bg" aria-hidden="true"><div className="boomerang-video-bg__media"><video ref={videoRef} className={framesReady ? 'is-hidden' : undefined} src={BOOMERANG_VIDEO_URL} muted playsInline preload="auto" crossOrigin="anonymous" /><canvas ref={canvasRef} className={framesReady ? 'is-visible' : undefined} /></div></div>;
}
