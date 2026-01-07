import { jsx } from '@platejs/test-utils';

export const imageValue = [
  <h2>Image</h2>,
  <p>Add images by either uploading them or providing the image URL:</p>,
  <figure style={{ textAlign: 'center' }}>
    <img
      src="https://images.unsplash.com/photo-1712688930249-98e1963af7bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      width="55%"
      alt=""
    />
    <figcaption>Image caption</figcaption>
  </figure>,
  <p>Customize image captions and resize images.</p>,
];

export const mediaPlaceholderValue: any = [
  <h2>Upload</h2>,
  <p>
    Our editor supports various media types for upload, including images,
    videos, audio, and files.
  </p>,
  <div style={{ textAlign: 'center' }}>
    <a href="https://s26.q4cdn.com/900411403/files/doc_downloads/test.pdf">
      sample.pdf
    </a>
  </div>,
  <p style={{ paddingLeft: '1em', listStyleType: 'disc' }}>
    Real-time upload status and progress tracking
  </p>,
  <div style={{ textAlign: 'center' }}>
    <audio
      controls
      src="https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
      style={{ width: '80%' }}
    />
  </div>,
  <p style={{ paddingLeft: '1em', listStyleType: 'disc' }}>
    Configurable file size limits and batch upload settings
  </p>,
  <div style={{ textAlign: 'center' }}>
    <video
      controls
      src="https://videos.pexels.com/video-files/6769791/6769791-uhd_2560_1440_24fps.mp4"
      style={{ width: '80%' }}
    />
  </div>,
  <p style={{ paddingLeft: '1em', listStyleType: 'disc' }}>
    Clear error messages for any upload issues
  </p>,
  <p style={{ paddingLeft: '1em', listStyleType: 'disc' }}>
    Try it now - drag an image from your desktop or click the upload button in
    the toolbar
  </p>,
];

export const mediaValue: any = [
  ...imageValue,
  ...mediaPlaceholderValue,

  <h2>Embed</h2>,
  <p>Embed various types of content, such as videos and tweets:</p>,
  <iframe
    src="https://www.youtube.com/embed/MyiBAziEWUA"
    style={{
      width: '100%',
      aspectRatio: '16/9',
      border: 'none',
      borderRadius: '4px',
    }}
  />,
  /* BUG */
  /* <iframe
    src="https://twitframe.com/show?url=https://twitter.com/zbeyens/status/1677214892212776960"
    style={{
      width: '100%',
      aspectRatio: '9/16',
      border: 'none',
      borderRadius: '4px',
    }}
  /> */
];
