export  function VideobgComponent() {
  return (
    <div className="w-full h-full object-cover">
     <video className="max-h-full min-h-screen min-w-screen object-cover" src={"../../assets/video/videoBg.mp4"} autoPlay loop muted/>
    </div>
  );
}
